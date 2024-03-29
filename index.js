const furu = require('furu')
const layout = require('./app/layouts/main.js')
const homePage = require('./app/pages/home.js')
const aboutPage = require('./app/pages/about.js')

const routes = {
  'get#/': homePage,
  'get#/about': aboutPage
}

async function handleRequest(req, res) {
  if (req.route) {
    const html = await req.route(req, res)
    return layout(html)
  }
}

const options = { port: 9095, assets: 'app/assets', routes }

furu(options, handleRequest)
