/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i23f5bkp86mnm7s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jyb3cfxa",
    "name": "date_projet",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5bbehpuz",
    "name": "nom_projet",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i23f5bkp86mnm7s")

  // remove
  collection.schema.removeField("jyb3cfxa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5bbehpuz",
    "name": "nom",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
