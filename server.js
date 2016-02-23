var server=require('node-http-server');

console.log(server);

    server.deploy(
        {
            verbose: true,
            port: process.env.PORT,
            root: __dirname+'/'
        }
    );
