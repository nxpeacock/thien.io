Package.describe({
  name: 'nxcong:bootstrap3-dialog',
  summary: 'Make use of Bootstrap Modal more monkey-friendly.',
  version: '0.0.0',
  git: 'https://github.com/nakupanda/bootstrap3-dialog'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.4');
  api.addFiles('lib/bootstrap-dialog.min.js','client');
  api.addFiles('lib/bootstrap-dialog.min.css','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nxcong:bootstrap3-dialog');
  api.addFiles('nxcong:bootstrap3-dialog-tests.js');
});
