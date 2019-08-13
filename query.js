//1.Apply css border of (1px solid green) to all elements containing attribute name ‘marlabs’
jQuery(document).ready(function(){ //is needed to perform this function only after DOM has been rendered
  jQuery("p[name*= 'marlabs']").css('border', '1px solid green');
  [name='marlabs']
});

//2.Apply css border of (1px solid green) elements containing attribute name ONLY ‘marlabs’
//jQuery("p[name|= 'marlabs']").css('border', '1px solid green');

//3.Apply css border of (1px solid green) to all elements starting with attribute name ‘marlabs’
//jQuery("p[name^= 'marlabs']").css('border', '1px solid green');

//4.Apply css border of (1px solid green) to all elements ending with attribute name ‘marlabs’
//jQuery("p[name$= 'marlabs']").css('border', '1px solid green');


//5.Apply css border of (1px solid green) to all elements containing WORD ‘marlabs’
//jQuery("p[name~= 'marlabs']").css('border', '1px solid green');

//6.Apply css border of (1px solid green) to the last element in div
//jQuery("div p:last-child").css('border', '1px solid green');

// Give one examples of each that prints ‘Hello marlabs’

// .on()
// .one()
// .trigger()
// .scroll()
// .resize()
// .hover()
// .keypress()
// .keydown()
// .keyup()
// .dblclick()

// 1 .on()
// jQuery(document).ready(function(){
// $("#target").on("click",function(){
//   console.log($(this).text());
// });
//
// });

//2 .one()-the event will occur only once
// jQuery(document).ready(function(){
// $("#target").one("click",function(){
//   console.log($(this).text());
// });
//
// });

//3 .trigger()
// jQuery(document).ready(function(){
// $("#target").on("click",function(){
//   alert($(this).text());
// });
// $("#target").trigger("click");
// });

//4 .scroll()
jQuery(document).ready(function(){
  $("#scroll").scroll(function(){
    console.log($(this).text())

});
});

//5 .resize()

jQuery(document).ready(function(){
  $(window).resize(function(){
    $("#resize").text();
  });
});

//6 .hover
jQuery(document).ready(function(){
  $("#hover").hover(function(){
    alert("Hello Marlabs");
  });
});

//7 .keypress()
jQuery(document).ready(function(){

$( document ).keypress(function() {
  console.log( "Hello Marlabs" );
});
});

//8 .keydown()
jQuery(document).ready(function(){

$( document ).keydown(function() {
  console.log( "Hello Marlabs key down" );
});
});

//9 .keyup()
jQuery(document).ready(function(){

$( document ).keyup(function() {
  console.log( "Hello Marlabs key up" );
});
});

//10 .dbclick()
//jQuery(document).ready(function(){

//$("button" ).click(function() {
  //console.log("double-clicked");
//});
//});

$(document).ready(function() {
$("p").dblclick(function(){
$(this).text("Hello Marlabs");

    });
  });

//get call
var request= newXMLHttpRequest();
request.open('GET', "https://pokeapi.co/api/v2/pokemon/ditto", true)

request.onload= function(){
  var data= JSON.parse(this.response);
  if(request.status>=200 && request.status= 400)

}
}

request.send();
