const Package = require('./package.json')
const Path = require('path')
const Glob = require('glob')
const Repository = require('./repository')

const ExtractLibraryName = (library) => {
  const match = library.match(/\/(.[^\/]+)\/.[^\/]+$/)
  return (match.length) ? match[1] : false
}

function register (server, options, next) {
  const defaultOptions = {
    nodir: true,
    strict: true,
    cwd: process.cwd(),
    pattern: 'app/lib/**/*.js'
  }
  options = Object.assign(defaultOptions, options)

  try {
    Glob(options.pattern, options, (err, libraries) => {
      libraries.forEach((library) => {
        Repository.set(ExtractLibraryName(library), require(Path.join(options.cwd, library)))
      })
      server.decorate('request', 'library', Repository);
      next(null)
    })
  } catch(err) {
    return next(err)
  }
}

const Plugin = { register }
Plugin.register.attributes = { name: Package.name, version: Package.version }
module.exports = Plugin