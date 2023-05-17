use youtube;

db.createCollection("playlist", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "playlist",
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
                "videos": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                },
                "created_at": {
                    "bsonType": "date"
                },
                "is_public": {
                    "bsonType": "bool"
                }
            },
            "additionalProperties": false,
            "required": [
                "id",
                "name",
                "created_at",
                "is_public"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});