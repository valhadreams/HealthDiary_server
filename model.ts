export function getTotalEventList() : any[]{
    return tempEventList;
}

const tempEventList : any[] = [
    { date : new Date(2017, 11, 2),
        events : [
            { event : "Boxing", min : '30' },
            { event : "Swimming", min : '50' }
        ]
    },
    { date : new Date(2017, 11, 4),
        events : [
            { event : "Tennis", min : '50' },
            { event : "Running", min : '50' }
        ]
    },
    { date : new Date(2017, 11, 6),
        events : [
            { event : "Running", min : '50' },
            { event : "Swimming", min : '50' }
        ]
    },
    { date : new Date(2017, 11, 7),
        events : [
            { event : "Boxing", min : '30' },
            { event : "Running", min : '20' }
        ]
    },
    { date : new Date(2017, 11, 9),
        events : [
            { event : "Boxing", min : '30' },
            { event : "Running", min : '40' }
        ]
    },
    { date : new Date(2017, 11, 12),
        events : [
            { event : "Tennis", min : '40' },
            { event : "Swimming", min : '50' }
        ]
    },
    { date : new Date(2017, 11, 15),
        events : [
            { event : "Boxing", min : '30' },
            { event : "Running", min : '45' }
        ]
    },
    { date : new Date(2017, 11, 19),
        events : [
            { event : "Tennis", min : '35' },
            { event : "Swimming", min : '25' }
        ]
    },
    { date : new Date(2017, 11, 21),
        events : [
            { event : "Boxing", min : '25' },
            { event : "Running", min : '50' }
        ]
    },
    { date : new Date(2017, 11, 24),
        events : [
            { event : "Tennis", min : '55' },
            { event : "Running", min : '25' }
        ]
    },
    { date : new Date(2017, 11, 30),
        events : [
            { event : "Boxing", min : '50' },
            { event : "Swimming", min : '35' }
        ]
    },
    { date : new Date(2018, 0, 12),
        events : [
            { event : "Boxing", min : '50' },
            { event : "Swimming", min : '35' }
        ]
    }
];
