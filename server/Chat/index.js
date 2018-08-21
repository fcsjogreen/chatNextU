var express = require('express')
var Router = express.Router()

//router comunicacion entre servidor y cliente

Router.get('/users', function(req, res){
  //get usuario
})

Router.get('/messages', function(req, res){
  //get messages
})

Router.post('/users', function(req, res){
  //post usuario
})

Router.post('/messages', function(req, res){
  //post messages
})

//expotar router para importarlo desde index principal y usarlo en app de express

module.export = Router
