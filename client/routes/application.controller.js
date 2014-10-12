ApplicationController = RouteController.extend({
    layoutTemplate: 'defaultLayout',
    onBeforeAction: function () {
        // do some login checks or other custom logic
        //this.next();
        if(!Meteor.userId()){
            Router.go('login');
        }
    }
})