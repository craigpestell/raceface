define([
    'underscore',
    'backbone',
    // Pull in the Model module from above
    'models/Post'
], function(_, Backbone, PostModel){
    var PostCollection = Backbone.Collection.extend({
        url: 'http://45.55.25.163/api/posts',
        model: PostModel
    });
    // You don't usually return a collection instantiated
    return PostCollection;
});
