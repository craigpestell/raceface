require.config({
    paths: {
        'jquery': 'vendor/jquery/dist/jquery',
        'underscore': 'vendor/underscore-amd/underscore',
        'foundation': 'vendor/foundation/js/foundation',
        //'foundation': '//cdn.foundation5.zurb.com/foundation',
        'backbone': 'vendor/backbone-amd/backbone',
        'marionette': 'vendor/backbone.marionette/lib/backbone.marionette',
        'handlebars': 'vendor/backbone.marionette.handlebars/backbone.marionette.handlebars',
        'hbs': 'vendor/require-handlebars-plugin/hbs',
        'templates': '../templates',

        "foundation.abide": 'vendor/foundation/js/foundation/foundation.abide',
        "foundation.accordion": 'vendor/foundation/js/foundation/foundation.accordion',
        "foundation.alert": 'vendor/foundation/js/foundation/foundation.alert',
        "foundation.clearing": 'vendor/foundation/js/foundation/foundation.clearing',
        "foundation.dropdown": 'vendor/foundation/js/foundation/foundation.dropdown',
        "foundation.equalizer": 'vendor/foundation/js/foundation/foundation.equalizer',
        "foundation.interchange": 'vendor/foundation/js/foundation/foundation.interchange',
        "foundation.joyride": 'vendor/foundation/js/foundation/foundation.joyride',
        "foundation.magellan": 'vendor/foundation/js/foundation/foundation.magellan',
        "foundation.offcanvas": 'vendor/foundation/js/foundation/foundation.offcanvas',
        "foundation.orbit": 'vendor/foundation/js/foundation/foundation.orbit',
        "foundation.reveal": 'vendor/foundation/js/foundation/foundation.reveal',
        "foundation.slider": 'vendor/foundation/js/foundation/foundation.slider',
        "foundation.tab": 'vendor/foundation/js/foundation/foundation.tab',
        "foundation.tooltip": 'vendor/foundation/js/foundation/foundation.tooltip',
        "foundation.topbar": 'vendor/foundation/js/foundation/foundation.topbar',

        'slick': 'vendor/slick-carousel/slick/slick'
    },

    shim: {
        "jquery.cookie": ['jquery'],
        "foundation": ['jquery'],
        "foundation.abide": ['foundation'],
        "foundation.accordion": ['foundation'],
        "foundation.alert": ['foundation'],
        "foundation.clearing": ['foundation'],
        "foundation.dropdown": ['foundation'],
        "foundation.equalizer": ['foundation'],
        "foundation.interchange": ['foundation'],
        "foundation.joyride": ['foundation', 'jquery.cookie'],
        "foundation.magellan": ['foundation'],
        "foundation.offcanvas": ['foundation'],
        "foundation.orbit": ['foundation'],
        "foundation.reveal": ['foundation'],
        "foundation.slider": ['foundation'],
        "foundation.tab": ['foundation'],
        "foundation.toolbar": ['foundation'],
        "foundation.topbar": ['foundation']
    },

    hbs: { // optional
        helpers: true,            // default: true
        templateExtension: 'hbs', // default: 'hbs'
        partialsUrl: ''           // default: ''
    }
});

require(['views/app'], function (App) {
    App.start();
});
