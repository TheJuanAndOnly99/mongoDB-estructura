use pizzeria;

db.createCollection("orders", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "orders",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "id": {
                    "bsonType": "objectId"
                },
                "client": {
                    "bsonType": "objectId"
                },
                "store": {
                    "bsonType": "objectId"
                },
                "delivery": {
                    "bsonType": "object",
                    "properties": {
                        "driver": {
                            "bsonType": "objectId"
                        },
                        "date/time": {
                            "bsonType": "date"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "driver"
                    ]
                },
                "products": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "product_id": {
                                "bsonType": "objectId"
                            },
                            "quantity": {
                                "bsonType": "number"
                            }
                        },
                        "additionalProperties": false,
                        "required": [
                            "product_id",
                            "quantity"
                        ]
                    }
                },
                "date/time": {
                    "bsonType": "date"
                }
            },
            "additionalProperties": false,
            "required": [
                "id",
                "client",
                "store",
                "products",
                "date/time"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});