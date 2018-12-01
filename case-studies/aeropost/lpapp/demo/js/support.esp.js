// Page support js EDITED: 11/5/2014
/********** Bootstrap IE Support  **********/
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
        document.createTextNode(
            '@-ms-viewport{width:auto!important}'
        )
    )
    document.querySelector('head').appendChild(msViewportStyle)
}
/*************** End Bootstrap IE Support  ***************/

/*************** Bootstrap Andriod Support  ***************/
$(function() {
        var nua = navigator.userAgent
        var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
        if (isAndroid) {
            $('select.form-control').removeClass('form-control').css('width', '100%')
        }
    })
    /*************** End Bootstrap Andriod Support  ***************/

/*************** Bootstrap Navbar Scrollspy  ***************/
// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
/*************** End Bootstrap Navbar Scrollspy  ***************/

/*************** Terms and Conditions Popup  ***************/
$('#terms_eng').click(function(event) {
    event.preventDefault();
    window.open($(this).attr("href"), "popupWindow", "width=600,height=600,scrollbars=yes");
});
/*************** End Terms and Conditions Popup  ***************/

/*************** Bootstrap Carousel  ***************/
$('.carousel').carousel({
        interval: 5000 //changes the speed
    })
/*************** End Bootstrap Carousel  ***************/

/*************** Owl Carousel  ***************/
$(document).ready(function() {
 
  $("#ebayFeed").owlCarousel({
 
      autoPlay: 5000, //Set AutoPlay to 3 seconds
      items : 5,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,3],
      itemsTablet : [768,2],
      itemsMobile : [479,1],
      navigation : true,
      navigationText : ["&#8249;","&#8250;"],
      scrollPerPage : true,
      slideSpeed : 700,
      stopOnHover : true
 
  });
 
});
/*************** End Owl Carousel  ***************/

/*************** Script for padding-top  ***************/
// jQuery for page scrolling feature screens <=768
if (screen.width <= 768) {
    //Add padding-top to .content-4
    $('.content-4').css({
        "padding-top": "40px"
    });
}

// jQuery for page scrolling feature
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 900, 'easeInOutExpo');
        event.preventDefault();
        //Add padding-top to .content-4
        $('.content-4').css({
            "margin-top": "80px"
        });
    });
});
/*************** End Script for padding-top  ***************/

/*************** Script for Bottom Register Widget  ***************/
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 450) {
        $('.content-36').fadeIn();
    } else {
        $('.content-36').fadeOut();
    }
});
/*************** End Script for Bottom Register Widget  ***************/

/*************** Bootstrap Form Validator  ***************/
$(document).ready(function() {
    $('#form_registro').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                message: 'Su nombre no es valido',
                validators: {
                    notEmpty: {
                        message: 'Su nombre es requerido'
                    },
                    stringLength: {
                        min: 3,
                        max: 30,
                        message: 'Su nombre debe ser más de 2 y menos de 30 caracteres de longitud'
                    },
                    regexp: {
                        regexp: /^[a-z\s]+$/i,
                        message: 'Su nombre sólo puede consistir en caracteres alfabéticos'
                    }
                }
            },
            last_name: {
                message: 'Su apellido no es valido',
                validators: {
                    notEmpty: {
                        message: 'Su apellido es requerido'
                    },
                    stringLength: {
                        min: 3,
                        max: 40,
                        message: 'Su apellido debe ser más de 2 y menos de 40 caracteres de longitud'
                    },
                    regexp: {
                        regexp: /^[a-z\s]+$/i,
                        message: 'Su apellido sólo puede consistir en caracteres alfabéticos'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Su correo electrónico es requerido'
                    },
                    emailAddress: {
                        message: 'Su correo electrónico no es valido'
                    }
                }
            },
            entrega: {
                validators: {
                    notEmpty: {
                        message: 'Debe seleccionar opción de entrega'
                    }
                }
            },
            id_number: {
                validators: {
                    notEmpty: {
                        message: 'Su n&uacute;mero de identificaci&oacute;n es requerido'
                    }
                }
            },
            acepto_terminos: {
                validators: {
                    notEmpty: {
                        message: 'Debe aceptar t&eacute;rminos y condiciones'
                    }
                }
            } 
        }
    });
});
/*************** End Bootstrap Form Validator  ***************/