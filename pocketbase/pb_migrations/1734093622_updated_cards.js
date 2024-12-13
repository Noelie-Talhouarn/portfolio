/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i23f5bkp86mnm7s")

  // remove
  collection.schema.removeField("wr3soptk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pvrscqbb",
    "name": "date",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wr3soptk",
    "name": "date_projet",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("pvrscqbb")

  return dao.saveCollection(collection)
})
