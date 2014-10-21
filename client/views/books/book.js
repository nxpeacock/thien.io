Template.books_list.helpers({
    booksList : function(){
        var i=0;
        var books = bookPages.find({},{fields : {summary : 0}});
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
        var books = bookPages.find({},{fields: {summary: 0}});
        //console.log(books.count() === 0)
        if(books.count() === 0){
            books = [];
            Session.set('booksList', books);
        }else{
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
            $isChapterOfBook[0].selectize.on('change',function(e){
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
    'click #btnAddMoreTypes' : function(e){
        e.preventDefault();
        var html = Blaze.toHTML(Template.taxonomies_termForm);
        var dlg = new BootstrapDialog({
            title: 'Cập nhật Tác giả / Dịch giả',
            nl2br: false,
            cssClass: 'modal_add_new_source',
            closable: true,
            message : html,
            buttons: [{
                id: 'btnSubmit',
                label: 'Lưu lại'
            }]
        });
        dlg.realize();
        dlg.open();
        var btnSubmit = dlg.getButton('btnSubmit');
        btnSubmit.click(function(ev){
            console.log($('#txtTerm').val());
        })
    }
})