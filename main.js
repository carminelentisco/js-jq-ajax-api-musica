$(document).ready(function() {
	
	// Setup
	var cdContainer =  $('.cds-container');
	var source = $('#cd-template').html();
	var template = Handlebars.compile(source);
	
	$.ajax({
		url: "https://flynn.boolean.careers/exercises/api/array/music",
		data: "GET",
		success: function (data) {
			for ( var i = 0; i < data.response.length; i++ ) {
				var poster = data.response[i].poster;
				var title = data.response[i].title;
				var author = data.response[i].author;
				var year = data.response[i].year;
				var genres = data.response[i].genre.toLowerCase(); 
				var cd = {
					poster,
					title,
					author,
					year,
					genres
				};
				
				cdContainer.append(template(cd))
			}	
		},
		error: function() {
			console.log('Ops, si è verificato un errore');
		}
	});

	$('#genres').change(function () { 
		
		var genre = $(this).val();

		if ( genre === 'all') {
			$('.cd').show();
		} else {
			$('.cd').hide();
			$('.cd.' + genre).show();	
		}
	});
	 
}); // End script page