$(document).ready(function(){

    $('#square').hide();

    //$( "*", document.body ).click(function( event ) {
    //    var offset = $( this ).offset();
    //    event.stopPropagation();
    //    $( "#result" ).text( this.tagName +
    //        " coords ( " + offset.left + ", " + offset.top + " )" );
    //});

    function render(val){
        if(val){
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
        }else{
            val = defValue();
            console.log(val);
            /*$('#square').css({
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
            });*/
        }
    }

    function defValue(){
       return {
            "id": "square",
            "position": "absolute",
            "left": 50 + "%",
            "top": 50 + "%",
            "textAlign": "center",
            "border": 3 + "px solid black",
            "width":300 + "px",
            "height":300 + "px",
            "marginLeft": -150 + "px",
            "marginTop": -150 + "px",
            "background": "red"
       }
    }

    function defaultSquareValues(){
        $('#square').css({
            "width" : 300 + "px",
            "height": 300 + "px",
            "background": "red",
            "left": 50 + "%",
            "top": 50 + "%",
            "textAlign": "center",
            "border": 3 + "px solid black",
            "marginLeft": -150 + "px",
            "marginTop": -150 + "px",
            "position": "absolute"
        })
    }

    function errorMsg(){
        $('#h1').html("Fatal Error! 404 - API Not Reachable!");
    }


    $('#btn').on('click', function(){

        $.ajax({
            url: 'http://demo6147751.mockable.io/ninoslav',
            method: 'GET',
            dataType: 'json',
            success: function(val){
                render(val);

                    $('#btn').hide();
                    $('#square').show();

            },
            error: function(){
                errorMsg();
            }

        })
    });

    function arrows(e){
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
    }

    $(document).keydown(function(e){

        arrows(e);
    });
});

