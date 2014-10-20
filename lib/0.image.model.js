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
    stores: [
        new FS.Store.FileSystem("BooksCover",{}),
        new FS.Store.FileSystem("BooksCover_thumbs", {
            transformWrite: function(fileObj, readStream, writeStream) {
                // Transform the image into a 10x10px thumbnail
                gm(readStream, fileObj.name()).resize('100', '100').stream().pipe(writeStream);
                gm(readStream, fileObj.name()).resize('50', '50').stream().pipe(writeStream);
            }
        })
    ],
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

