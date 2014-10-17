Taxonomies = new Mongo.Collection('taxonomies');
TermModel = new SimpleSchema({
    _id : {
        type : String,
        autoValue : function(){
            if(this.isInsert){
                return Random.id();
            }
        }
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
        label : 'Bộ đếm'
    }
})

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
        type : [TermModel],
        optional : true,
        label : 'Thể loại'
    },
    author : {
        type : [TermModel],
        optional : true,
        label : 'Tác giả'
    },
    translator : {
        type : [TermModel],
        optional : true,
        label : 'Dịch giả'
    }
});