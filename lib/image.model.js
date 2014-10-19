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

BooksCover = new FS.Collection("BooksCover", {
    stores: [new FS.Store.FileSystem("BooksCover",{})],
    filter: {
        allow: {
            contentTypes: ['image/*'] //allow only images in this FS.Collection
        }
    }
});

BooksCover.allow({
    insert : function(userId, doc){
        return true;
    },
    update : function(userId, doc, fieldNames, modifier){
        return true;
    },
    download : function(userId,doc){
        return true;
    },
    remove : function(userId,doc){
        return true;
    }
});

/*
PeopleAvatars.addFilters({
    allow: {
        contentTypes: ['image*/
/*']
    }
});*/
