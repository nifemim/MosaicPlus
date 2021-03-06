// Hello.
//
// This is The Scripts used for Mosaic+ Main Page
//
//

function main() {

	(function () {
		'use strict';
		
		/* ===================================
		 Show data team data
		 ===================================== */
		function showTeamData(teamRactive) {
			teamRactive.set({team: teamData});
		}
		

		/* ==============================================
  	Testimonial Slider
  	=============================================== */

		$('a.page-scroll').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - 40
					}, 900);
					return false;
				}
			}
		});

		/*====================================
		Show Menu on Book
		======================================*/
		$(window).bind('scroll', function () {
			var navHeight = $(window).height() - 100;
			if ($(window).scrollTop() > navHeight) {
				$('.navbar-default').addClass('on');
			} else {
				$('.navbar-default').removeClass('on');
			}
		});

		$('body').scrollspy({
			target: '.navbar-default',
			offset: 80
		})

		$(document).ready(function () {
			var teamRactive = new Ractive({
				el: 'tf-team',
				template: '#team-template'
			});

			//show data for team
			showTeamData(teamRactive);
			$("#team").owlCarousel({

				navigation: false, // Show next and prev buttons
				slideSpeed: 300,
				paginationSpeed: 400,
				autoHeight: true,
				itemsCustom: [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 4],
				        [1400, 4],
				        [1600, 4]
				      ],
			});
            
            //scrolling script
            $(".scroll-main").onepage_scroll();

		});

		/*====================================
    Portfolio Isotope Filter
    ======================================*/
		$(window).load(function () {
			var $container = $('#lightbox');
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			$('.cat a').click(function () {
				$('.cat .active').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});
				return false;
			});

		});

	}());


}
main();