Meteor.methods({
    updateChapter : function(chapter){
        try{
            bookPages.update({
                _id : chapter.bookId
            },{
                "$pull" : {
                    chapters : {
                        pageId : chapter.pageId
                    }
                }
            });

            bookPages.update({
                _id : chapter.bookId
            },{
                "$push" : {
                    chapters  :{
                        'titleOfChapter' : chapter.titleOfChapter,
                        'orderNo' : chapter.orderNo,
                        'isPublish' : chapter.isPublish,
                        'pageId' : chapter.pageId
                    }
                }
            });

            return true;
        }catch(ex){
            throw new Meteor.Error(ex);
            return false;
            console.log(ex)
        }
    }
})