module.exports = {
  "db": {
      "port": 27017,
      "name": "mongoDB",
      "connector": "mongodb",
      "url": `mongodb+srv://alexkmartinez77:${process.env.MONGODB_URI}@sdcsblogapi.j9ckx.mongodb.net/loopbackWorkshop?retryWrites=true`
  }
}