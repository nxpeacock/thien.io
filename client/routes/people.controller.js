PeopleController = ApplicationController.extend({
    template: 'people.list',
    onBeforeAction: function () {
        document.title = 'THIEN.IO - Nhân vật / Tác giả / Dịch giả';
    },
    onWait : function(){
        Meteor.subscribe('people');
    }
});

Router.route('people', {
    controller: PeopleController,
    path: '/con-nguoi'
});

PeopleInsertController = ApplicationController.extend({
    template : 'people_insert',
    onBeforeAction : function(){
        document.title = 'THIEN.IO - Thêm mới con người';
    }
})

Router.route('people_insert',{
    path : '/con-nguoi/them',
    controller : PeopleInsertController
});