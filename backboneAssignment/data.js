var Countries = Backbone.Collection.extend({
    url: "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies",
    });
    var countries=new Countries();
    
    countries.fetch().then(function getdata(){
    for(let i=0;i<=countries.length;i++){
        console.log(countries);
        //var x=countries.at(i);
    //console.log(countries.at(i).get("name")+"\n"+ countries.at(i).get("flag")+"\n");
    //var currency=countries.at(i).get('currencies.name');
    //var y = x.attributes.currencies;
    
   //console.log(y);
    
    }
    });    
var CountryView=Backbone.View.extend({
    //template: _.template(),
    el:$("#country"),
    initialize:function(){
        this.render
    },
    render:function(){
        this.$el.html('welcome to template');
        return this;
    },
    
    collection:Countries

})
var view=new CountryView();