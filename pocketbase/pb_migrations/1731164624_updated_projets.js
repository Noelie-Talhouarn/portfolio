/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jze5vtc0i8urdd5")

  // remove
  collection.schema.removeField("wn2sgkrx")

  // remove
  collection.schema.removeField("utpcc9gp")

  // remove
  collection.schema.removeField("aq2bwpow")

  // remove
  collection.schema.removeField("k54ntuhv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sikbwfra",
    "name": "outil1",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "beeo75in",
    "name": "outil2",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rccpfpk6",
    "name": "outil3",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jze5vtc0i8urdd5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wn2sgkrx",
    "name": "outils",
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
    "id": "utpcc9gp",
    "name": "outil1",
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
    "id": "aq2bwpow",
    "name": "outil2",
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
    "id": "k54ntuhv",
    "name": "outil3",
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

  // remove
  collection.schema.removeField("sikbwfra")

  // remove
  collection.schema.removeField("beeo75in")

  // remove
  collection.schema.removeField("rccpfpk6")

  return dao.saveCollection(collection)
})
