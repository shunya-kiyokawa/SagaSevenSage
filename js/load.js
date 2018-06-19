$(function() {
    var h = $(window).height();
    // $('#contents').css('display', 'none');
    $('#loader-bg ,#loader').height(h).css('display', 'block');
});
$(window).on("load", function() {
    $('#loader-bg').delay(1000).fadeOut(600);
    $('#loader').delay(1000).fadeOut(600);
    $('#contents').css('display', 'block');
});