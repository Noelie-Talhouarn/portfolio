/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i23f5bkp86mnm7s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jc85vi9m",
    "name": "description_projet",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ffqr2syi",
    "name": "domaines",
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
  collection.schema.removeField("jc85vi9m")

  // remove
  collection.schema.removeField("ffqr2syi")

  return dao.saveCollection(collection)
})
