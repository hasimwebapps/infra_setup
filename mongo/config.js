var config = {
    "_id": "mongo-rs",
    "version": 1,
    "members": [
        {
            "_id": 0,
            "host": "m1:27017",
            "priority": 3
        },
        {
            "_id": 1,
            "host": "m2:27017",
            "priority": 2
        },
        {
            "_id": 2,
            "host": "m3:27017",
            "priority": 2
        }
    ]
};
rs.initiate(config, { force: true });
rs.status();


var cfg = rs.conf();
cfg.members[0].priority = 10;
cfg.members[1].priority = 3;
cfg.members[2].priority = 5;
rs.reconfig(cfg);
