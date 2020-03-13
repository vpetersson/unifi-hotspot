const express = require('express')
const indexRouter = express.Router()

module.exports = function () {
  indexRouter.route('/')
    .get(function (req, res) {
      req.session.macAddr = req.query.id
      req.session.accessPoint = req.query.ap
      req.session.time = req.query.t
      req.session.url = req.query.url
      req.session.ssid = req.query.ssid

      switch (process.env.AUTH) {
        case 'none':
          res.sendFile(`${process.env.PWD}/public/noAuth.html`)
          break
        case 'basic':
          res.sendFile(`${process.env.PWD}/public/basic.html`)
          break
        case 'custom':
          res.sendFile(`${process.env.PWD}/public/custom.html`)
          break
        default:
          // res.sendFile(`${process.env.PWD}/public/noAuth.html`)
      }
    })
  return indexRouter
}
