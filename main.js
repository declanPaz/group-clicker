///!!!!!!! THE VALUES THAT I AM TRYING TO ACCESS ARE BEING DELETED WHEN I SET
//					THE DETACHED ARRAY TO NULL IN THE APPENDER FUNCTION

$(document).ready(init);

var aMax = 13;
var inputVal = 0;
var inputName = "";
var $detached = [];
var aSum = 0;
var bSum = 0;
var cSum = 0;

var appenderList = {};


function init() {
	$('button').on('click',addCircles);
	$('.unsorted').on('click','.circle', detach);
	$('.unsorted').on('click','.circle', pick);

	$('.a').on('click',appender);
	$('.b').on('click',appender);
	$('.c').on('click',appender);

	// $('.circle').on('click',counter);
}
//adds circles from button click;
function addCircles () {
	inputVal = $('#numToAdd').val();
	inputName = $('#personToAdd').val();
	for (var i = 1; i<Number(inputVal)+1; i++) {
		var $circle = $('<div>').addClass('circle').attr('id',i).text(inputName);
		$('.unsorted').append($circle);
	}
	$('#numToAdd').val("");
}
//adds a highlighted class when picked;
function pick(event) {
	event.stopPropagation();
	var $this = $(this);
	$this.addClass('picked');
}
//detaches and holds ONE circle at a time;
function detach(event) {
	event.stopPropagation;
	var $this = $(this);
	if ($this.hasClass('picked') && $detached.length==0) {
		$detached = $this.detach();
	}
	else if ($this.hasClass('picked') ){
		$('h3.errors').html("<p>You already are holding one circle - please sort before picking another</p>");
	}
}
function appender (event) {
	event.stopPropagation;
	var $this = $(this);
	$this.append($detached).addClass($this.attr('class'));
	console.log
	console.log("hiya", $detached.attr('id'));
	// $detached = [];
	// counter();
	// $('.a').each(function(){
	// 	var i = 0;
	// 	aSum[i] += $this.attr('id');
	// 	console.log(aSum);
	// 	i++;
	// });
	console.log($this);
	$('.a').each(function(){
		var i = 0;
		aSum[i] += $this.attr('id');
		console.log($(this).attr('id'));
		console.log(aSum[i]);
		i++;
	});
}

 // function counter ($this) {
	$('.a').each(function(){
		var i = 0;
		aSum[i] += $this.attr('id');
		console.log(aSum);
		i++;
	});
 // }






