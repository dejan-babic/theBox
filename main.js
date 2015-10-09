$(document).ready(function(){

    $('#square').hide();

    //$( "*", document.body ).click(function( event ) {
    //    var offset = $( this ).offset();
    //    event.stopPropagation();
    //    $( "#result" ).text( this.tagName +
    //        " coords ( " + offset.left + ", " + offset.top + " )" );
    //});

    function render(val){
        console.log(val);
        $('#square').css({
           "width" : val.width,
            "height": val.height,
            "background" : val.background,
            "left": val.left + "%",
            "top": val.top + "%",
            "textAlign": val.textAlign,
            "border": val.border,
            "marginLeft": val.marginLeft,
            "marginTop": val.marginTop,
            "position": val.position
        });
    }


    $('#btn').on('click', function(){

        $.ajax({
            url: 'http://demo6147751.mockable.io/ninosla',
            method: 'GET',
            dataType: 'json',
            success: function(data){
                render(data);

                    $('#btn').hide();
                    $('#square').show();

            },
            error: function(){
                $('#h1').html("Fatal Error! 404 - Page Not Found!");
                }
        })
    });

    $(document).keydown(function(e){

        var offset = $( "#square" ).offset();

        switch (e.which){
            case 37:    //left arrow key
                if(offset.left > 10){ // >10
                    $('#square').finish().animate({
                        left: "-=50"
                    })
                }
                else if(offset.left === 10){
                    $('#square').finish().animate({
                        left: "-=10"
                    })
                }
                else{
                    $('#square').finish().animate({
                        left: "+=50"
                    });
                }
                break;
            case 38:    //up arrow key
                if(offset.top > 28){
                    $('#square').finish().animate({
                        top: "-=50"
                    })
                }
                else if(offset.top === 27.5){
                    $('#square').finish().animate({
                        top: "-=21.5"
                    })
                }
                else{
                    $('#square').finish().animate({
                        top: "+=50"
                    });
                }
                break;
            case 39:    //right arrow key
                if(offset.left < 1610){
                    $('#square').finish().animate({
                        left: "+=50"
                    })
                }
                else if(offset.left === 1610){
                    $('#square').finish().animate({
                        left: "+=4"
                    })
                }
                else{
                    $('#square').finish().animate({
                        left: "-=50"
                    });
                }
                break;
            case 40:    //bottom arrow key
                if(offset.top < 626){
                    $('#square').finish().animate({
                        top: "+=50"
                    })
                }
                else if(offset.top === 627.5){
                    $('#square').finish().animate({
                        top: "+=20"
                    })
                }
                else{
                    $('#square').finish().animate({
                        top: "-=50"
                    });
                }
                break;
        }

    });
});

