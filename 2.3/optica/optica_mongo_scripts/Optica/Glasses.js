use Optica;

db.createCollection("Glasses", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Glasses",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "id": {
                    "bsonType": "objectId"
                },
                "supplier": {
                    "bsonType": "objectId"
                },
                "type": {
                    "bsonType": "objectId"
                },
                "price": {
                    "bsonType": "decimal"
                },
                "brand": {
                    "bsonType": "string"
                },
                "lenses": {
                    "bsonType": "object",
                    "properties": {
                        "right": {
                            "bsonType": "object",
                            "properties": {
                                "perscription": {
                                    "bsonType": "decimal"
                                },
                                "color": {
                                    "bsonType": "string"
                                }
                            },
                            "additionalProperties": false,
                            "required": [
                                "perscription",
                                "color"
                            ]
                        },
                        "left": {
                            "bsonType": "object",
                            "properties": {
                                "perscription": {
                                    "bsonType": "decimal"
                                },
                                "color": {
                                    "bsonType": "string"
                                }
                            },
                            "additionalProperties": false,
                            "required": [
                                "perscription",
                                "color"
                            ]
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "right"
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "id",
                "supplier",
                "type",
                "price",
                "brand",
                "lenses"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});