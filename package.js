Package.describe({
  name: 'navybits:bootstrap-iconpicker',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Very simple wrapper on bootstrap-iconpicker witch supports fontawsome icons picker',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Navybits/bootstrap-iconpicker',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['jquery', 'twbs:bootstrap@3.3.6'], 'client');
  api.addFiles('iconset-fontawesome-4.2.0.min.js', 'client');
  api.addFiles('bootstrap-iconpicker.min.js', 'client');
  api.addFiles('bootstrap-iconpicker.min.css', 'client');
});

Package.onTest(function(api) {
  api.use(['jquery', 'twbs:bootstrap'], 'client');
  api.addFiles('iconset-fontawesome-4.2.0.min.js', 'client');
  api.addFiles('bootstrap-iconpicker.min.js', 'client');
  api.addFiles('bootstrap-iconpicker.min.css', 'client');
});
