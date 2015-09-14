/**
 * Created by craig on 9/12/15.
 */
define([
    'jquery',
    'underscore',
    'marionette',
    'models/Carousel',
    'hbs!templates/Carousel'
], function($, _, Mn, CarouselModel, CarouselTemplate){
    console.log(arguments);

    return Mn.ItemView.extend({
        el: $("#carousel-container"),
        //tagName: 'div#carousel',
        //childView: CarouselItemView,
        template:CarouselTemplate,

        initialize: function(){
            this.model = new CarouselModel([], {slug:'home'});
            this.model.bind('reset', this.render, this);

            var self = this;
            this.model.fetch()
                .done( function(){
                    self.render();
                });
        },

        onRender:function(){
            if(this.model.get('items') && this.model.get('items').length > 0){
                $('#carousel').slick({
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    //fade: true,
                    asNavFor: '#carousel-nav'
                });

                //calculate how many navigation thumbnails to show.
                var slidesToShow = this.model.attributes.items.length;
                console.log(slidesToShow);
                if(slidesToShow > 5) {
                    slidesToShow = 5;
                }
                $('#carousel-nav').slick({
                    slidesToShow: slidesToShow,
                    slidesToScroll: 1,
                    asNavFor: '#carousel',
                    centerPadding:0,
                    dots: true,
                    centerMode: true,
                    focusOnSelect: true
                });
            }

        },

        render: function() {
            $(this.el).html(this.template({carousel: this.model.toJSON()}));
            this.triggerMethod("render");
        }
    });
});