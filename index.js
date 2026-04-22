$(document).on("keydown touchstart",start);
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent);
}
if(isMobileDevice())
    $("h1").html("Touch the screen to start<br><small>(Change difficulty before playing)</small>");
  var level=1,rand=[],i=0;
function start(){
    $(document).off();
     $("#highscore").text("HighScore:"+(localStorage.getItem("highScore") || 0));

        $("body").removeClass("game-over");
        $("h1").text("level "+level)
        next(rand);
        if(!$("input").is(":checked"))
        $(".btn").on("click touchstart",NormalGameplay);
    else{
         $(".btn").on("click touchstart",EasyGameplay);
    }
}
 
function next(rand){
    var random=Math.floor(Math.random()*4)+1;
    rand.push(random);
    clicked("#"+random);

}    
function nextEasy(rand){

    var random=Math.floor(Math.random()*4)+1;
    $(".btn").off();
     $("h1").text("Wait!");
    rand.push(random);
      for(let i=0;i<rand.length;i++){
        setTimeout(function(){
            clicked("#"+rand[i]);
        },i*400);
      }
    setTimeout(function(){
        $(".btn").on("click touchstart",EasyGameplay);
         $("h1").text("level "+level)
    },400*rand.length);
}

function clicked(key){
   $(key).addClass("pressed");
   const sound=new Audio("./sounds/"+key[1] +".mp3");
  
   sound.play();
   setTimeout(function(){
     $(key).removeClass("pressed");},100);
 }
 function NormalGameplay(event){
 clicked("#"+this.id);
           event.preventDefault();
           if(rand[i]==this.id)
               i++;
           else{
            if(isMobileDevice())
                $("h1").text("You lose touch the screen to try again");
            else
               $("h1").text("You lose, Press any key to try again");
               $("body").addClass("game-over");
               setTimeout(function(){
                
                new Audio("./sounds/wrong.mp3").play();
                $(document).on("keydown touchstart",start);},150)
               rand=[];
               i=0;
                let newHighScore = localStorage.getItem("highScore") || 0;
               if (level> newHighScore) {
    localStorage.setItem("highScore", level);
    $("#highscore").text("HighScore: " + level);}
               level=1;
               $(".btn").off();
              
           }
           if(i==level){
               level++;
               setTimeout(function(){
               next(rand);},400)
               $("h1").text("level "+level)
               i=0;
           }
 }
 function EasyGameplay(event){
clicked("#"+this.id);
           event.preventDefault();
            if(rand[i]==this.id)
               i++;
           else{
            if(isMobileDevice())
                $("h1").text("You lose touch the screen to try again");
            else
               $("h1").text("You lose, Press any key to try again");
               $("body").addClass("game-over");
               setTimeout(function(){
                
                new Audio("./sounds/wrong.mp3").play();
                $(document).on("keydown touchstart",start);},150)
               rand=[];
               i=0;
               let newHighScore = localStorage.getItem("highScore") || 0;
               if (level> newHighScore) {
    localStorage.setItem("highScore", level);
    
    $("#highscore").text("HighScore: " + level);
}
               level=1;
               $(".btn").off();
              
           }if(i==level){
               level++;
               setTimeout(function(){
               nextEasy(rand);},400)
               $("h1").text("level "+level)
               i=0;
           }

    
 }
