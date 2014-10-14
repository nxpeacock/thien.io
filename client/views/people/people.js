Template.people_insert.rendered = function(){
    $(document).ready(function(){
        $(":file").filestyle({buttonText: "Chọn File..."});
    })
};

AutoForm.hooks({
    personForm: {
        before: {
            insert: function(doc, t) {
                var self = this;
                var files = t.find('.filestyle').files;
                for (var i = 0, ln = files.length; i < ln; i++) {
                    PeopleAvatars.insert(files[i], function (err, fileObj) {
                        if(!err){
                            _.extend(doc,{'avatar' : fileObj._id});
                            self.result(doc);
                        }
                    });
                }
            }
        },
        onSuccess : function(){
            Notifications.success('Thông báo','Cập nhật thành công!');
            Router.go('people');
        }
    }
});