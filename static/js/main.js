require.config({
    baseUrl: '/static/js/',
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        'jquery': 'external/jquery/jquery-2.1.0',
        'jqueryui': 'external/jquery-ui/jquery-ui-1.10.4.custom',
        'bootstrap': 'external/bootstrap/bootstrap.min',
        'bootstrap-dtp': 'external/bootstrap/bootstrap-datetimepicker.min',
        'moment': 'external/moment/moment.min'
    },

    shim: {  
        "jqueryui": {
            deps: ['jquery']
        },
        "bootstrap": {
            deps: ['jquery']
        },
        "moment": {
            deps: ['jquery']
        },
        "bootstrap-dtp": {
            deps: ['jquery', 'bootstrap', 'moment']
        }
    }
});

require([
    'jquery',
    'bootstrap',
    'modules/parser',
    'bootstrap-dtp'
], 
function ($) {
    $(document).ready(function() {
        $('.dropdown-toggle').dropdown();

        $('.cs-js-add-band-record-to-concert .cs-js-datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down"
            }
        }).on("dp.change",function (e) {
            $("input.cs-js-date").val($(this).data("DateTimePicker").getDate().format("YYYY-MM-DD"));
            $("input.cs-js-time").val($(this).data("DateTimePicker").getDate().format("hh:mm:ss"));
        });

        $('.cs-js-add-ticket .cs-js-datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down"
            }
        });

        $(".cs-js-parse-input").parser({
            elemDisplay: $(".cs-js-parse-display"),
            elemOutput: $(".cs-js-parse-output"),
        });
    });
});