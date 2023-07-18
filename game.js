var wordList=["water","words","style","scarf","swift"];
var n=Math.floor(Math.random()*5);
var word=wordList[n];
//alert(word);

var boxCount=1;
var submits=0;

$("button").click(function(){
  correctCount=0;
  submits++;
  for(var i=0;i<5;i++)
  {
    var boxPosition="#box"+boxCount;
    var l=$(boxPosition).val();
    if(l==word[i]){
     $(boxPosition).addClass("correct");
     correctCount++;
    }
    else if(word.includes(l)){
      $(boxPosition).addClass("present");
    }
    else{
      $(boxPosition).addClass("wrong");
    }
    boxCount++;
  }
  if(correctCount==5){
    $("h3").removeClass("hide fail");
  }
  else if(submits==5){
    $("h3").text("The word was " +word+ ", better luck next time");
    $("h3").removeClass("hide success");
  }
});
