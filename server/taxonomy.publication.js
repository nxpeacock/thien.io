Meteor.publish('taxonomies',function(){
    return Taxonomies.find({});
});

Meteor.publish('taxonomy',function(id){
    return Taxonomies.find({_id : id});
})