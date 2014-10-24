if (Meteor.isServer) {
    Meteor.startup(function () {
        initDb();
    })

}

var initDb = function () {
    try {
        if (Meteor.roles.find().count() === 0) {
            var o = 0;
            _.each(Assets.getText('fixtures/roles.json').split('\n'), function (i) {
                if (!_.isEmpty(i)) {
                    var j = EJSON.fromJSONValue(EJSON.parse(i));
                    Meteor.roles.insert(j);
                    o += 1;
                }
            })
            console.log('Roles : ' + o);
        }
        if (Meteor.users.find().count() === 0) {
            var o = 0;
            _.each(Assets.getText('fixtures/users.json').split('\n'), function (i) {
                if (!_.isEmpty(i)) {
                    var j = EJSON.fromJSONValue(EJSON.parse(i));
                    Meteor.users.insert(j);
                    o += 1;
                }
            })
            console.log('Users : ' + o);
        }
        if (Taxonomies.find().count() === 0) {
            var o = 0;
            _.each(Assets.getText('fixtures/taxonomies.json').split('\n'), function (i) {
                if (!_.isEmpty(i)) {
                    var j = EJSON.fromJSONValue(EJSON.parse(i));
                    Taxonomies.insert(j);
                    o += 1;
                }
            })
            console.log('Taxonomies : ' + o);
        }
/*        if (bookPages.find().count() === 0) {
            var o = 0;
            _.each(Assets.getText('fixtures/bookPages.json').split('\n'), function (i) {
                if (!_.isEmpty(i)) {
                    var j = EJSON.fromJSONValue(EJSON.parse(i));
                    bookPages.insert(j);
                    o += 1;
                }
            })
            console.log('Books : ' + o);
        }
        if (BooksCover.find().count() === 0) {
            var o = 0;
            _.each(Assets.getText('fixtures/cfs.BooksCover.filerecord.json').split('\n'), function (i) {
                if (!_.isEmpty(i)) {
                    var j = EJSON.fromJSONValue(EJSON.parse(i));
                    BooksCover.insert(j);
                    o += 1;
                }
            })
            console.log('Books Cover : ' + o);
        }*/
    } catch (ex) {
        console.log(ex)
    }
}