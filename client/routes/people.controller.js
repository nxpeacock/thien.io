PeopleController = ApplicationController.extend({
    template: 'people.list',
    onBeforeAction: function () {
        document.title = 'THIEN.IO - Nhân vật / Tác giả / Dịch giả';
    }
});

Router.route('people', {
    controller: PeopleController,
    path: '/con-nguoi'
});