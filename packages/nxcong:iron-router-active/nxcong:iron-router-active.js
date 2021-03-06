// Write your package code here!
var routeUtils = {
    context: function() {
        return Router.current();
    },

    regex: function(expression) {
        return new RegExp(expression, 'i');
    },

    testRoutes: function(routeNames) {
        var reg = this.regex(routeNames);
        return this.context() && reg.test(this.context().route.name);
    },

    testPaths: function(paths) {
        var reg = this.regex(paths);
        return this.context() && reg.test(this.context().path);
    }
};

Template.registerHelper('isActiveRoute', function(routes, className) {
    if (className.hash)
        className = 'active';

    return routeUtils.testRoutes(routes) ? className : '';
});

Template.registerHelper('isActivePath', function(paths, className) {
    if (className.hash)
        className = 'active';

    return routeUtils.testPaths(paths) ? className : '';
});

Template.registerHelper('isNotActiveRoute', function(routes, className) {
    if (className.hash)
        className = 'disabled';

    return ! routeUtils.testRoutes(routes) ? className : '';
});

Template.registerHelper('isNotActivePath', function(paths, className) {
    if (className.hash)
        className = 'disabled';

    return ! routeUtils.testPaths(paths) ? className : '';
});
