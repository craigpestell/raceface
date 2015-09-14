define(["marionette"], function (Mn) {
    var Router = Mn.AppRouter.extend({
        appRoutes: {
            "": "home",
        },
        /* standard routes can be mixed with appRoutes/Controllers above */
        routes : {
            "hello/:username": "helloBuddy"
        },
        helloBuddy : function (buddy) {
            // Without controller the routing functions live in Router object
            alert("Hello " + buddy);
        }
    });

    return Router;
});