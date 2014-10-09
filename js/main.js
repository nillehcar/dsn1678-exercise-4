var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper')
var $yellowSection = $('.yellow-section');
var $shuttle = $('.shuttle');
var $shipSection = $('.ship-section');
var $ship1 = $('.ship1');
var $ship2 = $('.ship2');
var $ship3 = $('.ship3');
var $ship4 = $('.ship4')

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	
	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
});

$dipperSection.waypoint(function () {
	$dipper.addClass('js-dipper-fade');
}, { offset: '50%' });

$yellowSection.waypoint(function () {
	$shuttle.addClass('js-shuttle-fade');
}, { offset: '50%' });


$shipSection.waypoint(function () {
	$ship1.addClass('js-ship-fade');
	$ship2.addClass('js-ship-fade');
	$ship3.addClass('js-ship-fade');
	$ship4.addClass('js-ship-fade');
}, { offset: '50%' });

