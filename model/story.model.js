Books = new Mongo.Collection('books');
Publishers = new Mongo.Collection('publishers');
People = new Mongo.Collection('people');
Chapters = new Mongo.Collection('chapters');

//var Schemas = {};

PersonModel = new SimpleSchema({
    title: {
        type: String,
        label: 'Chức danh',
        max: 50,
        optional: true
    },
    name: {
        type: String,
        label: 'Tên',
        max: 200
    },
    summary: {
        type: String,
        label: 'Lược sử',
        max: 500,
        optional: true
    },
    content: {
        type: String,
        label: 'Nội dung',
        optional: true
    },
    avatar: {
        type: String,
        label: 'Ảnh đại diện',
        optional : true
    },
    isAuthor: {
        type: Boolean,
        label: 'là Tác giả?',
        defaultValue: false
    },
    isTranslator: {
        type: Boolean,
        label: 'là Dịch giả?',
        defaultValue: false
    },
    isBuddha: {
        type: Boolean,
        label: 'là PHẬT?',
        defaultValue: false
    }
});

People.attachSchema(PersonModel);
People.allow({
    insert : function(userId,doc){return true;},
    update : function(userId, doc, fieldNames, modifier){return true;},
    remove : function(userId,doc){return true;}
});

PublisherModel = new SimpleSchema({
    name: {
        type: String,
        label: 'Nhà xuất bản',
        max: 200
    }
});

Publishers.attachSchema(PublisherModel);

ChapterModel = new SimpleSchema({
    title: {
        type: String,
        label: 'Đoạn/Chương',
        max: 200
    },
    content : {
        type : String,
        label : 'Nội dung',
        optional : true
    },
    isSection: {
        type : Boolean,
        label : 'là Đoạn?',
        defaultValue : false
    },
    orderNo : {
        type : Number,
        label : 'Số thứ tự',
        defaultValue : 0
    },
    bookId :{
        type : String
    }
});

Chapters.attachSchema(ChapterModel);

BookModel = new SimpleSchema({
    title: {
        type: String,
        label: 'Tựa đề',
        max: 200
    },
    description: {
        type: String,
        label: 'Tóm tắt',
        max: 500,
        optional: true
    },
    cover: {
        type: String,
        label: 'Ảnh bìa',
        optional: true
    },
    publisher: {
        type: PublisherModel,
        optional: true
    },
    authors: {
        type: [PersonModel],
        optional: true
    },
    translators: {
        type: [PersonModel],
        optional: true
    },
    chapters :{
        type : [ChapterModel],
        optional : true
    }
});
