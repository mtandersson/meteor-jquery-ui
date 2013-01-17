Package.describe({
    summary: "jQuery-UI - jQuery user interface"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files([
        'lib/jquery-ui.js'
    ], 'client');
});
