$(document).ready(function(){
    var i = 2;
    setInterval(function() {
        $('.display-image.prev').removeClass('prev');
        $('.display-image.view').addClass('prev');
        $('.display-image').removeClass('view');
        $('#image' + i).addClass('view');
        i += 1;
        if (i > 5) {
            i = 1;
        }
        console.log(i)
    }, 3000);
})

  



