

$(document).ready(function(){

    // Controla a interação do botão Seguir para o Topo

    jQuery(window).load(function() {
        jQuery("#backtotop").hide().removeAttr("href");
        if (jQuery(window).scrollTop() != "0")
            jQuery("#backtotop").fadeIn("slow")
        var scrollDiv = jQuery("#backtotop");
        jQuery(window).scroll(function(){
            if (jQuery(window).scrollTop() == "0")
                jQuery(scrollDiv).fadeOut("slow")
            else
                jQuery(scrollDiv).fadeIn("slow")
        });
    });

    $('#backtotop').click(function() {
        $('body,html').animate({scrollTop:0},2500,"easeOutQuart");
    });


    /**
     * Corrige a altura da caixa de elementos HTML para se enquadrar no grid
     * @author Vinicius Braga
     * @link
     */

    $.fn.fixHeight = function(){

        $.each( $(this), function() {
            var new_box_height = 30 * Math.ceil( $(this).outerHeight() / 30 ) ;
            $(this).css("min-height", new_box_height );
            // console.log( 'new_box_height: ' + new_box_height );
        });

    };

    // Aplica a correção do grid para elementos da página.
    setTimeout( function(){
        $('.main figure').fixHeight();
        $( ".crayon-syntax" ).wrap( "<div class='frame-crayon-syntax'></div>" );
        $('.frame-crayon-syntax').fixHeight();
        } , 1000);

    // Aplica a correção do grid para a área de comentários depois de 5s.
    setTimeout( function(){
        $('#frame-comment').fixHeight();
        } , 5000);


});
