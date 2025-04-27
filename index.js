$(document).on("keydown touchstart",start);
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}
if(isMobileDevice())
    $("h1").text("touch the screen to start");
function start(){
    $(document).off();
        var level=1,rand=[],i=0;
        $("body").removeClass("game-over");
        $("h1").text("level "+level)
        next(rand);
        $(".btn").on("click touchstart",function(event){
           clicked("#"+this.id);
           event.preventDefault();
           if(rand[i]==this.id)
               i++;
           else{
            if(isMobileDevice())
                $("h1").text("You lose touch the scree to try again");
            else
               $("h1").text("You lose, Press any key to try again");
               $("body").addClass("game-over");
               setTimeout(function(){
                
                new Audio("./sounds/wrong.mp3").play();
                $(document).on("keydown touchstart",start);},150)
               rand=[];
               $(".btn").off();
              
           }
           if(i==level){
               level++;
               setTimeout(function(){
               next(rand);},400)
               $("h1").text("level "+level)
               i=0;
           }
        });
}
 
function next(rand){
    var random=Math.floor(Math.random()*4)+1;
    rand.push(random);
    clicked("#"+random);

}    

function clicked(key){
   $(key).addClass("pressed");
   const sound=new Audio("./sounds/"+key[1] +".mp3");
  
   sound.play();
   setTimeout(function(){
     $(key).removeClass("pressed");},100);
 }
        
 

