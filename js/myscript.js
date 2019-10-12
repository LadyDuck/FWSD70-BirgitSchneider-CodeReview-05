
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

	for (i = 0; i < movies.length; i++) {

	// if (i % 2 == 0) {
		$(".appendCard").append(`<div class = "card-deck mx-0">

							      <div class="card text-white my-4">
							        <div class="row no-gutters">
							          <div class="col-md-4 col-sm-12">
							            <img src=" ` + movies[i].image + `" class="card-img m-1" alt="A Star is Born">
							          </div>
							          <div class="col-md-8">
							            <div class="card-body">
							              <h5 class="card-title">`+ movies[i].name + `</h5>
							              <p class="card-text">` + movies[i].desc + `</p>

							                <span class = "counter bg-sucsess float-right mt-5"><p>0</p></span> 
                      						<button type="button" class="btn image-bg btn-width mt-5 float-right like">
                      						<h2 class="text-success">Like <span class="fas fa-thumbs-up text-success like-btn"></span>
                     						</button></h2>

							            </div>
						              </div>
						            </div>
						           </div>
	
									<div class="card text-white my-4">
							        <div class="row no-gutters">
							          <div class="col-md-4 col-sm-12">
							            <img src=" ` + movies[i+1].image + `" class="card-img m-1" alt="A Star is Born">
							          </div>
							          <div class="col-md-8">
							            <div class="card-body">
							              <h5 class="card-title">`+ movies[i+1].name + `</h5>
							              <p class="card-text">` + movies[i+1].desc + `</p>

							                <span class = "counter bg-sucsess float-right mt-5"><p>0</p></span> 
                      						<button type="button" class="btn image-bg btn-width mt-5 float-right like">
                      						<h2 class="text-success">Like <span class="fas fa-thumbs-up text-success like-btn"></span>
                     						</button></h2>

							            </div>
						              </div>
						            </div>
						           </div> `);

								}

				

		$(".like").on('click', function() {
		let y = $(this).find(".counter").text();
		y++
		console.log(y);
		$(this).parent().find(".counter").text(y);
	});











						});