define([
    'underscore',
    'backbone',
    // Pull in the Model module from above
    'models/Post'
], function(_, Backbone, PostModel){
    var PostCollection = Backbone.Collection.extend({
        url: 'http://localhost:3001/api/posts',
        model: PostModel
    });
    // You don't usually return a collection instantiated
    return PostCollection;
});