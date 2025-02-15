const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Veritabanına Başarılı Bir Şekilde Bağlandı.")
    })
    .catch((err) => {
        console.log("Veritabanına Bağlanılamadı : " + err)
    })