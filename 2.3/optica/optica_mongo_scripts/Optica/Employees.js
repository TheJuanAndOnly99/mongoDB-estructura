use Optica;

db.createCollection("Employees", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Employees",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
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
    },
    "validationLevel": "off",
    "validationAction": "warn"
});