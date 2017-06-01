const Should = require('chai').should()
const Hapi = require('hapi')
const Mock = require('./mock')
const Plugin = require('../index')

describe ('Test setup application', () => {
  beforeEach(() => {
    this.server = new Hapi.Server()
  })

  it ('Should load plugin', (done) => {
    this.server.register({
      register: Plugin,
      options: Mock.plugin
    }, (err) => {
      (!err).should.equal(true)
      done(err)
    })
  })
})
