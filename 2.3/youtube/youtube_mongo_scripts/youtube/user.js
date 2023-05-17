use youtube;

db.createCollection("user", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "user",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "id": {
                    "bsonType": "objectId"
                },
                "email": {
                    "bsonType": "string"
                },
                "password": {
                    "bsonType": "string"
                },
                "username": {
                    "bsonType": "string"
                },
                "date_of_birth": {
                    "bsonType": "date"
                },
                "gender": {
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
                "zipcode": {
                    "bsonType": "int"
                },
                "country": {
                    "bsonType": "string"
                },
                "create_at": {
                    "bsonType": "date"
                },
                "channels": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                },
                "playlists": {
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
                "email",
                "password",
                "username",
                "date_of_birth",
                "gender",
                "zipcode",
                "country",
                "create_at",
                "channels",
                "playlists"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});