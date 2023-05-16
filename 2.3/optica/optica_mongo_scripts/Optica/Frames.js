use Optica;

db.createCollection("Frames", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Frames",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "frame": {
                    "bsonType": "object",
                    "properties": {
                        "id": {
                            "bsonType": "objectId"
                        },
                        "type": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "id",
                        "type"
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "frame"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});