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
        before : {
            insert : function(doc,template){
                if(_.isUndefined(doc.slug) || _.isEmpty(doc.slug)){
                    _.extend(doc,{slug : toConstantCode(modifier.$set.name)});
                }
                _.each(doc.terms,function(t){
                    if(_.isUndefined(t._id) || _.isEmpty(t._id)){
                        _.extend(t,{_id : toConstantCode(t.name)});
                    }
                });
                var self = this;
                self.result(doc);
            },
            update : function(docId, modifier, template){
                if(_.isUndefined(modifier.$set.slug) || _.isEmpty(modifier.$set.slug)){
                    _.extend(modifier.$set,{slug : toConstantCode(modifier.$set.name)});
                }
                _.each(modifier.$set.terms,function(t){
                    if(_.isUndefined(t._id) || _.isEmpty(t._id)){
                        _.extend(t,{_id : toConstantCode(t.name)});
                    }
                });
                var self = this;
                self.result(modifier);
            }
        },

        onSuccess: function () {
            Notifications.success('Thông báo', 'Cập nhật thành công');
            Router.go('taxonomies');
        }
    }
})