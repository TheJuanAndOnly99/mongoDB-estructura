use pizzeria;

db.createCollection("stores", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "stores",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "id": {
                    "bsonType": "objectId"
                },
                "employees": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "employee_id": {
                                "bsonType": "objectId"
                            },
                            "name": {
                                "bsonType": "string"
                            },
                            "last_name": {
                                "bsonType": "string"
                            },
                            "nif": {
                                "bsonType": "string"
                            },
                            "phone_number": {
                                "bsonType": "int"
                            },
                            "role": {
                                "bsonType": "string"
                            }
                        },
                        "additionalProperties": false,
                        "required": [
                            "employee_id",
                            "name",
                            "last_name",
                            "phone_number",
                            "role"
                        ]
                    }
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
                        "state",
                        "zipcode"
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "id",
                "address"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});