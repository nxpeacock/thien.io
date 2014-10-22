Template.books_list.helpers({
    booksList: function () {
        var i = 0;
        var books = bookPages.find({}, {fields: {summary: 0}});
        return books;
    }
})

Template.books_insert.helpers({
    bookTypes: function () {
        return Taxonomies.findOne({slug: 'THELOAI'}, {fields: {terms: 1}}).terms;
    },
    people: function () {
        return Taxonomies.findOne({slug: 'TACGIADICHGIA'}, {fields: {terms: 1}}).terms;
    },
    booksList: function () {
        var books = bookPages.find({}, {fields: {summary: 0}});
        //console.log(books.count() === 0)
        if (books.count() === 0) {
            books = [];
            Session.set('booksList', books);
        } else {
            Session.set('booksList', books.fetch());
        }

        return Session.get('booksList');
    }
});

Template.books_insert.rendered = function () {

    $(document).ready(function () {
        setTimeout(function () {
            var $select = $('#bookTypes,#authors,#translators,#isChapterOfBook').selectize({
                allowEmptyOption: true,
                sortField: {
                    field: 'text',
                    direction: 'asc'
                },
                create: true
            });

            var $isChapterOfBook = $('#isChapterOfBook').selectize({
                allowEmptyOption: true,
                create: true
            });
            var bookTypes = $select[0].selectize, authors = $select[1].selectize, translators = $select[2].selectize;
            bookTypes.on('change', function (e) {
                $('[data-schema-key="types"]').val(e);
            });
            authors.on('change', function (e) {
                $('[data-schema-key="authors"]').val(e);
            });
            translators.on('change', function (e) {
                $('[data-schema-key="translators"]').val(e);
            });
            $isChapterOfBook[0].selectize.on('change', function (e) {
                $('[data-schema-key="isChapterOfBook"]').val(e);
            })
            $(":file").filestyle({buttonText: "Chọn ảnh..."});

            $('.summernote').summernote({
                    height: 150,   //set editable area's height
                    codemirror: { // codemirror options
                        theme: 'monokai'
                    }
                }
            );
        }, 100);
    })
};

Template.books_insert.events({
    'click #btnAddMoreTypes': function (e) {
        e.preventDefault();
        var taxonomies = Taxonomies.find({}, {fields: {name: 1}}).fetch();
        var html = Blaze.toHTMLWithData(Template.taxonomies_termForm, {taxonomies: taxonomies});
        var dlg = new BootstrapDialog({
            title: 'Cập nhật Tác giả / Dịch giả',
            nl2br: false,
            cssClass: 'modal_add_new_source',
            closable: true,
            message: html,
            buttons: [
                {
                    id: 'btnSubmit',
                    label: 'Lưu lại'
                }
            ]
        });
        dlg.realize();
        dlg.open();
        var btnSubmit = dlg.getButton('btnSubmit');
        btnSubmit.click(function (ev) {
            var taxonomyId = $('#taxonomyId').val();
            var termModel = {
                _id: $('#txtId').val(),
                name: $('#txtTerm').val()
            };
            Meteor.call('insertTerm', {TaxonomyId: taxonomyId, TermModel: termModel}, function (e) {
                if (e) dlg.close();
            })
        })
    }
});

Template.chaptersOfBook.helpers({
    book: function () {
        var bookId = Router.current().params._id;
        var bookAndPages = bookPages.find({}, {sort: {updatedAt: -1}}).fetch();
        var book = _.findWhere(bookAndPages, {'_id': bookId});
        var pages = _.where(bookAndPages, {isChapterOfBook : bookId});
        var sz = _.size(pages);
        _.each(pages,function(p){
            return _.extend(p,{orderRange : _.range(sz,-sz,-1)});
        });

        //console.log(pages)

        if (!book.chapters) {
            _.extend(book,{chapters : pages})
        }
        //_.each(book.chapters,function(c){console.log(c.title)})
        return book;
    }
});

Template.chaptersOfBook.events({
    'click button[id^=btnSave_]' : function(e,t){
        var title = $(t.find('#titleOfChapter_'+this._id));

        var chapter = {
            bookId : Router.current().params._id,
            pageId : this._id,
            orderNo : $(t.find('#orderNo_'+this._id)).val(),
            titleOfChapter : (_.isEmpty(title.attr('value'))) ? title.attr('placeholder') : title.attr('value'),
            isPublish : $(t.find('#isPublish_'+this._id)).is(":checked")
        };

        Meteor.call('updateChapter',chapter,function(err,rs){
            console.log(err,rs);
        })
    }
})