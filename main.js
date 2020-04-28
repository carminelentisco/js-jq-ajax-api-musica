$(document).ready(function() {
	
	// Setup
	var cdContainer =  $('.cds-container');
	var source = $('#cd-template').html();
	var template = Handlebars.compile(source);
	//console.log(source);

	$.ajax({
		url: "https://flynn.boolean.careers/exercises/api/array/music",
		data: "GET",
		success: function (data) {
			for ( var i = 0; i < data.response.length; i++ ) {
				var poster = data.response[i].poster;
				var title = data.response[i].title;
				var author = data.response[i].author;
				var year = data.response[i].year;
				var cd = {
					poster: poster,
					title: title,
					author: author,
					year: year
				};
				cdContainer.append(template(cd))
			}	
		}
	});
});