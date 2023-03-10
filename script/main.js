/*Header-scroll*/

$(document).ready(function () {
    const headerOffset = $('#header__navigation').offset().top;
    $(window).scroll(function () {
        const scrolled = $(this).scrollTop();
        if (scrolled > headerOffset) {
            $('#header').addClass('header-fixed');
        } else if (scrolled < headerOffset) {
            $('#header').removeClass('header-fixed');
        }
    });

});

/*hamburger*/

$('.header__burger').on('click', function () {
    $('.header__nav').toggleClass('active');
});



/*footer-menu*/

$('.footer__nav-link-shop').on('click', function (e) {
    $('.sub-menu').toggleClass('active');
    e.preventDefault();
});

/*radio-button - product*/

$('.product__size-item').click(function(){
    $('.product__size-item').removeClass('active');
    $(this).addClass('active');
})

$('.product__color-item').click(function () {
    $('.product__color-item').removeClass('active');
    $(this).addClass('active');
});


/*Tabs*/


$('.tab__btn').click(function () {
    const id = $(this).attr('data-btn'),
        content = $('.product__card.shop[data-btn="' + id + '"]');
    const all = $(this).attr('data-all'),
        contents = $('.product__card.shop[data-all="' + all + '"]');
        
        $('.tab__btn.active').removeClass('active');
        $(this).addClass('active');

        if (id) {
            $('.product__card.shop.active').removeClass('active');
            content.addClass('active');
        }
        else {
            $('.product__card.shop.active').removeClass('active');
            contents.addClass('active');
    }

});

/*Modal window*/

// $(document).ready(function () {

//     $('.header__tel-btn').on('click', () => {
//         $('#modal').addClass('active');
//         $('body').addClass('active');
//     })

//     const closeModal = () => {
//         $('body').removeClass('active');
//         $('#modal').removeClass('active');
//     }

//     $('#modal-overlay').on('click', () => {
//         closeModal();
//     })

//     $('#close').on('click', () => {
//         closeModal();
//     });

    /*?????????? ???????????????????? ????????????*/

    // $('.form-about__btn').on('click', function (e) {
    //     $('.contacts__proof').addClass('active');
    //     e.preventDefault();
    // })



// ?????????????????? ????????

const openModal = document.querySelector('.header__tel-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal-overlay');
const closes = document.querySelector('.close');
const modalClose = document.querySelector('.modal_btn');
const modalWindow = document.querySelector('.modal-window');
const modalWindow2 = document.querySelector('.modal-window2');

openModal.addEventListener('click', () => {
    modal.classList.add('active');
})

const closeModal = () => {
    modal.classList.remove('active');
}
overlay.addEventListener('click', closeModal);
closes.addEventListener('click', closeModal);

function closeWindow() {
    modalWindow2.classList.add('active');
    modalWindow.style.display = 'none';
}

    /*Validation ans send form*/

$(document).ready(function () {
    $('[data-submit]').on('click', function (e) {
        e.preventDefault();
        $(this).parent('form').submit();
    })
    $.validator.addMethod('regex', function (value, element, regexp) {
        let regExp = new RegExp(regexp);
        return this.optional(element) || regExp.test(value)
    }, 'please check your input'
    );


    /*Validation and output messages*/

    function valEl(el) {
        el.validate({
            rules: {
                name: {
                    required: true,
                    regex: "[A-Za-z??-????-??]{1,32}"
                },
                email: {
                    required: true,
                    email: true
                },
                tel: {
                    required: true,
                    digits: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                },
                country: {
                    required: true
                },
                city: {
                    required: true
                },
                street: {
                    required: true
                },
                house: {
                    required: true,
                    digits: true
                },
                flat: {
                    required: false
                }

            },
            messages: {
                name: {
                    required: '???????? ???????????????????????? ?????? ????????????????????',
                    name: '?????????????? ?????? ??????????????????'
                },
                email: {
                    required: '???????? ???????????????????????? ?????? ????????????????????',
                    email: '?????????????? email ??????????????????'
                },
                tel: {
                    required: '???????? ???????????????????????? ?????? ????????????????????',
                    regex: '?????????????? ???????????? ?????????? ?????????? +-() ??????????????'
                },
                country: {
                    required: '???????? ???????????????????????? ?????? ????????????????????',
                },
                city: {
                    required: '???????? ???????????????????????? ?????? ????????????????????',
                },
                street: {
                    required: '???????? ???????????????????????? ?????? ????????????????????',
                },
                house: {
                    required: '???????? ???????????????????????? ?????? ????????????????????',
                }
            },

            /*ID Form validation */
            submitHandler: function (form) {
                let $form = $(form);
                let $formId = $(form).attr('id');
                
                switch ($formId) {
                    case 'form-order__modal':
                        $.ajax({
                            type: 'POST',
                            url: $form.attr('action'),
                            data: $form.serialize(),
                        })
                            .done(function () {
                                console.log('Success');
                            })
                            .fail(function () {
                                console.log('Fail');
                            })
                            .always(function () {
                                console.log('Always');
                                setTimeout(function () {
                                    closeWindow(); // ?????????????????? 2 ????????, ?????????????????? 1-??
                                    $form.trigger('reset');
                                }, 1100);
                                $('.modal__btn').on('click', function () {
                                    closeModal(); // ?????????????????? ?????? ??????????????
                                });
                            });
                        break;
                    case 'form-basket':
                        $.ajax({
                            type: 'POST',
                            url: $form.attr('action'),
                            data: $form.serialize(),
                        })
                            .done(function () {
                                console.log('Success');
                            })
                            .fail(function () {
                                console.log('Fail');
                            })
                            .always(function () {
                                console.log('Always');
                                setTimeout(function () {
                                window.location.href = 'order.html'
                                }, 1100);
                            });
                        break;
                    case 'form-order__wrap':
                        $.ajax({
                            type: 'POST',
                            url: $form.attr('action'),
                            data: $form.serialize(),
                        })
                            .done(function () {
                                console.log('Success');
                            })
                            .fail(function () {
                                console.log('Fail');
                            })
                            .always(function () {
                                console.log('Always');
                                setTimeout(function () {
                                    window.location.href = 'confirm.html';
                                    $form.trigger('reset');
                                }, 1100);
                            });
                        break;
                    case 'form-about':
                        $.ajax({
                            type: 'POST',
                            url: $form.attr('action'),
                            data: $form.serialize(),
                        })
                            .done(function () {
                                console.log('Success');
                            })
                            .fail(function () {
                                console.log('Fail');
                            })
                            .always(function () {
                                console.log('Always');
                                setTimeout(function () {
                                    $('.contacts__proof').addClass('active');
                                    $form.trigger('reset');

                                }, 1100);
                            });
                        break;
                }
                return false;
            }
        })

    }

    $('.js-form').each(function () {
        valEl($(this));
    });


})
//                                    window.location.href = 'confirm.html';
