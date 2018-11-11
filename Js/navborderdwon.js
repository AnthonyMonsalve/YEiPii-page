if (window.matchMedia("(min-width: 840px)").matches) {
    var marker = $('#marker'),
        current = $('.current');

    // Initialize the marker position and the active class
    current.addClass('active');
    marker.css({
        // Place the marker in the middle of the border
        bottom: -(marker.height() / 2) + 1,
        left: current.position().left,
        width: current.outerWidth(),
        display: "block"
    });


    if (Modernizr.csstransitions) {
        console.log("using css3 transitions");
        $('li').mouseover(function () {
            var self = $(this),
                offsetLeft = self.position().left,
                // Use the element under the pointer OR the current page item
                width = self.outerWidth() || current.outerWidth(),
                // Ternary operator, because if using OR when offsetLeft is 0, it is considered a falsy value, thus causing a bug for the first element.
                left = offsetLeft == 0 ? 0 : offsetLeft || current.position().left;
            // Play with the active class
            $('.active').removeClass('active');
            self.addClass('active');
            if (self.hasClass("special-nav")) {
                marker.css({
                    left: left + 10,
                    width: width - 20,
                    borderColor: '#f7931e'
                });
            } else {
                marker.css({
                    left: left + 10,
                    width: width - 20,
                    borderColor: '#0f0e9f'
                });
            }
        });

        // When the mouse leaves the menu
        $('ul').mouseleave(function () {
            // remove all active classes, add active class to the current page item
            $('.active').removeClass('active');
            current.addClass('active');
            // reset the marker to the current page item position and width
            marker.css({
                left: current.position().left,
                width: current.outerWidth(),
                borderColor: 'white'
            });
        });

    } else {
        console.log("using jquery animate");

        $('li').mouseover(function () {
            var self = $(this),
                offsetLeft = self.position().left,
                // Use the element under the pointer OR the current page item
                width = self.outerWidth() || current.outerWidth(),
                // Ternary operator, because if using OR when offsetLeft is 0, it is considered a falsy value, thus causing a bug for the first element.
                left = offsetLeft == 0 ? 0 : offsetLeft || current.position().left;
            // Play with the active class
            $('.active').removeClass('active');
            self.addClass('active');
            marker.stop().animate({
                left: left,
                width: width,
            }, 300);
        });

        // When the mouse leaves the menu
        $('ul').mouseleave(function () {
            // remove all active classes, add active class to the current page item
            $('.active').removeClass('active');
            current.addClass('active');
            // reset the marker to the current page item position and width
            marker.stop().animate({
                left: current.position().left,
                width: current.outerWidth()
            }, 300);
        });
    };

}