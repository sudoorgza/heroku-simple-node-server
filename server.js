var server=require('node-http-server');

console.log(server);

    server.deploy(
        {
            verbose: true,
            port: 39390,
            root: '/'
        }
    );
