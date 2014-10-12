if(Meteor.isServer){
    Meteor.startup(function(){
        if(Meteor.users.find().count() === 0){
            var adminUser = {
                username : 'nxcong',
                email : 'nguyenxuancong@outlook.com',
                fullName : 'Nguyễn Xuân Công',
                address : '20/122 Kim Giang, Hoàng Mai, Hà Nội',
                password : '@Binhminh2',
                roles : ['admin','mod','user']
            }

            var id =Accounts.createUser({email : adminUser.email,username : adminUser.username,password : adminUser.password,profile : {
                fullName : adminUser.fullName,address : adminUser.address
            }});
            Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});
            Roles.addUsersToRoles(id, adminUser.roles,Roles.GLOBAL_GROUP);
            console.log(id);
        }
    })
}