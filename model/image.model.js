ImagesFS = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {})],
    filter: {
        allow: {
            contentTypes: ['image/*'] //allow only images in this FS.Collection
        }
    }
});

ImagesFS.allow({
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
ImagesFS.addFilters({
    allow: {
        contentTypes: ['image*/
/*']
    }
});*/
