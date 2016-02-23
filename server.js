var server=require('node-http-server');

console.log(server);

    server.deploy(
        {
            verbose: true,
            port: (process.env.PORT || 3000),
            root: __dirname+'/'
        }
    );
