HomeController = ApplicationController.extend({
    template : 'home'
});

Router.route('home',{
    path : '/',
    controller : HomeController
})