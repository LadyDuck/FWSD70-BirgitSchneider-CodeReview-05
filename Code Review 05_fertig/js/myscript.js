$(document).ready(function() {
	console.log("hallo");

	// myFunction();

	// let card = $(".appendCard");
	// card.after("<h1>Test</h1>");


	// function myFunction() {
	var i = 0;
	var cols = 2;
	var rows = movies.length/2;
	console.log(rows);

//	for (i = 0; i < 3; i++) {
	// if (i % 2 == 0) {
	//	$(".appendCard").append(`<div class = "card-deck mx-0">`)
			//for (j = 1; j<= 2; j++) {
      for(i in movies){

				$("#movies").append(`<div class="movie text-white col-md-6">
                            			<div class="movie_innen row">
									          <div class="col-md-4 col-sm-12 ">
									            <img src=" ` + movies[i].image + `" class="card-img m-1" alt="A Star is Born">
									          </div>
									          <div class="col-md-8">
									            <div class="card-body">
									              <h5 class="card-title">`+ movies[i].name + `</h5>
									              <p class="card-text">` + movies[i].desc + `</p>
									                <div class=""><button type="button" class="btn image-bg btn-width mt-5"><span class = "text-success font-weight-bold mr-2 mb-0 h5 img-bg like_movie">Like</span><img class="image-bg pb-2" src="img/like_icon.png" alt="like" width = "40%"></button>
									                <span class = "counter bg-sucsess float-right mt-5"><p class="like_counter">0</p></span>
                                  				</div>
									          </div>
								            </div>
                            			 </div>
								        </div>`);
									
                }

	$('.like_movie').click(function(){
	  var count = parseInt($(this).parent().parent().find('.like_counter').text());
	  count = count + 1;
	  $(this).parent().parent().find('.like_counter').text(count);
	});

});

							