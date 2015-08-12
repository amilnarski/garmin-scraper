var casper = require('casper').create({
        verbose: true,
        logLevel: 'debug',
        pageSettings: {
            loadImages: true, // The WebPage instance used by Casper will
            loadPlugins: true, // use these settings
            userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'

        }
    })
    ;

casper.cli.drop("cli");
casper.cli.drop("casper-path");

if (casper.cli.args.length === 0 && Object.keys(casper.cli.options).length === 0) {
    casper.echo("Please call with --username and --password!").exit();
}

var username = casper.cli.get('username');
var password = casper.cli.get('password');


casper.options.waitTimeout = 3000;

casper.start("https://connect.garmin.com/en-US/signin", function () {
    casper.capture('after_start.png');
    this.waitUntilVisible('#gauth-widget-frame', function () {
        casper.capture('iframe.png');
        this.withFrame(0, function () {
            this.waitUntilVisible('#login-component', function () {
                casper.capture('login-component.png');
                this.fillSelectors("form#login-form", {
                    'input[name="username"]' : username,
                    'input[name="password"]' : password
                }, true);
                this.wait(2000, function(){
                    this.echo('Waited for 2 seconds...');
                });
                casper.capture('success.png');
            });
        });
    }, function timeout() {
        this.capture('failed-iframe.png');
    });
});

// print out all the messages in the headless browser context
casper.on('remote.message', function (msg) {
    this.echo('remote message caught: ' + msg);
});

// print out all the messages in the headless browser context
casper.on("page.error", function (msg, trace) {
    this.echo("Page Error: " + msg, "ERROR");
});

casper.run();