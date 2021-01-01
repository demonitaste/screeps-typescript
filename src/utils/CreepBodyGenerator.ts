/**
 * original by kaiskye
 * ported to TS by Awesomeadda
 *
 * Generates a list of body parts to spawn a creep with by following a
 * regex-like pattern to decide which parts to try spawning and fitting in as
 * many parts as possible for the given amount of energy.
 *
 * Pattern examples:
 *
 *   'mah'        1 MOVE, 1 ATTACK, and 1 HEAL part
 *   'mw4a'       1 MOVE part, 4 WORK parts, and 1 ATTACK part
 *   'm*'         As many MOVE parts as will fit
 *   'w*m*t*'     As many WORK parts as will fit, then as many MOVE parts as
 *                  will fit, then as many TOUGH parts as will fit
 *   'm[wc]*'     1 MOVE part, then alternate between WORK and CARRY parts
 *                  until one doesn't fit
 *   '[mw3]*'     1 MOVE part for every 3 WORK parts, until one doesn't fit
 *   'm3[arh]*t*' 3 MOVE parts, then cycle between ATTACK, RANGED_ATTACK,
 *                  and HEAL until one doesn't fit, then as many TOUGH
 *                  parts as will fit
 *   '[m[wc]2]*'  Cycle between MOVE, WORK, CARRY, WORK, CARRY until one
 *                  doesn't fit
 */
export function GenerateBodyFromPattern(pattern: string, energy: number): BodyPartConstant[] {
    const parts: { [index: string]: BodyPartConstant } = {
        a: ATTACK,
        c: CARRY,
        h: HEAL,
        l: CLAIM,
        m: MOVE,
        r: RANGED_ATTACK,
        t: TOUGH,
        w: WORK
    };
    const result: BodyPartConstant[] = [];
    const stack: any = [];
    let i: number = 0;
    let repeat: number = 0;
    let depleted: boolean = false;
    while (i < pattern.length && energy > 0 && result.length < 50) {
        const c: string = pattern[i];
        if (c === "*" || (parseInt(c, 10) >= 0 && parseInt(c, 10) <= 9)) {
            const top = stack.pop();
            if (top === undefined) {
                break;
            }
            let count: number = 0;
            while (i < pattern.length && parseInt(pattern[i], 10) >= 0 && parseInt(pattern[i], 10) <= 9) {
                count = count * 10 + parseInt(pattern[i], 10);
                i++;
            }
            if (c === "*") {
                count = 999;
                i++;
            }
            if (depleted === false && top[1] < count - 1) {
                i = top[0];
                repeat = top[1] + 1;
            } else {
                repeat = 0;
                if (stack.length === 0) {
                    depleted = false;
                }
            }
            stack.push(top);
            continue;
        }
        stack.pop();
        if (c === "[") {
            stack.push([i, repeat]);
            stack.push(null);
        }
        if (c in parts) {
            if (!depleted) {
                const cost = BODYPART_COST[parts[c]];
                if (energy >= cost) {
                    result.push(parts[c]);
                    energy -= cost;
                } else {
                    depleted = true;
                }
            }
            stack.push([i, repeat]);
        }
        repeat = 0;
        i++;
    }
    return result;
}

export const rolePatterns: { [roleName: string]: string } = {
    builder: "[wmc]15",
    filler: "[mcc]8",
    foot: "[mcw]*",
    hauler: "[mcc]8",
    labrador: "[mcc]8",
    miner: "mw6cw4m",
    mineralHauler: "[mcc]8",
    mineralMiner: "[mwwww]10",
    peacekeeper: "[mamamamrmr]3",
    remoteHauler: "[cmc]10",
    remoteMiner: "w4cmw2m3w4m",
    reserver: "[lm]5",
    scout: "m",
    upgrader: "[mwcwmw]8"
};

export const bodySortingValues: { [bodyPartName: string]: number } = {
    attack: 4,
    carry: 3,
    claim: 1,
    heal: 6,
    move: 7,
    ranged_attack: 5,
    tough: 0,
    work: 2
};
