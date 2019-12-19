/**!
 * jStars 1.0 | Nick Potafiy
 * https://github.com/nickpotafiy/jstars
 * Self-contained jQuery plugin for displaying star ratings.
 * @license
 */
(function ($) {
    $.fn.jstars = function (options) {
        options = options || {};

        var defaults = {
            size: '1.5rem',
            value: 4.5,
            stars: 5,
            color: '#4285F4',
            emptyColor: '#dddddd'
        };
        var settings = $.extend(defaults, options);

        var unselectable = function ($element) {
            $element.css('user-select', 'none')
                .css('-moz-user-select', 'none')
                .css('-khtml-user-select', 'none')
                .css('-webkit-user-select', 'none')
                .css('-o-user-select', 'none');
        };

        var repeat = function (str, total) {
            var final = '';
            for (var i = 0; i < total; i++) final += str;
            return final;
        };

        this.each(function () {
            var $container = $(this);
            var value = $container.data('value') || settings.value;
            var totalStars = $container.data('total-stars') || settings.stars;
            var color = $container.data('color') || settings.color;
            var emptyColor = $container.data('empty-color') || settings.emptyColor;
            var size = $container.data('size') || settings.size;

            var $emptyStars = $(document.createElement('div'))
                .addClass('jstars-empty')
                .css('position', 'relative')
                .css('display', 'inline-block')
                .css('font-size', size)
                .css('line-height', size)
                .css('color', emptyColor)
                .append(repeat("&starf;", totalStars));

            unselectable($emptyStars);

            var $filledStars = $(document.createElement('div'))
                .addClass('jstars-filled')
                .css('top', 0)
                .css('left', 0)
                .css('position', 'absolute')
                .css('display', 'inline-block')
                .css('font-size', size)
                .css('line-height', size)
                .css('width', ((value / totalStars) * 100) + '%')
                .css('overflow', 'hidden')
                .css('white-space', 'nowrap')
                .css('color', color)
                .append(repeat("&starf;", totalStars));

            unselectable($filledStars);

            $emptyStars.append($filledStars);
            $container.append($emptyStars);
        });
        return this;
    };
    $(function () {
        $('.jstars').jstars();
    });
})(jQuery);