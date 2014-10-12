LoginController = RouteController.extend({
    layoutTemplate : 'blankLayout',
    template : 'login'
});

Router.route('login',{
    path : '/dang-nhap',
    controller : LoginController,
    onAfterAction: function () {
        document.title = 'THIEN.IO - Đăng nhập hệ thống'
    }
})