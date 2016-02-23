var server=require('node-http-server');

console.log(server);

    server.deploy(
        {
            verbose: true,
            port:7000,
            root: __dirname+'/'
        }
    );
