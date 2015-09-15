define([
    'underscore',
    'backbone'
], function(_, Backbone){
    return Backbone.Model.extend({
        url: function(){
            return 'http://10.134.40.148:8001/api/carousels/' + this.slug;
        },

        initialize: function(models, options){
            this.slug = options.slug;
        }
    });
});
