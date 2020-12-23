export const bunkerLayout: BuildInstruction[][] = [
    [],
    [],
    [
        { x: -1, y: 3, type: STRUCTURE_EXTENSION },
        { x: 1, y: 3, type: STRUCTURE_EXTENSION },
        { x: 0, y: 4, type: STRUCTURE_EXTENSION },
        { x: -1, y: 5, type: STRUCTURE_EXTENSION },
        { x: 0, y: 5, type: STRUCTURE_EXTENSION }
    ],
    [
        { x: -1, y: -3, type: STRUCTURE_EXTENSION },
        { x: 1, y: -3, type: STRUCTURE_EXTENSION },
        { x: 0, y: -4, type: STRUCTURE_EXTENSION },
        { x: -1, y: -5, type: STRUCTURE_EXTENSION },
        { x: 1, y: -5, type: STRUCTURE_EXTENSION },

        { x: -4, y: 0, type: STRUCTURE_ROAD },
        { x: -5, y: 0, type: STRUCTURE_ROAD },
        { x: -6, y: 0, type: STRUCTURE_ROAD },
        { x: 4, y: 0, type: STRUCTURE_ROAD },
        { x: 5, y: 0, type: STRUCTURE_ROAD },
        { x: 6, y: 0, type: STRUCTURE_ROAD },
        { x: -1, y: -4, type: STRUCTURE_ROAD },
        { x: -2, y: -5, type: STRUCTURE_ROAD },
        { x: -1, y: -6, type: STRUCTURE_ROAD },
        { x: 1, y: -4, type: STRUCTURE_ROAD },
        { x: 2, y: -5, type: STRUCTURE_ROAD },
        { x: 1, y: -6, type: STRUCTURE_ROAD },
        { x: -1, y: 4, type: STRUCTURE_ROAD },
        { x: -2, y: 5, type: STRUCTURE_ROAD },
        { x: -1, y: 6, type: STRUCTURE_ROAD },
        { x: 1, y: 4, type: STRUCTURE_ROAD },
        { x: 2, y: 5, type: STRUCTURE_ROAD },
        { x: 1, y: 6, type: STRUCTURE_ROAD },
        { x: 0, y: 6, type: STRUCTURE_ROAD },
        { x: 0, y: -6, type: STRUCTURE_ROAD },

        { x: -6, y: -6, type: STRUCTURE_ROAD },
        { x: -4, y: -6, type: STRUCTURE_ROAD },
        { x: -3, y: -6, type: STRUCTURE_ROAD },
        { x: -2, y: -6, type: STRUCTURE_ROAD },
        { x: 2, y: -6, type: STRUCTURE_ROAD },
        { x: 3, y: -6, type: STRUCTURE_ROAD },
        { x: 4, y: -6, type: STRUCTURE_ROAD },
        { x: 6, y: -6, type: STRUCTURE_ROAD },
        { x: -5, y: -5, type: STRUCTURE_ROAD },
        { x: 5, y: -5, type: STRUCTURE_ROAD },

        { x: -6, y: 6, type: STRUCTURE_ROAD },
        { x: -4, y: 6, type: STRUCTURE_ROAD },
        { x: -3, y: 6, type: STRUCTURE_ROAD },
        { x: -2, y: 6, type: STRUCTURE_ROAD },
        { x: 2, y: 6, type: STRUCTURE_ROAD },
        { x: 3, y: 6, type: STRUCTURE_ROAD },
        { x: 4, y: 6, type: STRUCTURE_ROAD },
        { x: 6, y: 6, type: STRUCTURE_ROAD },
        { x: -5, y: 5, type: STRUCTURE_ROAD },
        { x: 5, y: 5, type: STRUCTURE_ROAD },

        { x: -6, y: -4, type: STRUCTURE_ROAD },
        { x: -6, y: -3, type: STRUCTURE_ROAD },
        { x: -6, y: -2, type: STRUCTURE_ROAD },
        { x: -6, y: -1, type: STRUCTURE_ROAD },
        { x: -6, y: 1, type: STRUCTURE_ROAD },
        { x: -6, y: 2, type: STRUCTURE_ROAD },
        { x: -6, y: 3, type: STRUCTURE_ROAD },
        { x: -6, y: 4, type: STRUCTURE_ROAD },

        { x: 6, y: -4, type: STRUCTURE_ROAD },
        { x: 6, y: -3, type: STRUCTURE_ROAD },
        { x: 6, y: -2, type: STRUCTURE_ROAD },
        { x: 6, y: -1, type: STRUCTURE_ROAD },
        { x: 6, y: 1, type: STRUCTURE_ROAD },
        { x: 6, y: 2, type: STRUCTURE_ROAD },
        { x: 6, y: 3, type: STRUCTURE_ROAD },
        { x: 6, y: 4, type: STRUCTURE_ROAD },
        { x: 3, y: -4, type: STRUCTURE_ROAD },
        { x: 4, y: -3, type: STRUCTURE_ROAD },
        { x: -3, y: -4, type: STRUCTURE_ROAD },
        { x: -4, y: -3, type: STRUCTURE_ROAD },

        { x: 3, y: 4, type: STRUCTURE_ROAD },
        { x: 4, y: 3, type: STRUCTURE_ROAD },

        { x: -3, y: 4, type: STRUCTURE_ROAD },
        { x: -4, y: 3, type: STRUCTURE_ROAD }
    ],
    [
        { x: 3, y: -5, type: STRUCTURE_EXTENSION },
        { x: 4, y: -5, type: STRUCTURE_EXTENSION },
        { x: 2, y: -4, type: STRUCTURE_EXTENSION },
        { x: 4, y: -4, type: STRUCTURE_EXTENSION },
        { x: 5, y: -4, type: STRUCTURE_EXTENSION },
        { x: -3, y: -5, type: STRUCTURE_EXTENSION },
        { x: -4, y: -5, type: STRUCTURE_EXTENSION },
        { x: -2, y: -4, type: STRUCTURE_EXTENSION },
        { x: -4, y: -4, type: STRUCTURE_EXTENSION },
        { x: -5, y: -4, type: STRUCTURE_EXTENSION }
    ],
    [
        { x: -3, y: -3, type: STRUCTURE_EXTENSION },
        { x: -3, y: -2, type: STRUCTURE_EXTENSION },
        { x: -4, y: -2, type: STRUCTURE_EXTENSION },
        { x: -5, y: -2, type: STRUCTURE_EXTENSION },
        { x: -5, y: -3, type: STRUCTURE_EXTENSION },
        { x: 3, y: -3, type: STRUCTURE_EXTENSION },
        { x: 3, y: -2, type: STRUCTURE_EXTENSION },
        { x: 4, y: -2, type: STRUCTURE_EXTENSION },
        { x: 5, y: -2, type: STRUCTURE_EXTENSION },
        { x: 5, y: -3, type: STRUCTURE_EXTENSION },

        { x: -4, y: -6, type: STRUCTURE_RAMPART },
        { x: -3, y: -6, type: STRUCTURE_RAMPART },
        { x: -2, y: -6, type: STRUCTURE_RAMPART },
        { x: -1, y: -6, type: STRUCTURE_RAMPART },
        { x: 0, y: -6, type: STRUCTURE_RAMPART },
        { x: 1, y: -6, type: STRUCTURE_RAMPART },
        { x: 2, y: -6, type: STRUCTURE_RAMPART },
        { x: 3, y: -6, type: STRUCTURE_RAMPART },
        { x: 4, y: -6, type: STRUCTURE_RAMPART },
        { x: -5, y: -5, type: STRUCTURE_RAMPART },
        { x: -4, y: -5, type: STRUCTURE_RAMPART },
        { x: -3, y: -5, type: STRUCTURE_RAMPART },
        { x: -2, y: -5, type: STRUCTURE_RAMPART },
        { x: -1, y: -5, type: STRUCTURE_RAMPART },
        { x: 0, y: -5, type: STRUCTURE_RAMPART },
        { x: 1, y: -5, type: STRUCTURE_RAMPART },
        { x: 2, y: -5, type: STRUCTURE_RAMPART },
        { x: 3, y: -5, type: STRUCTURE_RAMPART },
        { x: 4, y: -5, type: STRUCTURE_RAMPART },
        { x: 5, y: -5, type: STRUCTURE_RAMPART },
        { x: -6, y: -4, type: STRUCTURE_RAMPART },
        { x: -5, y: -4, type: STRUCTURE_RAMPART },
        { x: -4, y: -4, type: STRUCTURE_RAMPART },
        { x: -3, y: -4, type: STRUCTURE_RAMPART },
        { x: -2, y: -4, type: STRUCTURE_RAMPART },
        { x: -1, y: -4, type: STRUCTURE_RAMPART },
        { x: 0, y: -4, type: STRUCTURE_RAMPART },
        { x: 1, y: -4, type: STRUCTURE_RAMPART },
        { x: 2, y: -4, type: STRUCTURE_RAMPART },
        { x: 3, y: -4, type: STRUCTURE_RAMPART },
        { x: 4, y: -4, type: STRUCTURE_RAMPART },
        { x: 5, y: -4, type: STRUCTURE_RAMPART },
        { x: 6, y: -4, type: STRUCTURE_RAMPART },
        { x: -6, y: -3, type: STRUCTURE_RAMPART },
        { x: -5, y: -3, type: STRUCTURE_RAMPART },
        { x: -4, y: -3, type: STRUCTURE_RAMPART },
        { x: -3, y: -3, type: STRUCTURE_RAMPART },
        { x: -2, y: -3, type: STRUCTURE_RAMPART },
        { x: 2, y: -3, type: STRUCTURE_RAMPART },
        { x: 3, y: -3, type: STRUCTURE_RAMPART },
        { x: 4, y: -3, type: STRUCTURE_RAMPART },
        { x: 5, y: -3, type: STRUCTURE_RAMPART },
        { x: 6, y: -3, type: STRUCTURE_RAMPART },
        { x: -6, y: -2, type: STRUCTURE_RAMPART },
        { x: -5, y: -2, type: STRUCTURE_RAMPART },
        { x: -4, y: -2, type: STRUCTURE_RAMPART },
        { x: -3, y: -2, type: STRUCTURE_RAMPART },
        { x: 3, y: -2, type: STRUCTURE_RAMPART },
        { x: 4, y: -2, type: STRUCTURE_RAMPART },
        { x: 5, y: -2, type: STRUCTURE_RAMPART },
        { x: 6, y: -2, type: STRUCTURE_RAMPART },
        { x: -6, y: -1, type: STRUCTURE_RAMPART },
        { x: -5, y: -1, type: STRUCTURE_RAMPART },
        { x: -4, y: -1, type: STRUCTURE_RAMPART },
        { x: 4, y: -1, type: STRUCTURE_RAMPART },
        { x: 5, y: -1, type: STRUCTURE_RAMPART },
        { x: 6, y: -1, type: STRUCTURE_RAMPART },
        { x: -6, y: 0, type: STRUCTURE_RAMPART },
        { x: -5, y: 0, type: STRUCTURE_RAMPART },
        { x: -4, y: 0, type: STRUCTURE_RAMPART },
        { x: 4, y: 0, type: STRUCTURE_RAMPART },
        { x: 5, y: 0, type: STRUCTURE_RAMPART },
        { x: 6, y: 0, type: STRUCTURE_RAMPART },
        { x: -6, y: 1, type: STRUCTURE_RAMPART },
        { x: -5, y: 1, type: STRUCTURE_RAMPART },
        { x: -4, y: 1, type: STRUCTURE_RAMPART },
        { x: 4, y: 1, type: STRUCTURE_RAMPART },
        { x: 5, y: 1, type: STRUCTURE_RAMPART },
        { x: 6, y: 1, type: STRUCTURE_RAMPART },
        { x: -6, y: 2, type: STRUCTURE_RAMPART },
        { x: -5, y: 2, type: STRUCTURE_RAMPART },
        { x: -4, y: 2, type: STRUCTURE_RAMPART },
        { x: -3, y: 2, type: STRUCTURE_RAMPART },
        { x: 3, y: 2, type: STRUCTURE_RAMPART },
        { x: 4, y: 2, type: STRUCTURE_RAMPART },
        { x: 5, y: 2, type: STRUCTURE_RAMPART },
        { x: 6, y: 2, type: STRUCTURE_RAMPART },
        { x: -6, y: 3, type: STRUCTURE_RAMPART },
        { x: -5, y: 3, type: STRUCTURE_RAMPART },
        { x: -4, y: 3, type: STRUCTURE_RAMPART },
        { x: -3, y: 3, type: STRUCTURE_RAMPART },
        { x: -2, y: 3, type: STRUCTURE_RAMPART },
        { x: 2, y: 3, type: STRUCTURE_RAMPART },
        { x: 3, y: 3, type: STRUCTURE_RAMPART },
        { x: 4, y: 3, type: STRUCTURE_RAMPART },
        { x: 5, y: 3, type: STRUCTURE_RAMPART },
        { x: 6, y: 3, type: STRUCTURE_RAMPART },
        { x: -6, y: 4, type: STRUCTURE_RAMPART },
        { x: -5, y: 4, type: STRUCTURE_RAMPART },
        { x: -4, y: 4, type: STRUCTURE_RAMPART },
        { x: -3, y: 4, type: STRUCTURE_RAMPART },
        { x: -2, y: 4, type: STRUCTURE_RAMPART },
        { x: -1, y: 4, type: STRUCTURE_RAMPART },
        { x: 0, y: 4, type: STRUCTURE_RAMPART },
        { x: 1, y: 4, type: STRUCTURE_RAMPART },
        { x: 2, y: 4, type: STRUCTURE_RAMPART },
        { x: 3, y: 4, type: STRUCTURE_RAMPART },
        { x: 4, y: 4, type: STRUCTURE_RAMPART },
        { x: 5, y: 4, type: STRUCTURE_RAMPART },
        { x: 6, y: 4, type: STRUCTURE_RAMPART },
        { x: -5, y: 5, type: STRUCTURE_RAMPART },
        { x: -4, y: 5, type: STRUCTURE_RAMPART },
        { x: -3, y: 5, type: STRUCTURE_RAMPART },
        { x: -2, y: 5, type: STRUCTURE_RAMPART },
        { x: -1, y: 5, type: STRUCTURE_RAMPART },
        { x: 0, y: 5, type: STRUCTURE_RAMPART },
        { x: 1, y: 5, type: STRUCTURE_RAMPART },
        { x: 2, y: 5, type: STRUCTURE_RAMPART },
        { x: 3, y: 5, type: STRUCTURE_RAMPART },
        { x: 4, y: 5, type: STRUCTURE_RAMPART },
        { x: 5, y: 5, type: STRUCTURE_RAMPART },
        { x: -4, y: 6, type: STRUCTURE_RAMPART },
        { x: -3, y: 6, type: STRUCTURE_RAMPART },
        { x: -2, y: 6, type: STRUCTURE_RAMPART },
        { x: -1, y: 6, type: STRUCTURE_RAMPART },
        { x: 0, y: 6, type: STRUCTURE_RAMPART },
        { x: 1, y: 6, type: STRUCTURE_RAMPART },
        { x: 2, y: 6, type: STRUCTURE_RAMPART },
        { x: 3, y: 6, type: STRUCTURE_RAMPART },
        { x: 4, y: 6, type: STRUCTURE_RAMPART }
    ],
    [
        { x: -2, y: -3, type: STRUCTURE_EXTENSION },
        { x: 2, y: -3, type: STRUCTURE_EXTENSION },
        { x: 2, y: -2, type: STRUCTURE_EXTENSION },
        { x: 3, y: -1, type: STRUCTURE_EXTENSION },
        { x: 4, y: -1, type: STRUCTURE_EXTENSION },
        { x: 5, y: -1, type: STRUCTURE_EXTENSION },
        { x: 3, y: 1, type: STRUCTURE_EXTENSION },
        { x: 4, y: 1, type: STRUCTURE_EXTENSION },
        { x: 5, y: 1, type: STRUCTURE_EXTENSION },
        { x: 0, y: -5, type: STRUCTURE_EXTENSION },
        { x: 3, y: 2, type: STRUCTURE_LAB },
        { x: 4, y: 2, type: STRUCTURE_LAB },
        { x: 3, y: 3, type: STRUCTURE_LAB },
        { x: 3, y: 2, type: STRUCTURE_RAMPART },
        { x: 4, y: 2, type: STRUCTURE_RAMPART },
        { x: 3, y: 3, type: STRUCTURE_RAMPART }
    ],
    [
        { x: 5, y: 3, type: STRUCTURE_LAB },
        { x: 5, y: 4, type: STRUCTURE_LAB },
        { x: 4, y: 4, type: STRUCTURE_LAB },
        { x: 5, y: 3, type: STRUCTURE_RAMPART },
        { x: 5, y: 4, type: STRUCTURE_RAMPART },
        { x: 4, y: 4, type: STRUCTURE_RAMPART },
        { x: -3, y: 1, type: STRUCTURE_EXTENSION },
        { x: -4, y: 1, type: STRUCTURE_EXTENSION },
        { x: -5, y: 1, type: STRUCTURE_EXTENSION },
        { x: -3, y: -1, type: STRUCTURE_EXTENSION },
        { x: -4, y: -1, type: STRUCTURE_EXTENSION },
        { x: -5, y: -1, type: STRUCTURE_EXTENSION },
        { x: -2, y: 2, type: STRUCTURE_EXTENSION },
        { x: -2, y: 3, type: STRUCTURE_EXTENSION },
        { x: -2, y: 4, type: STRUCTURE_EXTENSION },
        { x: -3, y: 2, type: STRUCTURE_EXTENSION },
        { x: 2, y: 2, type: STRUCTURE_SPAWN, name: "{ROOM_NAME}-{INDEX}" },
        { x: 2, y: 2, type: STRUCTURE_RAMPART },

        { x: -5, y: 2, type: STRUCTURE_EXTENSION },
        { x: -5, y: 3, type: STRUCTURE_EXTENSION },
        { x: -5, y: 4, type: STRUCTURE_EXTENSION },
        { x: -4, y: 2, type: STRUCTURE_EXTENSION },
        { x: -4, y: 4, type: STRUCTURE_EXTENSION },
        { x: -4, y: 5, type: STRUCTURE_EXTENSION },
        { x: -3, y: 3, type: STRUCTURE_EXTENSION },
        { x: -3, y: 5, type: STRUCTURE_EXTENSION }
    ],
    [
        { x: 2, y: 3, type: STRUCTURE_LAB },
        { x: 2, y: 4, type: STRUCTURE_LAB },
        { x: 3, y: 5, type: STRUCTURE_LAB },
        { x: 4, y: 5, type: STRUCTURE_LAB },
        { x: 2, y: 3, type: STRUCTURE_RAMPART },
        { x: 2, y: 4, type: STRUCTURE_RAMPART },
        { x: 3, y: 5, type: STRUCTURE_RAMPART },
        { x: 4, y: 5, type: STRUCTURE_RAMPART },
        { x: 5, y: 2, type: STRUCTURE_OBSERVER },
        { x: 5, y: 2, type: STRUCTURE_RAMPART },

        { x: 1, y: 5, type: STRUCTURE_NUKER },
        { x: 1, y: 5, type: STRUCTURE_RAMPART },

        { x: -2, y: 0.2, type: STRUCTURE_SPAWN, name: "{ROOM_NAME}-{INDEX}" },
        { x: -2, y: -2, type: STRUCTURE_RAMPART }
    ]
];
