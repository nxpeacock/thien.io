Template.taxonomies_list.helpers({
    'items' : function(){
        var i = 0;
        var items = _.filter(Taxonomies.find({},{fields : {terms :0}}).fetch(),function(t){
            return _.extend(t,{'NoN' : ++i});
        });
        return items;
    }
})

Template.taxonomies_update.helpers({
    taxonomy : function(){
        return Taxonomies.findOne({_id : Router.current().params._id});
    }
});

Template.taxonomies_termForm.helpers({
    modelOfTerm : function(){
        return TermModel;
    }
});

/*Template.taxonomies_termForm.created = function(){
    $(document).ready(function(){
        setTimeout(function(){
            console.log('aaa')
            var btnReset = $('#btnReset');
            btnReset.click(function(e){
                console.log(e)
            })
        },100)
    })
};*/

Template.taxonomies_termForm.events({

})
