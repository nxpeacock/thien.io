Meteor.methods({
    insertTerm: function (args) {
        //console.log(args)
        try {
            var _id = args.TermModel._id;
            if (_.isEmpty(_id)) {
                _id = toConstantCode(args.TermModel.name);
            }
            //console.log(_id)
            if (!_.isUndefined(Taxonomies.findOne({_id: args.TaxonomyId, 'terms._id': _id}))) return false;

            _.extend(args.TermModel, {'_id': _id});

            Taxonomies.update({_id: args.TaxonomyId}, {$push: {
                'terms': args.TermModel
            }});
            return true;
        } catch (ex) {
            //console.log(ex);
            return false;
        }
    }
})