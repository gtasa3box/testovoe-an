//lang
$('.lang__selected').click(function(){
    $(this).toggleClass('active');
    $($(this).data("target")).stop().slideToggle();
});
