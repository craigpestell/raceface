/**
 * Created by craig on 9/12/15.
 */
define([
    'jquery',
    'underscore',
    'marionette',
    'collections/Posts',
    'views/PostView',
    'hbs!templates/PostListView'
], function($, _, Mn, PostsCollection, PostView, PostsListTemplate){
    return Mn.CollectionView.extend({
        el: $("#posts"),
        childView: PostView,
        //tagName: 'ul',
        template:PostsListTemplate,

        initialize: function(){
            this.collection = new PostsCollection();
            this.collection.bind('reset', this.render, this);

            var self = this;
            this.collection.fetch({})
                .done( function(){
                    self.collection.add({ title: "Ginger Kid"});

                    self.render({context: {title:'Main posts'}});
                });
        },

        /*render: function() {
            $(this.el).html(this.template({posts: this.collection.toJSON()}));
        }*/
        //render: function() {}

    });
});