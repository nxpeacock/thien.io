Meteor.publish('taxonomies', function () {
    return Taxonomies.find({});
});

Meteor.publish('terms', function () {
    return Taxonomies.find({}, {fields: {terms: 1}});
});

Meteor.publish('termsBySlug', function (slug) {
    return Taxonomies.find({'slug': slug});
});

Meteor.publish('taxonomy', function (id) {
    return Taxonomies.find({_id: id});
});

