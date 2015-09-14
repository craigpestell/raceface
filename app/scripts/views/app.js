/*define(['backbone'], function(Backbone) {
 var App = Backbone.View.extend({
 initialize: function() {
 console.log( 'Wahoo!' );
 }
 });

 return App;
 });*/

define(['backbone',
        'marionette',
        'jquery',
        'routes/AppRouter',
        'controllers/AppController',
        'layouts/BaseLayout',
        'foundation', 'foundation.dropdown'],
    function (Backbone, Mn, $, AppRouter, AppController, BaseLayout) {


        // you can store two configs in two separate files
        // FILE NAME: config-development.json:
        // FILE CONTENT: {"url":"http://localhost:8000"}
        // FILE NAME: config-production.json:
        // FILE CONTENT: {"url":"http://google.com"}



        function getConfig() {
            // if you pass ?dev=true to your url address default config that will be used is `config-development`
            // otherwise - `config-production`
            console.log(getParameterByName('dev',false));
            var configName = getParameterByName('dev', false) ? 'config-development' : 'config-production';

            window._config || (window._config = {});

            // for production version you should concat your config with main script or put it above main script
            // inside global `_config` variable for example
            if (window._config[configName]) return window._config[configName];

            // for development version you can just make an ajax call to get the config
            $.ajax({
                url : configName + '.json',
                async : false,
                success : function(response) {
                    window._config[configName] = response;
                }
            });
            return window._config[configName];
        }

        // helper
        function getParameterByName(name, defaults, location) {
            location = location || window.location.href;
            name = name.replace(/[\[]/,'\\\[').replace(/[\]]/,'\\\]');
            var result = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(location);
            return result === null ? defaults : decodeURIComponent(result[1].replace(/\+/g, ' '));
        }

        // Create our Application
        var app = Mn.Application.extend({
            initialize: function (options) {
                console.log('woohoo');
            }
        });
        app = new app({});


        app.loadCSS = function (url) {
            var link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = url;
            document.getElementsByTagName("head")[0].appendChild(link);
        };
        var controller = new AppController({});

        app.addInitializer(function (options) {
            var router = new AppRouter({
                controller: controller
            })
        });

        app.addInitializer(function () {
            var config = getConfig();
            console.log(config.url);
            app.baseLayout = new BaseLayout();
            var base = 'scripts';
            if (config.env !== "development") {
                base = 'css';
            }

            app.loadCSS(base + '/vendor/foundation/css/normalize.css');
            //app.loadCSS('https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css');
            //app.loadCSS('https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/css/foundation.css');
            //app.loadCSS('http://cdn.foundation5.zurb.com/foundation.css');
            app.loadCSS(base + '/vendor/slick-carousel/slick/slick.css');
            app.loadCSS(base + '/vendor/foundation/css/foundation.css');

            $('body').prepend(app.baseLayout.el);
        });

        // Start history when our application is ready
        app.on('start', function () {
            Backbone.history.start();

            $(document).ready(function() {
                Foundation.set_namespace = function(){
                    this.global.namespace = [];
                };
                console.log('initializing foundation');
                $(document).foundation();
            });


        });

        return app;
    }
);