use pizzeria;

db.createCollection("clients", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "clients",
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
                "last_name": {
                    "bsonType": "string"
                },
                "phone_number": {
                    "bsonType": "int"
                },
                "address": {
                    "bsonType": "object",
                    "properties": {
                        "street": {
                            "bsonType": "string"
                        },
                        "city": {
                            "bsonType": "string"
                        },
                        "state": {
                            "bsonType": "string"
                        },
                        "zipcode": {
                            "bsonType": "int"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "street",
                        "city",
                        "zipcode"
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "id",
                "name",
                "address"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});