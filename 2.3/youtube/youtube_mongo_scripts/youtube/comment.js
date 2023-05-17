use youtube;

db.createCollection("comment", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "comment",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "id": {
                    "bsonType": "objectId"
                },
                "video_id": {
                    "bsonType": "objectId"
                },
                "user_id": {
                    "bsonType": "objectId"
                },
                "reactions": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                },
                "created_at": {
                    "bsonType": "date"
                },
                "deleted_at": {
                    "bsonType": "date"
                }
            },
            "additionalProperties": false,
            "required": [
                "id",
                "video_id",
                "user_id",
                "reactions",
                "created_at"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});