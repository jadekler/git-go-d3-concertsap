define(['jquery', 'jqueryui'], function ($) {
    $.widget('cs.parser', {
        _init: function() {
            var self = this;
            self.options.elem = $(self.element);

            self.options.elem.keyup(function() {
                var rawText = $(this).val();
                var matches = rawText.split(new RegExp(['\n', '•', ','].join('|'), 'g'));
                var parsedString = "";

                matches.forEach(function(item) {
                    parsedString += $.trim(item)+"<br>";
                });

                self.options.elemDisplay.html(parsedString);
                self.options.elemOutput.val(parsedString);
            });
        },

        regexMatch: function(pattern, str) {
            var regex = new RegExp(pattern);
            var matches = [];

            while ((myArray = regex.exec(str)) != null) {
                matches.push(myArray[1]);
            }

            return matches;
        }
    });
});