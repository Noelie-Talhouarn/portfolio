/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i23f5bkp86mnm7s")

  collection.name = "cards"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i23f5bkp86mnm7s")

  collection.name = "projets"

  return dao.saveCollection(collection)
})
