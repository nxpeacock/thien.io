TaxonomyController = ApplicationController.extend({
    onBeforeAction: function () {
        document.title = 'THIEN.IO - Taxonomies';
    },
    waitOn: function () {
        return Meteor.subscribe('taxonomies')
    },
    template: 'taxonomies_list'
});

TaxonomyInsertController = ApplicationController.extend({
    onBeforeAction: function () {
        document.title = 'THIEN.IO - Thêm mới Taxonomy';
    },
    template: 'taxonomies_insert'
});


TaxonomyUpdateController = ApplicationController.extend({
    onBeforeAction: function () {
        document.title = 'THIEN.IO - Sửa Taxonomy';
    },
    waitOn : function(){
        return Meteor.subscribe('taxonomy',this.params._id);
    },
    template: 'taxonomies_update'
});


Router.route('taxonomies', {
    controller: TaxonomyController,
    path: '/taxonomies'
});

Router.route('taxonomies_insert', {
    controller: TaxonomyInsertController,
    path: '/taxonomies/insert'
});

Router.route('taxonomies_update', {
    controller: TaxonomyUpdateController,
    path: '/taxonomies/update/:_id'
})

AutoForm.hooks({
    taxonomiesForm: {
        onSuccess: function () {
            Notifications.success('Thông báo', 'Cập nhật thành công');
            Router.go('taxonomies');
        }
    }
})