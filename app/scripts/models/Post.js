define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var PostModel = Backbone.Model.extend({
        defaults: {
            title: "Default title",
            content: 'No content here'
        }
    });
    // Return the model for the module
    return PostModel;
});