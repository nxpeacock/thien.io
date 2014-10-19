Taxonomies = new Mongo.Collection('taxonomies');
TermModel = new SimpleSchema({
    _id : {
        type : String,
        optional : true
    },
    name : {
        type : String,
        max : 200,
        label : 'Tên Term'
    },
    count : {
        type : Number,
        min : 0,
        defaultValue : 0,
        label : 'Bộ đếm',
        optional : true
    }
});



TaxonomyModel = new SimpleSchema({
    name : {
        type : String,
        max : 200,
        label : 'Tên'
    },
    slug :{
        type : String,
        max : 200,
        label : 'Slug'
    },
    terms : {
        type : [TermModel],
        optional : true
    }
});

Taxonomies.attachSchema(TaxonomyModel);

Taxonomies.allow({
    insert : function(userId,doc){return true;},
    update : function(userId, doc, modifier){
        return true;
    },
    remove : function(userId,doc){
        return true;
    }
});

bookPages = new Mongo.Collection('bookPages');


Chapter = new SimpleSchema({
    title : {
        type : String,
        max : 200,
        label : 'Tên chương'
    },
    pageId : {
        type : String,
        label : 'Mã trang'
    },
    orderNo : {
        type : Number,
        label : 'Thứ tự'
    },
    isPublish : {
        type : Boolean,
        label : 'Xuất bản?',
        defaultValue : true
    }
});

PageModel = new SimpleSchema({
    title : {
        type : String,
        max : 200,
        label : 'Tên truyện / Tên chương'
    },
    summary : {
        type : String,
        max : 500,
        label : 'Tóm tắt',
        optional : true
    },
    coverPicture : {
        type : String,
        optional : true,
        label : 'Ảnh bìa'
    },
    content : {
        type : String,
        optional : true,
        label : 'Nội dung'
    },
    types : {
        type : [String],
        optional : true,
        label : 'Thể loại'
    },
    authors : {
        type : [String],
        optional : true,
        label : 'Tác giả'
    },
    translators : {
        type : [String],
        optional : true,
        label : 'Dịch giả'
    },
    isBook : {
        type : Boolean,
        optional : true,
        label : 'Là sách / trang chính?',
        defaultValue : false
    },
    isChapterOfBook : {
        type : String,
        optional : true,
        label : 'Thuộc cuốn sách'
    },
    chapters : {
        type : [Chapter],
        optional : true,
        label : 'Danh sách trang / chương'
    },
    updatedAt : {
        type : Date,
        optional : true,
        autoValue : function(){
            return new Date();
        }
    }
});

bookPages.attachSchema(PageModel);

bookPages.allow({
    insert : function(userId,doc){
        return true;
    },
    update : function(userId,modifier,doc){
        return true;
    },
    remove : function(userId,doc){
        return true;
    }
})