import { CreepRole } from "./creepRole";
import { SourceData, RemoteSourceData } from "../dataInterfaces/sourceData";
import { offsetPositionByDirection } from "../utils/RoomPositionHelpers";
import { unpackPosition } from "../utils/RoomPositionPacker";

export class RemoteHaulerRole extends CreepRole {
    runRole() {
        if (this.creep === null || this.creep.memory.roleData === undefined || this.creep.memory.roleData.target === undefined) {
            return;
        }

        if (this.creep.memory.roleData.hasEnergy === undefined) {
            this.creep.memory.roleData.hasEnergy = false;
        }
    
        if (this.creep.memory.roleData.hasEnergy == false && this.creep.store.getFreeCapacity() == 0) {
            this.creep.memory.roleData.hasEnergy = true;
        }
    
        if (this.creep.memory.roleData.hasEnergy == true && this.creep.store.getUsedCapacity(RESOURCE_ENERGY) == 0) {
            this.creep.memory.roleData.hasEnergy = false;
        }
        
        const sourceIndex:string|undefined = this.creep.memory.roleData.targetId;
        if (sourceIndex === undefined) {
            console.log("invalid sourceIndex");
            return;
        }
        const sourceData:RemoteSourceData = Memory.rooms[this.creep.memory.roleData.target].remoteLayout.sources[parseInt(sourceIndex)];
        if (sourceData === undefined) {
            console.log("invalid sourceData");
            return;
        }
        const minerPos:RoomPosition = offsetPositionByDirection(unpackPosition(sourceData.pos),sourceData.container);

        if (this.creep.memory.roleData.hasEnergy === false) {
            
            if (this.creep.pos.isNearTo(minerPos)) {
                let container:StructureContainer|null = null;

                if (container === null) {
                    container = _.filter(minerPos.lookFor(LOOK_STRUCTURES),(s:Structure)=>(s.structureType === STRUCTURE_CONTAINER))[0] as StructureContainer;
                }
                
                if (container != undefined && container.store.getUsedCapacity(RESOURCE_ENERGY) >= this.creep.store.getFreeCapacity()) {
                    this.creep.withdraw(container,RESOURCE_ENERGY);
                }
            } else {
                this.smartMove(minerPos);
            }
        } else {
            const container:StructureContainer = _.filter(unpackPosition(Game.rooms[this.creep.memory.home].memory.layout.controllerStore).lookFor(LOOK_STRUCTURES),(s:Structure)=>(s.structureType === STRUCTURE_CONTAINER))[0] as StructureContainer;
            let target:StructureContainer|StructureStorage|StructureLink|undefined = undefined;

            if (container != undefined && container.store.getFreeCapacity(RESOURCE_ENERGY) > CONTAINER_CAPACITY*0.25) {
                target = container;
            }

            if (target === undefined && Game.rooms[this.creep.memory.home].storage != undefined) {
                const storage:StructureStorage|undefined = Game.rooms[this.creep.memory.home].storage;
                if (storage != undefined && storage.store.getUsedCapacity(RESOURCE_ENERGY) > 100000) {
                    const cpos = unpackPosition(Memory.rooms[this.creep.memory.home].layout.baseCenter);
                    const link:StructureLink = _.filter(new RoomPosition(cpos.x,cpos.y-1,cpos.roomName).lookFor(LOOK_STRUCTURES),(s:Structure)=>(s.structureType === STRUCTURE_LINK))[0] as StructureLink;
                
                    if (link != null && link.store.getFreeCapacity(RESOURCE_ENERGY) as number > 0) {
                        target = link;
                    }
                }
                if (target === undefined) { 
                    target = Game.rooms[this.creep.memory.home].storage;
                }
            }             

            if (target != undefined) {
                if (this.creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    this.smartMove(target.pos,1);
                }
            }

            
        }
    }
}