// Creating a Local Database
/*
   1. creating a database
      use natours-test
   2. create a document
      db.tours.insertOne({ name: "The Forest Hiker", price: 297, rating: 4.7 })
   3. Check the database
      db.tours.find()
   4. To show all the existing database
      show dbs
   5. To show collection inside a database
      show collections
   6. To quit the mongoshell
      quit()
*/

// CRUD: Creating a Document
/*
   1. Create multiple documents
      db.tours.insertMany([{ name: "The Sea Explorer", price: 497, rating: 4.8 }, { name: "The Snow Adventurer", price: 997: rating: 4.9, difficulty: "easy" }])
   2. Search documents
      db.tours.find()
*/

// CRUD: Querying Documents
/*
   1. To search a specific document
      db.tours.find({ name: "The Forest Hiker"})
   2. To search all tours with difficulty: easy
      db.tours.find({ difficulty: "easy" })
   3. To search all tours with price: <= 500
      db.tours.find({ price: {$lte: 500} })
   4. To search all tours with price: < 500 AND rating: >= 4.8
      db.tours.find({ price: {$lt: 500}, rating {$gte: 4.8} })
   5. To search all tours with price: < 500 OR rating: >= 4.8
      db.tours.find({ $or: [ {price: {$lt: 500}}, {rating: {$gte: 4.8}} } ] })
   6. To search all tours with price: > 500 OR rating: >= 4.8
      db.tours.find({ $or: [ {price: {$gt: 500}}, {rating: {$gte: 4.8}} } ] })
   7. To display a specific property, in this case name.
   db.tours.find({ $or: [ {price: {$gt: 500}}, {rating: {$gte: 4.8}} } ] }, { name: 1})
*/

// CRUD: Updating Documents
/*
   1. To update a document
      db.tours.updateOne({ name: "The Snow Adventurer"}, { $set: {price: 597} })
   2. To update and classify premium tours
      db.tours.updateMany({ price: {$gte: 500}, rating {$gte: 4.8} }, { $set: { premium: true }})
   3. To replace the contents of a document
      db.tours.replaceOne()
*/

// CRUD: Deleting Documents
/*
   1. To delete multiple specific documents
      db.tours.deleteMany({ rating: {$lt: 4.8} })
   2. To delete all documents in the collection
      db.tours.deleteMany({})
*/
