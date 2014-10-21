Meteor.publish('taxonomies',function(){
    return Taxonomies.find({});
});

Meteor.publish('terms',function(){
    return Taxonomies.find({},{fields : {terms : 1}});
})

Meteor.publish('taxonomy',function(id){
    return Taxonomies.find({_id : id});
})