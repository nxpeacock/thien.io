Package.describe({
    summary: " Quick UI helper to determine if the current route is active, for nav links. ",
    version: "0.0.0",
    git: " \* Fill me in! *\ "
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.3.1');
    api.use(['templating']);
    api.addFiles('nxcong:iron-router-active.js', 'client');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('nxcong:iron-router-active');
    api.addFiles('nxcong:iron-router-active-tests.js');
});
