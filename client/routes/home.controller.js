HomeController = ApplicationController.extend({
    template : 'home',
    onAfterAction : function(){
        document.title = 'THIEN.IO - Bảng tin chung';
    }
});

Router.route('home',{
    path : '/',
    controller : HomeController
})