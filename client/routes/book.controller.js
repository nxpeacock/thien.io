BookController = ApplicationController.extend({
    onBeforeAction: function () {
        document.title = 'THIEN.IO - Sách / Truyện / Kinh văn'
    },
    waitOn : function(){
        return [Meteor.subscribe('onlyBooksList'),Meteor.subscribe('taxonomies'),Meteor.subscribe('booksCover')]
    },
    template: 'books_list'
});

Router.route('books', {
    controller: BookController,
    path: '/sach-truyen'
});

NewBookController = ApplicationController.extend({
    onBeforeAction: function () {
        document.title = 'THIEN.IO - Thêm Sách / Truyện / Kinh văn'
    },
    waitOn: function () {
        return [Meteor.subscribe('taxonomies'), Meteor.subscribe('onlyBooksList')]
    },
    template: 'books_insert'
});

Router.route('books_insert', {
    controller: NewBookController,
    path: '/sach-truyen/them'
});

AutoForm.hooks({
    bookForm: {
        before: {
            insert: function (doc, t) {
                try {
                    var types = doc.types, authors = doc.authors, translators = doc.translators;
                    var summary = $(t.find('#summary')).code(), content = $(t.find('#content')).code();

                    if (!_.isUndefined(types)) _.extend(doc, {'types': types.split(',')});
                    if (!_.isUndefined(authors)) _.extend(doc, {'authors': authors.split(',')});
                    if (!_.isUndefined(translators)) _.extend(doc, {'translators': translators.split(',')});
                    if (!_.isUndefined(summary)) _.extend(doc, {'summary': JSON.stringify(summary)});
                    if (!_.isUndefined(content)) _.extend(doc, {'content': JSON.stringify(content)});
                    //_.extend(doc, {'types': types.split(','), 'authors': authors.split(','), 'translators': translators.split(',')});
                    var self = this;
                    var files = t.find('.filestyle').files;
                    if (!_.isUndefined(files) || files.length > 0) {
                        for (var i = 0, ln = files.length; i < ln; i++) {
                            BooksCover.insert(files[i], function (err, fileObj) {
                                if (!err) {
                                    _.extend(doc, {'coverPicture': fileObj._id});
                                    self.result(doc);
                                }
                            });
                        }
                    }else{
                        self.result(doc);
                    }

                } catch (e) {
                    console.log(e)
                }
            }
        },
        onSuccess: function () {
            Notifications.success('Thông báo', 'Cập nhật thành công');
            Router.go('books');
        }
    }
});