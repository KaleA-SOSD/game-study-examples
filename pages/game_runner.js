let started = false

$(function () {
    $("#start").on("click", function(){
        if (!started)
        {
            started = true
            $("#game")[0].src = "game_data/triplethedefencebudget-rensoft/index.html"
            $("#start").text("Enter fullscreen");
        }
        else 
        {
            $("#game")[0].requestFullscreen();
        }

    })
})