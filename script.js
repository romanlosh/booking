jQuery(document).ready(function() {
	var
	sport_type = [$('#football'), $('#volleyball'), $('#bascketball'), $('#futsal'), $('#badminton')],
	containers_array = [$('#container_sport_type'), $('#container_date'), $('#container_court'), $('#container_time')];
// 
// 
// 
	$('.start-book').on('click', function() {
		$(this).fadeOut(300);
		setTimeout(function() {
			$('#booking').fadeIn(300);
		},400)
	});
// 
// 
// 
	$(sport_type).each(function() {
		$(this).on('click', function() {
			$("#sport-select").html($(this).html());
			$('.container_sport_type').fadeOut(500);
			setTimeout(function() {
				$('#date-panel').addClass('active');
				$('#select-panel h5').text('02. select date');
				$('.container_date').fadeIn(300);
			},600)
		})
	});
	$('.day_game').each(function() {
		$(this).on('click', function() {
			$('.container_date').fadeOut(500);
			$("#date-select").html($(this).attr('data-days-game')+" "+ $(this).html()+", October 2019");
			setTimeout(function() {
				$('#facility-panel').addClass('active');
				$('#select-panel h5').text('03. select courte');
				$('#courts_title').text($('#sport-select').text()+" courts");
				$('.container_court').fadeIn(300);
			},600)
		})
	});
	$('.select_courts').each(function() {
		$(this).on('click', function() {
			$('.container_court').fadeOut(500);
			$("#court-select").html("Court " + $(this).attr('data-court-number'));
			setTimeout(function() {
				$('#price-panel').addClass('active');
				$('#select-panel h5').text('04. select time');
				$('.container_time').fadeIn(300);
			},600)
		})
	});
	$('.select_time').each(function() {
		$(this).on('click', function() {
			$('.container_time').fadeOut(500);
			$('#price-select').html($(this).attr('data-price'));
			setTimeout(function() {
				$('#btn-svg').fadeIn(300);
			},600)
		})
	});
// 
// 
// 
	$('#sport-panel').on('click', function() {
		if ($(this).hasClass('active')) {
			$(containers_array).each(function() {
				$(this).fadeOut(500);
				$('#btn-svg').fadeOut(500);
				$('#courts_title').text($('#sport-select').text()+" courts");
				setTimeout(function() {
					$('#container_sport_type').fadeIn();
					$('#select-panel h5').text('01. select sport');
				},600)
			});
		}
	});
	$('#date-panel').on('click', function() {
		if ($(this).hasClass('active')) {
			$(containers_array).each(function() {
				$(this).fadeOut(500);
				$('#btn-svg').fadeOut(500);
				$('#courts_title').text($('#sport-select').text()+" courts");
				setTimeout(function() {
					$('#container_date').fadeIn();
					$('#select-panel h5').text('02. select date');
				},600)
			});
		}
	});
	$('#facility-panel').on('click', function() {
		if ($(this).hasClass('active')) {
			$(containers_array).each(function() {
				$(this).fadeOut(500);
				$('#btn-svg').fadeOut(500);
				$('#courts_title').text($('#sport-select').text()+" courts");
				setTimeout(function() {
					$('#container_court').fadeIn();
					$('#select-panel h5').text('03. select courte');
				},600)
			});
		}
	});
	$('#price-panel').on('click', function() {
		if ($(this).hasClass('active')) {
			$(containers_array).each(function() {
				$(this).fadeOut(500);
				$('#btn-svg').fadeOut(500);
				$('#courts_title').text($('#sport-select').text()+" courts");
				setTimeout(function() {
					$('#container_time').fadeIn();
					$('#select-panel h5').text('04. select time');
				},600)
			});
		}
	});
// 
// 
// 
var button = document.querySelector('button');
var container = document.querySelector('.container-svg');
var checkmark = document.querySelector('svg');
var className = "animate";
button.addEventListener('click', function(){
  if (!checkmark.classList.contains(className)) {
    checkmark.classList.add(className);
    $('#booking').css('pointer-events', 'none');
    setTimeout(function(){      
        checkmark.classList.remove(className);
        $('#booking').fadeOut(1000);
    }, 1700);  
  } 
});








})