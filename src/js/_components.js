//lang
$('.lang__selected').click(function(){
    $(this).toggleClass('active');
    $($(this).data("target")).stop().slideToggle();
});

//promocodes
$('#promo-btn').click(function(){
    event.preventDefault();
    $(this).toggleClass('active');
    $($(this).data("target")).addClass('active');
    $('#void-block').addClass('hidden');
});