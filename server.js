const express = require('express')
const app = express()
const fs = require("fs");

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())

app.get("/", function(req, res) {
    fs.readFile('content.json', function (error, data) {
		if (error) {
			res.status(500).end()
		} else {
			res.render('main.ejs', {
                items: JSON.parse(data)
			})
        }
    })
})

app.get("/aboutnode", function(req, res) {
    fs.readFile('content.json', function (error, data) {
		if (error) {
			res.status(500).end()
		} else {
			res.render('aboutnode.ejs', {
                items: JSON.parse(data)
			})
        }
    })
})

app.listen(80, '192.168.1.116')
