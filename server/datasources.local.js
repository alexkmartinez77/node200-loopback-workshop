require('dotenv').config();

module.exports = {
  "MongoDB": {
      "name": "MongoDB",
      "connector": "mongodb",
      "url": process.env.MONGODB_URI
  }
}
/*module.exports = {
  "db": {
    "name": "db",
    "connector": "memory"
  },
  "MongoDB": {
    "host": "",
    "port": 0,
    "url": "",
    "database": "",
    "password": "",
    "name": "MongoDB",
    "user": "",
    "useNewUrlParser": true,
    "connector": "mongodb"
  }
}*/