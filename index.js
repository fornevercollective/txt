console.clear();

// shitty js not for use, just don`t look)

$(document).ready(
    function() {
        $(".body").niceScroll({
            cursorcolor: "rgba(0,0,0,0.5)",
            cursorborder: "none",
					  zindex: 99999
        });
    }
);

$("body").getNiceScroll().hide();

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    sendMess();
    return false;
  }
});
    

function sendMess() {
    d = new Date();
    m = d.getMinutes();
    msg = $('.sending-message textarea').val();
    var height = $('.body')[0].scrollHeight;
    if ($.trim(msg) == '') {
        return false;
    }
    $('<figure class="u-message"><figcaption><div class="dot_green"></div><span>Me</span>' + d.getHours() + ':' + m + '</figcaption><p>' + msg + '</p></figure>').appendTo($('.right')).hide().show("fast");
    $('.body').animate({scrollTop:$('figure').last().offset().top}, 'slow');
    $('.sending-message textarea').val(null);
}

$(".sending-message button").click(function() {
    sendMess();
});
