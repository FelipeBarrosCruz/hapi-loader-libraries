# hapi-loader-libraries
Hapi Loader Libraries

### Plugin interface
    (Function) Library.get(name): Returns some library
    (Function) Library.exists(name): Check if exists library
    (Function) Library.set(name, content): Set library on repository


### Configuration Example
```js
const Hapi = require('hapi')
const Server = new Hapi.server()
const HapiLoaderLibraries = require('hapi-loader-libraries')

Server.register({
    register: HapiLoaderLibraries,
    options: {
        cwd: '/src/myApp',
        pattern: 'lib/**/index.js'
    }
}, (err) => {
    if (err) throw err
    Server.start((err) => {
        if (err) throw err
    })
})
```


### Use example

```js
function RouteHandler (request, reply) {
  reply(request.library.get('libraryName').someMethod())
}
```