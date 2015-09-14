/**
 * Created by craig on 9/12/15.
 */
define([
    'jquery',
    'underscore',
    'marionette',
    'hbs!templates/PostView'
], function($, _, Mn, PostViewTemplate){
    var PostView = Mn.ItemView.extend({
        template:PostViewTemplate,
        tagName: 'div',
        render: function(){
            $(this.el).html(this.template({post: this.model.toJSON()}));
        }
    });
    return PostView;
});