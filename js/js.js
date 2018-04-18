$(document).ready(function () {

	$("#all").show(0, function () {
		$("#noscript").hide()
	})

	$(".mngmt-container").animate({
		left: '10px'
	});

	$(".concurs-titlu").animate({
		left: '10px'
	});

	$(".performante-con").animate({
		left: '10px'
	});


	var pathname = document.title;
	var str = pathname.charAt(0);

	switch (str) {

		case "M":
			$("#arrow").animate({
				left: '74'
			}, 0)
			$(".cell:nth-child(1)").mouseenter(function () {
				$("#arrow").animate({
					left: '74'
				}, 100)
			})

			$(".cell:nth-child(2)").mouseenter(function () {
				$("#arrow").animate({
					left: '242'
				}, 100)
			})

			$(".cell:nth-child(3)").mouseenter(function () {
				$("#arrow").animate({
					left: '408'
				}, 100)
			})

			$(".cell:nth-child(4)").mouseenter(function () {
				$("#arrow").animate({
					left: '576'
				}, 100)
			})

			$(".cell:nth-child(5)").mouseenter(function () {
				$("#arrow").animate({
					left: '738'
				}, 100)

			})

			$(".cell:nth-child(6)").mouseenter(function () {
				$("#arrow").animate({
					left: '908'
				}, 100)
			})

			$("#navbar").mouseleave(function () {
				$("#arrow").animate({
					left: '74'
				}, 100)
			})

			break;

		///////////////////////////////////////////////////////
		//////////////////////////////////////////////////////

		case "o":
			$("#arrow").animate({
				left: '242'
			}, 0)

			$(".cell:nth-child(1)").mouseenter(function () {
				$("#arrow").animate({
					left: '74'
				}, 100)
			})

			$(".cell:nth-child(2)").mouseenter(function () {
				$("#arrow").animate({
					left: '242'
				}, 100)
			})

			$(".cell:nth-child(3)").mouseenter(function () {
				$("#arrow").animate({
					left: '408'
				}, 100)

			})

			$(".cell:nth-child(4)").mouseenter(function () {
				$("#arrow").animate({
					left: '576'
				}, 100)
			})

			$(".cell:nth-child(5)").mouseenter(function () {
				$("#arrow").animate({
					left: '738'
				}, 100)
			})

			$(".cell:nth-child(6)").mouseenter(function () {
				$("#arrow").animate({
					left: '908'
				}, 100)
			})


			$("#navbar").mouseleave(function () {
				$("#arrow").animate({
					left: '242'
				}, 100)
			})

			break;

			//////////////////////////////////////////////////////
			/////////////////////////////////////////////////////

		case "h":

			$("#arrow").animate({
				left: '408'
			}, 0)

			$(".cell:nth-child(1)").mouseenter(function () {
				$("#arrow").animate({
					left: '74'
				}, 100)
			})

			$(".cell:nth-child(2)").mouseenter(function () {
				$("#arrow").animate({
					left: '242'
				}, 100)
			})


			$(".cell:nth-child(3)").mouseenter(function () {
				$("#arrow").animate({
					left: '408'
				}, 100)
			})


			$(".cell:nth-child(4)").mouseenter(function () {
				$("#arrow").animate({
					left: '576'
				}, 100)
			})

			$(".cell:nth-child(5)").mouseenter(function () {
				$("#arrow").animate({
					left: '738'
				}, 100)
			})

			$(".cell:nth-child(6)").mouseenter(function () {
				$("#arrow").animate({
					left: '908'
				}, 100)
			})


			$("#navbar").mouseleave(function () {
				$("#arrow").animate({
					left: '408'
				}, 100)
			})

			break;

		case "s":

			$("#arrow").animate({
				left: '576'
			}, 0)

			$(".cell:nth-child(1)").mouseenter(function () {
				$("#arrow").animate({
					left: '74'
				}, 100)
			})

			$(".cell:nth-child(2)").mouseenter(function () {
				$("#arrow").animate({
					left: '242'
				}, 100)
			})


			$(".cell:nth-child(3)").mouseenter(function () {
				$("#arrow").animate({
					left: '408'
				}, 100)
			})



			$(".cell:nth-child(4)").mouseenter(function () {
				$("#arrow").animate({
					left: '576'
				}, 100)
			})

			$(".cell:nth-child(5)").mouseenter(function () {
				$("#arrow").animate({
					left: '738'
				}, 100)
			})

			$(".cell:nth-child(6)").mouseenter(function () {
				$("#arrow").animate({
					left: '908'
				}, 100)
			})


			$("#navbar").mouseleave(function () {
				$("#arrow").animate({
					left: '576'
				}, 100)
			})

			break;


		case "g":

			$("#arrow").animate({
				left: '738'
			}, 0)

			$(".cell:nth-child(1)").mouseenter(function () {
				$("#arrow").animate({
					left: '74'
				}, 100)
			})

			$(".cell:nth-child(2)").mouseenter(function () {
				$("#arrow").animate({
					left: '242'
				}, 100)
			})

			$(".cell:nth-child(3)").mouseenter(function () {
				$("#arrow").animate({
					left: '408'
				}, 100)
			})

			$(".cell:nth-child(4)").mouseenter(function () {
				$("#arrow").animate({
					left: '576'
				}, 100)
			})

			$(".cell:nth-child(5)").mouseenter(function () {
				$("#arrow").animate({
					left: '738'
				}, 100)
			})

			$(".cell:nth-child(6)").mouseenter(function () {
				$("#arrow").animate({
					left: '908'
				}, 100)
			})


			$("#navbar").mouseleave(function () {
				$("#arrow").animate({
					left: '738'
				}, 100)
			})

			break;

		case "t":

			$("#arrow").animate({
				left: '908'
			}, 0)
			$(".cell:nth-child(1)").mouseenter(function () {
				$("#arrow").animate({
					left: '74'
				}, 100)
			})

			$(".cell:nth-child(2)").mouseenter(function () {
				$("#arrow").animate({
					left: '242'
				}, 100)
			})

			$(".cell:nth-child(3)").mouseenter(function () {
				$("#arrow").animate({
					left: '408'
				}, 100)
			})

			$(".cell:nth-child(4)").mouseenter(function () {
				$("#arrow").animate({
					left: '576'
				}, 100)
			})

			$(".cell:nth-child(5)").mouseenter(function () {
				$("#arrow").animate({
					left: '738'
				}, 100)
			})

			$(".cell:nth-child(6)").mouseenter(function () {
				$("#arrow").animate({
					left: '908'
				}, 100)
			})

			$("#navbar").mouseleave(function () {
				$("#arrow").animate({
					left: '908'
				}, 100)
			})

			break;

		default:

			$("#arrow").animate({
				left: '490'
			}, 0)
			$(".cell:nth-child(1)").mouseenter(function () {
				$("#arrow").animate({
					left: '74'
				}, 100)
			})

			$(".cell:nth-child(2)").mouseenter(function () {
				$("#arrow").animate({
					left: '242'
				}, 100)
			})

			$(".cell:nth-child(3)").mouseenter(function () {
				$("#arrow").animate({
					left: '408'
				}, 100)
			})

			$(".cell:nth-child(4)").mouseenter(function () {
				$("#arrow").animate({
					left: '576'
				}, 100)
			})

			$(".cell:nth-child(5)").mouseenter(function () {
				$("#arrow").animate({
					left: '738'
				}, 100)
			})

			$(".cell:nth-child(6)").mouseenter(function () {
				$("#arrow").animate({
					left: '908'
				}, 100)
			})

			$("#navbar").mouseleave(function () {
				$("#arrow").animate({
					left: '490'
				}, 100)
			})

			break;
	}

	$(function () {
		$('a[href*=#]:not([href=#])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 500);
					return false;
				}
			}
		});
	});

	$(".fancybox").fancybox();

});