use Optica;

db.createCollection("Clients", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Clients",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "id": {
                    "bsonType": "objectId"
                },
                "referred_by": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "phone_number": {
                    "bsonType": "string"
                },
                "email": {
                    "bsonType": "string"
                },
                "date_registered": {
                    "bsonType": "date"
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
                "phone_number",
                "email",
                "date_registered",
                "address"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});