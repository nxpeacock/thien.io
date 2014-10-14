Template.people_insert.rendered = function(){
    $(document).ready(function(){
        $(":file").filestyle({buttonText: "Chọn File..."});
    })
};

/*Template.people_insert.events({
    'change .filestyle' : function(e,t){
        console.log(e);
    }
});*/

AutoForm.hooks({
    personForm: {
        before: {
            insert: function(doc, t) {
                var self = this;
                var files = t.find('.filestyle').files;
                for (var i = 0, ln = files.length; i < ln; i++) {
                    ImagesFS.insert(files[i], function (err, fileObj) {
                        if(!err){
                            _.extend(doc,{'avatar' : fileObj._id});
                            self.result(doc);
                        }
                    });
                }
            }
        }
    }
});