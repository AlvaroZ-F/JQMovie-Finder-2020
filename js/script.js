// OMDb API KEY: f187dec7

$(document).ready(() => {
	$('#findMovie').click(function(){
		var searchText = $('#searchText').val();
		var currentPage = 1;

		var win = $(window);
		loadNext(searchText, currentPage);
		win.scroll(function() {
			if ($(document).height() - win.height() == win.scrollTop()) {
				$('#loading').show();
				$('#loading').hide();
				currentPage++;
				loadNext(searchText, currentPage);
			}
		});
	});
});




function loadNext(searchText, currentPage) {
	return getMovies(searchText, currentPage);
}

function getMovies(searchText, page=1) {
	$('#service').append("<h2 id='loading'>Loading. . .</h2>");
	$.getJSON("http://www.omdbapi.com/?s="+searchText+"&apikey=f187dec7&page="+page, function(result) {
		var output = '<div class="container"><div class="row">';
		$.each(result.Search, function(i, field) {
			output += '<div class="col-lg-4" data-toggle="modal" data-target="#modalDescription" onClick=getMoreDetails("'+field.imdbID+'")><div class="single-service">'
			output += '<div class="thumb"><img class="img-fluid" src="'+field.Poster+'" alt=""></div>';
			output += '<div class="detail"><h2>'+field.Title+'</h2>';
			output += '<p>Date of release: '+field.Year+'</p></div></div></div>';
		});
		output += '</div></div>';
		$('#service').append(output);
	});
	$('#loading').hide();
}

function getMoreDetails(idMovie) {
	// Here we'll clean up the modal content to fill it with new information
	$('.modal-Boxes').html('');
	$.getJSON('http://www.omdbapi.com/?i='+idMovie+'&apikey=f187dec7', function(result) {
		$.each(result, function(field){
			$('#directorBox').append(field.Director);
			$('#actorsBox').append(field.Actors);
			$('#genreBox').append(field.Genre);
			$('#languageBox').append(field.Language);
			$('#countryBox').append(field.Country);
			$('#releasedBox').append(field.Released);
			$('#ratingBox').append(field.Ratings);
			$('#plotBox').append(field.Plot);
			$('.desc-modal-Title').append(field.Title);
			$('.div1').append('<img class="img-fluid" src="'+field.Poster+'" alt="">');
		});
	});
	/*
	$('#')
	$.getJSON("http://www.omdbapi.com/?i="+idMovie+"&apikey=f187dec7", function(result) {
		var output = '<div class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-body"><div class="container-fluid">';
			$.each(result, function(field){
				output += '<div class="row"><h2>Title: '+field.Title+'</h2></div>';
				output += '<div class="row">Release date: <p>'+field.Released+'</p></div>';
				output += '<div class="row">Rated: <p>'+field.Rated+'</p></div>';
				output += '<div class="row">Genre: <p>'+field.Genre+'</p></div>';
				output += '<div class="row">Director: <p>'+field.Director+'</p></div>';
				output += '<div class="row">Actors: <p>'+field.Actors+'</p></div>';
				output += '<div class="row">Plot: <p>'+field.Plot+'</p></div>';
				output += '<div class="row">Language: <p>'+field.Language+'</p></div>';
				output += '<div class="row">Country: <p>'+field.Country+'</p></div>';
				output += '<div class="row">Ratings: <p>'+field.Ratings+'</p></div>';
			});
		output += '</div></div></div></div></div>';
		$('#service').append(output);
	});
	*/
}