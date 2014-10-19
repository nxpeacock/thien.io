Router.map(function(){
    this.route('taxonomies_api',{
        path : '/api/taxonomies',
        where : 'server',
        action : function(){
            console.log('################################################');
            console.log(this.request.method);
            console.log(this.request.headers);
            console.log('this.params.id: ' + this.params.id);

            console.log('------------------------------');
            console.log(this.request.body);
            console.log('------------------------------');

            this.response.statusCode = 200;
            this.response.setHeader("Content-Type", "application/json");
            this.response.setHeader("Access-Control-Allow-Origin", "*");
            this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

            if (this.request.method == 'GET') {
                this.response.end(JSON.stringify(
                    Taxonomies.find({}).fetch()
                ));
            }
        }
    })
})