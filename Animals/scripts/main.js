// 1
$('p:nth-child(2)').text("Animals Are Great!");
$('p:nth-child(2)').addClass("sub-head");

// 2
$('#logo').click( function(e) {
  $(this).css("background-image", "url('../img/logos/puppy.png')")
})

// 3
let div = $("<div></div>").addClass("cute-container");

for (let i = 6; i > 0; i--) {
  let cute = $("<div></div>").addClass("cute");
  $('body').append(cute);
}

// 4
