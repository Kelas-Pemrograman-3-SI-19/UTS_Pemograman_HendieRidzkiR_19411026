const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const DaftarSchema = new Schema({

    nama: {
        type : String
    },

    tujuanwisata: {
        type : String
    },

    email:{
        type : String
    },

    notelpon: {
        type : String
    }
})

module.exports = mongoose.model('Daftar', DaftarSchema)