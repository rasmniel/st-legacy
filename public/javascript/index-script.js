var main = function () {
	$('.next').click(function () {
        var active = $('.active');
        var next = active.next();
        
        if (next.length === 0) {
            next = $('#carousel img').first();
        }
        
        active.removeClass('active');
        next.addClass('active');
    });
    
    $('.prev').click(function () {
        var active = $('.active');
        var prev = active.prev();
        
        if (prev.length === 0) {
            prev = $('#carousel img').last();
        }
        
        active.removeClass("active");
        prev.addClass("active");
    });
	
	if (window.localStorage['displayedLegacyWarning']) {
        window.setTimeout(function() {
            alert('NB!\n\n' +
                'Dette er ikke det officielle STAR-Trading site, men blot en demo uden aktuel data. Det rigtige site findes på\nwww.star-trading.dk.\n\n' +
                '================\n\n' +
                'This is not the official STAR-Trading site, but merely a demo with obsolete data. The real site is available at\nwww.star-trading.dk.');
        }, 1000);
    }
    window.localStorage['displayedLegacyWarning'] = true;
};

$(document).ready(main);