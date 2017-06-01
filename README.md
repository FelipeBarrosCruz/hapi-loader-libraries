# hapi-loader-libraries
Hapi Loader Libraries
### Use Example
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