var casper = require('casper').create({
    verbose: true,
    logLevel: 'info',
    pageSettings: {
        loadImages:  true,         // The WebPage instance used by Casper will
        loadPlugins: true,         // use these settings
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
    }});

casper.start("https://connect.garmin.com/en-US/signin", function() {
    this.withFrame(0, function(){
        require('utils').dump(this.getElementInfo('form#login-form'));
        this.fillLabels("form#login-form", {
            'Email or Username': "aaron_miller",
            'Password': "foo"
        }, true);
    });
});

/*
casper.start("https://sso.garmin.com/sso/login?service=https://connect.garmin.com/post-auth/login&webhost=olaxpw-connect19.garmin.com&source=https://connect.garmin.com/en-US/signin&redirectAfterAccountLoginUrl=https://connect.garmin.com/post-auth/login&redirectAfterAccountCreationUrl=https://connect.garmin.com/post-auth/login&gauthHost=https://sso.garmin.com/sso&locale=en_US&id=gauth-widget&cssUrl=https://static.garmincdn.com/com.garmin.connect/ui/css/gauth-custom-v1.1-min.css&clientId=GarminConnect&rememberMeShown=true&rememberMeChecked=false&createAccountShown=true&openCreateAccount=false&usernameShown=false&displayNameShown=false&consumeServiceTicket=false&initialFocus=true&embedWidget=false&generateExtraServiceTicket=false#",
function(){
    this.fillLabels("form#login-form", {
        'Email or Username': "aaron_miller",
        'Password': "foo"
    }, true);
});
*/

//casper.wait(5000, function(){
//    this.echo("waited.")
//});
//
//var loginForm = "form";
//
//casper.fillSelectors(loginForm, {
//    username: 'aaron_miller',
//    pass:  'foo'
//}, true);
//
//casper.echo(this.getTitle());
//casper.echo("done");

/*casper.thenOpen('https://connect.garmin.com/modern/activities', function() {
    this.echo(this.getTitle());
});*/

// print out all the messages in the headless browser context
casper.on('remote.message', function(msg) {
    this.echo('remote message caught: ' + msg);
});

// print out all the messages in the headless browser context
casper.on("page.error", function(msg, trace) {
    this.echo("Page Error: " + msg, "ERROR");
});

casper.run();


/*
<form id="login-form" action="/sso/login?service=https%3A%2F%2Fconnect.garmin.com%2Fpost-auth%2Flogin&amp;webhost=olaxpw-connect25.garmin.com&amp;source=https%3A%2F%2Fconnect.garmin.com%2Fen-US%2Fsignin&amp;redirectAfterAccountLoginUrl=https%3A%2F%2Fconnect.garmin.com%2Fpost-auth%2Flogin&amp;redirectAfterAccountCreationUrl=https%3A%2F%2Fconnect.garmin.com%2Fpost-auth%2Flogin&amp;gauthHost=https%3A%2F%2Fsso.garmin.com%2Fsso&amp;locale=en_US&amp;id=gauth-widget&amp;cssUrl=https%3A%2F%2Fstatic.garmincdn.com%2Fcom.garmin.connect%2Fui%2Fcss%2Fgauth-custom-v1.1-min.css&amp;clientId=GarminConnect&amp;rememberMeShown=true&amp;rememberMeChecked=false&amp;createAccountShown=true&amp;openCreateAccount=false&amp;usernameShown=false&amp;displayNameShown=false&amp;consumeServiceTicket=false&amp;initialFocus=true&amp;embedWidget=false&amp;generateExtraServiceTicket=false" method="post">
<div class="form-alert">




<div id="login-form-username-errors" style="display:none;"></div>
<div id="login-form-password-errors" style="display:none;"></div>
</div>
<div class="textfield">
<label for="username">Email or Username</label>


<input id="username" name="username" class="login_email" tabindex="1" type="text" value="" autocomplete="false">

</div>

<div class="textfield">
<label for="password">Password</label><a id="loginforgotpassword" class="login-forgot-password" href="#">(Forgot?)</a>
<input id="password" name="password" tabindex="2" type="password" value="" autocomplete="false">
</div>

<input type="hidden" name="embed" value="true">
<input type="hidden" name="lt" value="e3s1">
<input type="hidden" name="_eventId" value="submit">
<input id="displayNameRequired" name="displayNameRequired" value="false" type="hidden">

<button type="submit" id="login-btn-signin" class="btn1" tabindex="4" accesskey="l">Sign In</button>

<label id="login-remember" for="login-remember-checkbox">
<input type="checkbox" name="rememberme" id="login-remember-checkbox" onclick="if (this.checked) { createAccountConfigURL += '&amp;rememberme=on'; socialConfigURL += '&amp;rememberme=on'; } else { createAccountConfigURL = createAccountConfigURL.replace('&amp;rememberme=on', ''); socialConfigURL = socialConfigURL.replace('&amp;rememberme=on', ''); }">
Remember Me
</label>


</form>*/
