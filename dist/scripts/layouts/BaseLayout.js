define([
    'underscore',
    'jquery',
    'backbone',
    'slick',
    'views/CarouselView',
    'hbs!templates/BaseLayout'
], function(_, $, Backbone, Slick, CarouselView, BaseLayoutTemplate){
    var BaseLayout = Backbone.Marionette.LayoutView.extend({
        template: BaseLayoutTemplate,
        el: '#layout',
        regions: {
            carouselRegion: '#carousel-region',
            postsRegion: '#posts-region'
        },

        onRender: function(){

            console.log('layout rendered');
            $(document).foundation();
        }

    });
    return BaseLayout;
});