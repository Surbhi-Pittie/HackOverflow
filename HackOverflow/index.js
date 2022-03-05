var colorsRandom =[];
var ansColor =[];
var ansId;
var level =6;
var flag=0;
function randomColors(noOFColors){
  if(noOFColors==3){
    if($(".color-4").hasClass("visi")){

    }
    else{
      addVisibility();
    }

  }
  else{
    if($(".color-4").hasClass("visi")){
      removeVisibility();
    }

  }

  for(var i=0;i<noOFColors;i++){
    var r =Math.floor(Math.random()*256);
    var g =Math.floor(Math.random()*256);
    var b =Math.floor(Math.random()*256);
    colorsRandom.push([]);
    colorsRandom[i][0]=r;
    colorsRandom[i][1]=g;
    colorsRandom[i][2]=b;

  }
  headingRGB(noOFColors);
  setColorButtons(noOFColors);

}

function addVisibility(){
  for(var i=4;i<7;i++){
    $(".color-"+i).addClass("visi");
  }
}
function removeVisibility(){
  for(var i=4;i<7;i++){
    $(".color-"+i).removeClass("visi");
  }
}
function setColorButtons(noOFColors){
  for(var i=0;i<noOFColors;i++){
    $(".color-"+(i+1)).css("background-color","rgb("+colorsRandom[i][0]+","+colorsRandom[i][1]+","+colorsRandom[i][2]+")");
  }

}

function headingRGB(noOFColors){

  var cl=Math.floor(Math.random()*noOFColors);
  $("h1").text("rgb("+colorsRandom[cl][0]+","+colorsRandom[cl][1]+","+colorsRandom[cl][2]+")");
  ansColor.push(colorsRandom[cl][0],colorsRandom[cl][1],colorsRandom[cl][2]);
  ansId=cl+1;
}


function startOver(){
  $(".message").css("color","black");
  flag=0;
  $(".message").text("Start!");
  for(var i=0;i<level;i++){
      $("#"+(i+1)).animate({ opacity: 100 });
   }
  colorsRandom =[];
  ansColor =[];
}

$(".new").click(function(){
   startOver();
   randomColors(level);
});

$(".easy").click(function(){
  startOver();
  $(".easy").addClass("pressed");
  $(".hard").removeClass("pressed");
  level=3;
  randomColors(level);
});

$(".hard").click(function(){
  startOver();
  $(".hard").addClass("pressed");
  $(".easy").removeClass("pressed");
  level=6;
  randomColors(level);
});

$(".btn").click(function(){
  if(this.id==ansId){
    flag=1;
    for(var i=0;i<level;i++){
        $("#"+(i+1)).animate({ opacity: 100 });
        $(".color-"+(i+1)).css("background-color","rgb("+ansColor[0]+","+ansColor[1]+","+ansColor[2]+")");
    }
    $(".Heading").css("background-color","rgb("+ansColor[0]+","+ansColor[1]+","+ansColor[2]+")");
    $(".message").text("Correct!");
    $(".message").css("color","green");
  }
  else{
    if(flag!=1){
      $(".message").text("Try Again!");
      $(".message").css("color","red");
      $("#"+this.id).animate({ opacity: 0 });
    }

  }
});

randomColors(level);
