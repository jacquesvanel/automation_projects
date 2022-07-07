config = { _id: "sh3_{{ env }}",
        members:[
         { _id : 0, host : "{{ shard3a }}.opr.afsiep.net:57017", priority: 100 },
         { _id : 1, host : "{{ shard3b }}.opr.afsiep.net:57018" },
         { _id : 2, host : "{{ shard3c }}.opr.afsiep.net:57019" }
        ]
};
var output = rs.initiate(config);
printjson(output)
