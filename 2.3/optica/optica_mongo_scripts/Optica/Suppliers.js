use Optica;

db.createCollection("Suppliers", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Suppliers",
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
                "nif": {
                    "bsonType": "string"
                },
                "fax": {
                    "bsonType": "int"
                },
                "phone_number": {
                    "bsonType": "int"
                },
                "address": {
                    "bsonType": "object",
                    "properties": {
                        "number": {
                            "bsonType": "int"
                        },
                        "street": {
                            "bsonType": "string"
                        },
                        "floor": {
                            "bsonType": "int"
                        },
                        "door": {
                            "bsonType": "int"
                        },
                        "zipcode": {
                            "bsonType": "int"
                        },
                        "country": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "number",
                        "street",
                        "floor",
                        "door",
                        "zipcode",
                        "country"
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "id",
                "name",
                "nif",
                "fax",
                "phone_number",
                "address"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});