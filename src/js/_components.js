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

//collapse-sidebar
$('#btn-collapse-sidebar').click(function(){
    $(this).toggleClass('collapse');
    $('.lc-sidebar').toggleClass('collapse');
    $('.page__body_lc').toggleClass('collapse');
    $('.btn_money').toggleClass('collapse');
    $('.user-card').toggleClass('collapse');
    $('.nav-sidebar').toggleClass('collapse');
});

//burger
$('.burger').click(function(){
    $(this).toggleClass('active');
    $('.lc-sidebar__user-logo-mob').toggleClass('hidden');
    $('.lc-sidebar').toggleClass('active-mob');
    $('.lc-sidebar__content').toggleClass('active-mob');
});