use pizzeria;

db.createCollection("pizza_categories", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "pizza_categories",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "categories": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "id": {
                                "bsonType": "objectId"
                            },
                            "name": {
                                "bsonType": "string"
                            }
                        },
                        "additionalProperties": false,
                        "required": [
                            "id",
                            "name"
                        ]
                    }
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});