const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const mysql = require("mysql")
const connect = express()
connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({ extended: true }))

let databaseconnection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "N@ndhu0514",
    database: "oneyes"

})

databaseconnection.connect(function (error) {
    if (error) {
        console.log(error)
    }
    else {
        console.log("database connected")
    }
})

// insert data in imagedetails table from addimage
connect.post('/addimage', (request,response) => {
    let { image, brick, cement, rod, sand, babystone, msand, psand, price } = request.body
    let sql = 'insert into imagedetails(image,brick,cement,rod,sand,babystone,msand,psand,price) values(?,?,?,?,?,?,?,?,?)'
    databaseconnection.query(sql, [image, brick, cement, rod, sand, babystone, msand, psand, price], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send({ "status": "success" })
        }
    })
})

// single data fetch for dashboard
connect.get('/singleimage/:id', (request, response) => {
    let { id } = request.params
    let sql = 'select * from imagedetails where id=?'
    databaseconnection.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
        }

    })
})

//image display
connect.get('/imagedisplay', (request, response) => {
    let sql = 'select * from imagedetails'
    databaseconnection.query(sql, (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)

        }

    })
})


//update user 
connect.put('/updateimage/:id', (request, response) => {
    let { id } = request.params
    let { image, brick, cement, rod, sand, babystone, msand, psand, price } = request.body
    let sql = 'update imagedetails set image=?,brick=?,cement=?,rod=?,sand=?,babystone=?,msand=?,psand=?,price=? where id=?'
    databaseconnection.query(sql, [image, brick, cement, rod, sand, babystone, msand, psand, price, id], (error, result) => {
        if (error) {
            response.send({ "status": "not_updated" })
            console.log(error)
        }
        else {
            response.send({ "status": "success", "id": id })
            console.log("ok")
        }
    })
})


//delete user
connect.post('/delete', (request, response) => {
    let id = request.body.id
    let sql = 'delete from imagedetails where id=?'
    databaseconnection.query(sql, [id], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
            console.log("okay")
        }
    })
})



// database connection
connect.listen(2205, () => {
    console.log("your server is running in port 2205")
})