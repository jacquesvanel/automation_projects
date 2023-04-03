mms.ignoreInitialUiSetup=true
mms.centralUrl=http://{{ ops_server_1 }}.opr.afsiep.net:8080
mms.https.ClientCertificateMode=none
mms.adminEmailAddr=firstname.lastname@mongodb.local
mms.fromEmailAddr=firstname.lastname@mongodb.local
mms.replyToEmailAddr=firstname.lastname@mongodb.local
mms.mail.hostname=localhost
mms.mail.port=25
mms.mail.ssl=false
mms.mail.transport=smtp
mms.publicApi.whitelistEnabled=true
mongo.mongoUri=mongodb://{{ mongo_username }}:{{ mongo_password }}@{{ ops_server_1 }}.opr.afsiep.net:37019{% if ops_server_2 is defined and ops_server_2|length %},{{ ops_server_2 }}.opr.afsiep.net:37019{% elif ops_server_3 is defined and ops_server_3|length %},{{ ops_server_3 }}.opr.afsiep.net:37019{% endif %}/?maxPoolSize=150{% if ops_server_2|length or ops_server_3|length %}&replicaSet=appdbRS{% endif %}
mongo.encryptedCredentials=true
automation.versions.source=local
mongo.ssl=true
mongodb.ssl.CAFile=/var/lib/mongodb/cert/CA_Root_Inter.pem
mongodb.ssl.PEMKeyFile=/var/lib/mongodb/cert/KeyWCert.pem
mongodb.ssl.PEMKeyFilePassword=22w#SBR5nfvZOt23
mms.user.bypassInviteForExistingUsers=true

