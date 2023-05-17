use youtube;

db.createCollection("channel", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "channel",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "description": {
                    "bsonType": "string"
                },
                "created_at": {
                    "bsonType": "date"
                }
            },
            "additionalProperties": false,
            "required": [
                "id",
                "name",
                "description",
                "created_at"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});