Template.login.events({
    'click #btnLogin': function (e, t) {
        e.preventDefault();
        var email = t.find('#txtEmail').value, password = t.find('#txtPassword').value;
        Meteor.loginWithPassword(email,password,function(err){
            if(err){
                if(err.message === "User not found [403]") Notifications.warn('Cảnh báo','Tên đăng nhập không chính xác!');
                if(err.message === "Incorrect password [403]") Notifications.warn('Cảnh báo','Mật khẩu không chính xác!');
            }else{
                Notifications.success('Thông báo','Đăng nhập thành công!');
                Router.go('home');
            }
        });
        return false;
    }
})