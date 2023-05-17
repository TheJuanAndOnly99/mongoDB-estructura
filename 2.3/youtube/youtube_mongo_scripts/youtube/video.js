use youtube;

db.createCollection("video", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "video",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "id": {
                    "bsonType": "objectId"
                },
                "created_by": {
                    "bsonType": "objectId"
                },
                "title": {
                    "bsonType": "string"
                },
                "description": {
                    "bsonType": "string"
                },
                "state": {
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
                "file_size": {
                    "bsonType": "decimal"
                },
                "file_name": {
                    "bsonType": "string"
                },
                "video_duration": {
                    "bsonType": "decimal"
                },
                "thumbnail": {
                    "bsonType": "object",
                    "additionalProperties": false
                },
                "views": {
                    "bsonType": "long"
                },
                "created_at": {
                    "bsonType": "date"
                },
                "comments": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                },
                "tags": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                },
                "reactions": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                }
            },
            "additionalProperties": false,
            "required": [
                "id",
                "created_by",
                "title",
                "description",
                "state",
                "file_size",
                "file_name",
                "video_duration",
                "thumbnail",
                "views",
                "created_at",
                "comments",
                "tags",
                "reactions"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});