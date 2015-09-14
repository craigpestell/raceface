define([
    'jquery',
    'underscore',
    'marionette',
    'hbs!templates/CarouselItem'
], function($, _, Mn, CarouselItemTemplate){
    return Mn.ItemView.extend({
        template:CarouselItemTemplate,
        tagName: 'div',

        //childViewContainer: 'div#carousel',
        render: function(){
            $(this.el).html(this.template({item: this.model.toJSON()}));
        }
    });
});