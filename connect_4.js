// $(document).ready(function(){
// var tabledata=$('button');
// tabledata.eq(0).addEventListener('click',callerofcheckbottom());
// // document.write(tabledata.eq(0).text())
// // document.write(tabledata.eq(0).text());
// //fifteen cells of the table
// // tabledata.addEventListener('click',callerofcheckbottom());
// function callerofcheckbottom(){
// // while(true){
//  for (i=0;i<=4;i++){
//      tabledata.eq(i).addEventListener('click',checkbottom(i+2));
//      tabledata.eq(i+5).addEventListener('click',checkbottom(i));
//      tabledata.eq(i+10).addEventListener('click',checkbottom(i));
//      tabledata.eq(i+15).addEventListener('click',checkbottom(i));
//
//  }
//
// // }
// }
// function checkbottom(timir){
//      // if(tabledata.eq()===0 && tabledata.eq()===5 ){
//        // document.write("Clicked");
//      // }
//       var b_c=tabledata.eq(timir+15);
//       b_c.css('background-color','black');
//
//
// }
//
//
//
//
//
// });
//
//
//
//
//
//
//
// var red_colorsturn=true;

// var tdo=$('tr').eq(1).find('button');
// document.write(tdo.length);

$(document).ready(function(){
  var colorf="red";
  var table=$('tr');

  alert("Hello EveryOne ");
  // for(i=0;i<=4;i++){
  //     var rowi=table.eq(0).find('td').eq(i).find('button').addEventListener('click',GiveMeBottom(i));
  //    changeColor(0,i,colorf);
  //
  //
  // }

  // var me=table.eq(0).find('td').eq(1).find('button').click(GiveMeBottom(0));
  // document.write("me");
  // var h1=$('#hello');
  //
  // h1.click(console.log("Hello"));





















// var sixth_button=$("#6");
// sixth_button.click(function(){
//    console.log('sixth_button');
// });
//
//



// for(i=0;i<=4;i++){
$('button').eq(0).on('click',function(){

  var getting_bottom=GiveMeBottom(0);
  changeColor(getting_bottom,0,colorf);
  var present_color=returncolor(getting_bottom,0);
  if(present_color==="rgb(255, 0, 0)"){
    colorf="blue";
  }
  else{
    colorf="red";
  }
 checkforwin()


});
$('button').eq(1).on('click',function(){

  var getting_bottom=GiveMeBottom(1);
  changeColor(getting_bottom,1,colorf);
  var present_color=returncolor(getting_bottom,1);
  if(present_color==="rgb(255, 0, 0)"){
    colorf="blue";
  }
  else{
    colorf="red";
  }
  checkforwin()

});

$('button').eq(2).on('click',function(){

  var getting_bottom=GiveMeBottom(2);
  changeColor(getting_bottom,2,colorf);
  var present_color=returncolor(getting_bottom,2);
  if(present_color==="rgb(255, 0, 0)"){
    colorf="blue";
  }
  else{
    colorf="red";
  }
  checkforwin()

});
$('button').eq(3).on('click',function(){

  var getting_bottom=GiveMeBottom(3);
  changeColor(getting_bottom,3,colorf);
  var present_color=returncolor(getting_bottom,3);
  console.log(present_color);
  if(present_color==="rgb(255, 0, 0)"){
    colorf="blue";
  }
  else{
    colorf="red";
  }
  checkforwin()

});

$('button').eq(4).on('click',function(){

  var getting_bottom=GiveMeBottom(4);
  changeColor(getting_bottom,4,colorf);
  var present_color=returncolor(getting_bottom,4);
  if(present_color==="rgb(255, 0, 0)"){
    colorf="blue";
  }
  else{
    colorf="red";
  }
  checkforwin()

});
var h1=$("#hello");
function checkforwin(){
  //horizontal win section
  var i=0;
  var id=0;
  for(i=0;i<=3;i++){

  for(id=0;id<=1;id++){
      // var color_returned=returncolor(i,id);
      if (returncolor(i,id) === returncolor(i,id+1) && returncolor(i,id) === returncolor(i,id+2) && returncolor(i,id) === returncolor(i,id+3) && returncolor(i,id) !== "rgb(255, 165, 0)"){
          // returncolor(i,id+1)=== returncolor(i,id+2) &&  returncolor(i,id+3)===returncolor(i,id+1) && returncolor(i,id+4)===returncolor(i,id) &&
          // returncolor(i,id)!=="rgb(255, 165, 0)"
              console.log("won");
              var the_one=returncolor(i,id);
              if (the_one==="rgb(255, 0, 0)"){
                the_one="red";
              }
              else{
                the_one="blue";
              }
              // document.write("Some one won the match")

             //if statements blockkkk

             h1.text("Yeah  " +the_one+ " won the match" );

               }



          else{
            console.log("No one");
            // h1.textContent("NOthimg");
          }



          }
      }
//diagonal win section
var sec_id=0;
for(i=0;i<=3;i++){
   if(returncolor(i,sec_id)===returncolor(i+1,sec_id+1) && returncolor(i+2,sec_id+2)===returncolor(i,sec_id) && returncolor(i+3,sec_id+3)===returncolor(i,sec_id) && returncolor(i,sec_id)!=="rgb(255, 165, 0)"){
     console.log("some one won the match")
     var the_one=returncolor(i,id);
     if (the_one==="rgb(255, 0, 0)"){
       the_one="red";
     }
     else{
       the_one="blue";
     }
     // document.write("Some one won the match")

    //if statements blockkkk

    h1.text("Yeah  " +the_one+ " won the match" );

      }



 else{
   console.log("No one");
   // h1.textContent("NOthimg");
 }

for(id=1;id<=4;id++){
  if(returncolor(i,id)===returncolor(i+1,id+1) && returncolor(i+2,id+2)===returncolor(i,id) && returncolor(i+3,id+3)===returncolor(i,sec_id) && returncolor(i,id)!=="rgb(255, 165, 0)"){
    console.log("some one won the match")
    var the_one=returncolor(i,id);
    if (the_one==="rgb(255, 0, 0)"){
      the_one="red";
    }
    else{
      the_one="blue";
    }
    // document.write("Some one won the match")

   //if statements blockkkk

   h1.text("Yeah  " +the_one+ " won the match" );

     }



else{
  console.log("No one");
  // h1.textContent("NOthimg");
}






   }


}
var strt=3;
for (i=0;i<=3;i++){
  if (returncolor(i,strt) === returncolor(i+1,strt-1) && returncolor(i+2,strt-2) === returncolor(i+3,strt-3) && returncolor(i,strt) === returncolor(i+3,strt-3) && returncolor(i,strt) !== "rgb(255, 165, 0)"){
    console.log("some one won the match")
    var the_one=returncolor(i,id);
    if (the_one==="rgb(255, 0, 0)"){
      the_one="red";
    }
    else{
      the_one="blue";
    }
    // document.write("Some one won the match")

   //if statements blockkkk

   h1.text("Yeah  " +the_one+ " won the match" );

     }



else{
  console.log("No one");
  // h1.textContent("NOthimg");
}




  for(j=4;j>=0;j++){
    if (returncolor(i,j) === returncolor(i+1,j-1) && returncolor(i+2,j-2) === returncolor(i+3,j-3) && returncolor(i,j) === returncolor(i+3,j-3) && returncolor(i,j) !== "rgb(255, 165, 0)"){

      console.log("some one won the match")
      var the_one=returncolor(i,id);
      if (the_one==="rgb(255, 0, 0)"){
        the_one="red";
      }
      else{
        the_one="blue";
      }
      // document.write("Some one won the match")

     //if statements blockkkk

     h1.text("Yeah  " +the_one+ " won the match" );

       }



  else{
    console.log("No one");
    // h1.textContent("NOthimg");
  }







}

















































}








}

































// }




// }
// var tux=$('button');
// console.log(tux.eq());
// $('td').eq(0).click(GiveMeBottom);
function GiveMeBottom(column){
  // document.write('Give me Bottom');
   for(i=3;i>-1;i--){
           var tdo=table.eq(i).find('td').eq(column).find('button');
           // document.write();
           // console.log(tdo.css('background-color'));
           if(tdo.css('background-color')==="rgb(255, 165, 0)"){
             return i;
             console.log("Yup");

     }
     else{
       // document.write("Noope");
     }
   }
}
function changeColor(row,column,color){
   table.eq(row).find('td').eq(column).find('button').css('background-color',color);
    // return bitton;
}
function returncolor(row,column){
   return table.eq(row).find('td').eq(column).find('button').css('background-color');

   }


































// document.write(tdo.length);
// tdo.textContent="Hey Man";
// document.write(tdo.length)
// table.eq(row).find('td').eq(col).find('button').css('background-color',color);

});












































































































































































// $(function()) equals to $(document).ready(function(){
// $( document ).ready(function() {



// var player1=prompt("Enter the name of first player");
// var player2=prompt("Enter the name of second player");
// var table=$('tr');
// var tabledata=$('td');
// document.write(tabledata.eq(0).text())
// console.log(tabledata.eq(0).text());

// function colorchange(row,col,color){
//   return table.eq(row).find('td').eq(col).find('button').css('background-color',color);
// }
// function returncolor(row,col){
//   return table.eq(row).find('td').eq(col).find('button').css('background-color');
// }
// function checkbottom(rowe,column){
//
//
// });
//
//
//
//
// }
//
//























// function checkbottom (col){
//   var colorreport= returncolor(5,col);
//   for(var rowindex=5;row>-1;row--){
//     colorreport=returncolor(rowindex,col);
//     if(colorreport==='rgb(128,128,128)'){
//       return row;
//     }
//   }
// }
// }
