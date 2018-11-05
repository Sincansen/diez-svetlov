$(document).ready(function(){

	var slickIsActive = false;

	checkSlider();

	$(window).on('resize', function(){
		checkSlider();
	});

	function checkSlider(){
		if( $(window).width() < 1200 ) {
			if( slickIsActive === false ) {
				$('#slider').slick({
					autoplay: true,
				});
				slickIsActive = true;
			}
		}
		else {
			if( slickIsActive === true ) {
				$('#slider').slick('unslick');
				slickIsActive = false;
			}

		}
	}
	$('.nav-toggle>span').on('click', function(){
		if($(this).data('shown') != 'true'){
			$('.main-nav__list', '.main-nav').show();
			$(this).data('shown', 'true')
		} else {
			$('.main-nav__list', '.main-nav').hide();
			$(this).data('shown', 'false')
		}

	});




ymaps.ready(function () {
    var myMap = new ymaps.Map('welcome_map', {
            center: [59.94199306418127,30.279423499999996],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),


        myPlacemarkWithContent = new ymaps.Placemark([59.94199306418127,30.279423499999996], {
            hintContent: 'Собственный значок метки с контентом',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/geotag.png',
            // Размеры метки.
            iconImageSize: [38, 49],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-19, -12],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent);
});
});