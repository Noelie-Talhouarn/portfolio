/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jze5vtc0i8urdd5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "meyjdaz6",
    "name": "categorie",
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
    "id": "s6hzkvxw",
    "name": "projets",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "jze5vtc0i8urdd5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jze5vtc0i8urdd5")

  // remove
  collection.schema.removeField("meyjdaz6")

  // remove
  collection.schema.removeField("s6hzkvxw")

  return dao.saveCollection(collection)
})
