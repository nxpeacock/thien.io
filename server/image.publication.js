Meteor.publish('images',function(){
    return ImagesFS.find();
});

Meteor.publish('image',function(docId){
    return ImagesFS.find({_id : docId});
})