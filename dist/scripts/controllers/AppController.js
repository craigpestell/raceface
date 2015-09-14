define(["jquery", "marionette", 'views/PostListView', 'views/CarouselView'], function ($, Mn, PostsListView, CarouselView) {

    var Controller = Mn.Controller.extend({
        initialize : function(options) {
            //TODO: code to initialize
        },
        start: function() {
            //TODO: code to start
        },

        /**
         * Initialized on start, without hash
         * @method
         */
        home :  function () {

            require(['views/app'], function(App){
                var layoutRender = App.baseLayout.render();

                var PostsView = new PostsListView();
                App.baseLayout.postsRegion.show(PostsView);

                var Carousel = new CarouselView();
                App.baseLayout.carouselRegion.show(Carousel);
            });
            console.log('Hello Marionette');

        },
    });

    return Controller;
});
