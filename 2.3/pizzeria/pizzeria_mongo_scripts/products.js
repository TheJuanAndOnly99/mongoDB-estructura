use pizzeria;

db.createCollection("products", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "products",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "id": {
                    "bsonType": "objectId"
                },
                "type": {
                    "bsonType": "string"
                },
                "price": {
                    "bsonType": "decimal"
                },
                "description": {
                    "bsonType": "string"
                },
                "pizza_category": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "image": {
                    "bsonType": "object",
                    "additionalProperties": false
                }
            },
            "additionalProperties": false,
            "required": [
                "id",
                "type",
                "price",
                "image"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});