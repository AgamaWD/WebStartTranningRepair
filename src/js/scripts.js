/*инициализация скрипта для анимаций*/
new WOW().init();

/*проверка загрузки сайта*/
$(document).ready(function() {

    /*валидация формы*/
    $('#offer-form').validate({

        rules: {

            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },

            phone: "required",
        },

        messages: {

            username: {
                required: "Это поле обязательно для ввода!",
                minlength: "Введите не менее 2х символов!",
                maxlength: "Введите не более 15ти символов!"
            },

            phone: "Это поле обязательно для ввода!"
        },

        errorClass: "invalid",

        errorElement: "div",

    });

    $('#brif-form').validate({

        rules: {

            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },

            phone: "required",
        },

        messages: {

            username: {
                required: "Это поле обязательно для ввода!",
                minlength: "Введите не менее 2х символов!",
                maxlength: "Введите не более 15ти символов!"
            },

            phone: "Это поле обязательно для ввода!"
        },

        errorClass: "invalid",

        errorElement:  "div",

    });

    /*обработка и отправка формы через Ajax*/
    $('#offer-form').on('sabmit', function(event) {
        event.preventDefault();
        $.ajax({
            url: 'php/forms.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(data) {
                $('.offer-success').html('Спасибо,' + data + '!' + '<br>' + 'Менеджер уже набирает Ваш номер!')
            },
        });
    });

    $('#brif-form').on('sabmit', function(event) {
        event.preventDefault();
        $.ajax({
            url: 'php/forms.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(data) {
                $('.brif-success').html('Спасибо,' + data + '!' + '<br>' + 'Менеджер уже набирает Ваш номер!')
            },
        });
    });

    /*маска для телефона*/
    $('.phone').mask("+7 (999) 999-99-99");

    /*слайдер в секции портфолио*/
    $('.portfolio-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.portfolio-arrows__left'),
        nextArrow: $('.portfolio-arrows__right'),
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]

    });
});
