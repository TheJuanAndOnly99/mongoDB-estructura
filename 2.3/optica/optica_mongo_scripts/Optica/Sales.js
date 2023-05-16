use Optica;

db.createCollection("Sales", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Sales",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "glasses": {
                    "bsonType": "objectId"
                },
                "sales_person": {
                    "bsonType": "objectId"
                },
                "client": {
                    "bsonType": "objectId"
                },
                "date_sold": {
                    "bsonType": "date"
                }
            },
            "additionalProperties": false,
            "required": [
                "glasses",
                "sales_person",
                "date_sold"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});