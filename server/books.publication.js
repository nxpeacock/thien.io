Meteor.publish('onlyBooksList', function () {
    return bookPages.find({isBook: true}, {fields: {content : 0}}, {sort: {updatedAt: -1}});
});
