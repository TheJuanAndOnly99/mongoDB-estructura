use youtube;

db.createCollection("tag", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "tag",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                }
            },
            "additionalProperties": false,
            "required": [
                "id"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});