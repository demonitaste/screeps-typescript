declare namespace NodeJS {
    interface Global {
        Memory?: Memory;
    }
}

interface RawMemory {
    _parsed: Memory;
}

interface CreepMemory {
    role: string;
    home: string;
    roleData?: {
        target?: string;
        targetId?: string;
        hasEnergy?: boolean;
        anyStore?: any;
    };
    checkIdle?: {
        idleCount: number;
        lastPos: RoomPosition;
    };
    getEnergy?: {
        target?: string;
    };
    boost?: {
        [resource in MineralBoostConstant]: number;
    };
    _move?: any;
    labrador?: {
        task: LabradorTask | undefined;
        qtask: LabradorTask[];
    };
}

interface RoomMemory {
    roomLevel: number;
    hostiles: { [key: string]: import("./dataInterfaces/hostileData").HostileData };
    reservation: ReservationDefinition | undefined;
    spawnQueue: import("./dataInterfaces/spawnData").SpawnData[];
    constructionSites: { [site: string]: RoomPosition };
    repairTargets: { [id: string]: RoomPosition };
    remotes: string[];
    remoteSupportRooms: string[];
    basicLayout: import("./dataInterfaces/layoutData").BasicLayoutData;
    remoteLayout: import("./dataInterfaces/layoutData").RemoteLayoutData;
    layout: import("./dataInterfaces/layoutData").LayoutData;
    linkStatus: LinkStatus;
    labs?: import("./dataInterfaces/labsData").LabsData;
    resources?: import("./dataInterfaces/resourcesData").ResourcesData;
    rampartData?: import("./dataInterfaces/rampartData").RampartData;
    lastUpdate: number;
}

interface Memory {
    cpuAvg: number;
    stats: Stats;
}

interface Stats {
    time: number;
    cpu: {
        used: number;
        limit: number;
        bucket: number;
    };
    gcl: {
        progress: number;
        progressTotal: number;
        level: number;
    };
    rooms: {
        [key in string]: RoomStats;
    };
}

interface RoomStats {
    energystored: number;
    controller: {
        level: number;
        progress: number;
        progressTotal: number;
    };
    rampartavg: number;
    rampartmin: number;
    rampartmax: number;
}

declare type LinkStatus = "fill" | "empty";
declare type ActionType = "transfer" | "withdraw" | "pickup";

declare type BaseType = "bunker" | "auto";
declare type LabDirection = 0 | 1 | 2 | 3;

declare interface BuildInstruction {
    x: number;
    y: number;
    type: BuildableStructureConstant;
    name?: string;
}

declare type RoleCountFunction = (room: Room, creeps: Creep[]) => number;
declare type RoleNeedFunction = (room: Room) => number;
declare type RoleCalcFunction = (room: Room, delta: number) => void;

declare interface LabradorTask {
    id: Id<AnyStoreStructure | Resource | Tombstone>;
    resourceType: ResourceConstant;
    amount: number;
    type: ActionType;
}

declare namespace _ {}
