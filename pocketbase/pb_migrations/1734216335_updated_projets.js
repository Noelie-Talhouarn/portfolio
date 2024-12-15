/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jze5vtc0i8urdd5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "43xrwgxy",
    "name": "url",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jze5vtc0i8urdd5")

  // remove
  collection.schema.removeField("43xrwgxy")

  return dao.saveCollection(collection)
})
