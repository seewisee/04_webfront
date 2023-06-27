// show(), hide()

$("#show-btn").on("click", function() { 
    $("#img1").show(500); // 1000ms == 1s
})

$("#hide-btn").on("click", function() {
    $("#img1").hide(500); 
})

// fadeIn() , fadeOut()

$("#fadeIn-btn").on("click", function() { 
    $("#img2").fadeIn(500); // 1000ms == 1s
})

$("#fadeOut-btn").on("click", function() {
    $("#img2").fadeOut(500); 
})
