Meteor.publish('onlyBooksList', function () {
    return bookPages.find({isBook: true}, {fields: {content: 0}}, {sort: {updatedAt: -1}});
});

Meteor.publish('getBookById', function (bookId) {
    return bookPages.find({_id: bookId, isBook: true}, {fields: {content: 0}});
});

Meteor.publish('getPagesOfBook', function (bookId) {
    return bookPages.find({isChapterOfBook: bookId, isBook: false}, {fields: {content: 0}}, {sort: {updatedAt: 'asc'}});
});
