define([
    'underscore',
    'backbone'
], function(_, Backbone){
    return Backbone.Model.extend({
        url: function(){
            return 'http://localhost:3001/api/carousels/' + this.slug;
        },

        initialize: function(models, options){
            this.slug = options.slug;
        }
    });
});