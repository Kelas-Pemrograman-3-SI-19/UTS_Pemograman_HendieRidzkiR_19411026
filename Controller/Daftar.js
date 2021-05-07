const DaftarModel = require ('../model/Daftar')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
    new Promise((resolve, reject) => {
        DaftarModel.create(data)
            .then(() => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Input Daftar'
                })
            }).catch(() => reject({
                status: false,
                pesan: 'Gagal Input Daftar'
            }))
    
    })

    exports.getAll = () =>
    new Promise((resolve, reject) => {
        DaftarModel.find()
            .then(result => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Menampilkan Data',
                    result: result
                })
            }).catch(() => reject({
                status: true,
                pesan: 'Gagal Mendapatkan Data',
                result: []
            }))
    })

exports.getById = (id) =>
    new Promise((resolve, reject) => {
        DaftarModel.findOne({
            _id: objectId(id),
        }).then(result => resolve({
            status: true,
            pesan: 'Berhasil Mendapatkan Data',
            result: result
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Mendapatkan Data',
            result: null
        }))
    })