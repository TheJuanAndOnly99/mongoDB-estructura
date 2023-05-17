use youtube;

db.createCollection("reactions", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "reactions",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "id": {
                    "bsonType": "objectId"
                },
                "reaction": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": [
                        {
                            "bsonType": "string"
                        },
                        {
                            "bsonType": "string"
                        },
                        {
                            "bsonType": "string"
                        }
                    ]
                },
                "reacted_at": {
                    "bsonType": "date"
                }
            },
            "additionalProperties": false,
            "required": [
                "id",
                "reaction"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});