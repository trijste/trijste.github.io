// external js: isotope.pkgd.js
// init Isotope
var $grid = $('.grid').isotope({
	itemSelector: '.content',
	layoutMode: 'masonry',
	// fade in from bottom
	visibleStyle: {
		opacity: 1,
		transform: 'translateY(0)',
	},
	hiddenStyle: {
		opacity: 0,
		transform: 'translateY(100px)',
	},
});
// store filter for each group
var filters = {};
$('.filters').on('click', '.button', function(event) {
	var $button = $(event.currentTarget);
	// get group key
	var $buttonGroup = $button.parents('.button-group');
	var filterGroup = $buttonGroup.attr('data-filter-group');
	// set filter for group
	filters[filterGroup] = $button.attr('data-filter');
	// combine filters
	var filterValue = concatValues(filters);
	// set filter for Isotope
	$grid.isotope({
		filter: filterValue
	});
});
// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
	var $buttonGroup = $(buttonGroup);
	$buttonGroup.on('click', 'button', function(event) {
		$buttonGroup.find('.is-checked').removeClass('is-checked');
		var $button = $(event.currentTarget);
		$button.addClass('is-checked');
	});
});
// flatten object by concatting values
function concatValues(obj) {
	var value = '';
	for (var prop in obj) {
		value += obj[prop];
	}
	return value;
}
//caption display code
$.featherlight.prototype.afterContent = function() {
  var caption = this.$currentTarget.find('img').attr('title');
  this.$instance.find('.caption').remove();
  $('<div class="caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
};