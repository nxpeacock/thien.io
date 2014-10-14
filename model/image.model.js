PeopleAvatars = new FS.Collection("peopleAvatars", {
    stores: [new FS.Store.FileSystem("peopleAvatars", {})],
    filter: {
        allow: {
            contentTypes: ['image/*'] //allow only images in this FS.Collection
        }
    }
});

PeopleAvatars.allow({
    insert : function(userId, doc){
        return true;
    },
    update : function(userId, doc, fieldNames, modifier){
        return true;
    },
    download : function(userId){

    }
});

/*
PeopleAvatars.addFilters({
    allow: {
        contentTypes: ['image*/
/*']
    }
});*/
