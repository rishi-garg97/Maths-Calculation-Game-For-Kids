var playing =false;
var score;
var action;
var timeremaining
var correctAnswer;

// if we click on start/reset button



  document.getElementById("startreset").onclick =
      
      function()
   {
    // if we are playing  
      if(playing==true)
        {
              
          location.reload();
        }
      else{  //  if we are not playing
    
          //change mode to playing
          playing=true;
      
          // set score to 0
          score=0;
          document.getElementById("scorevalue").innerHTML=score;
          
         // show count down box
          
         document.getElementById("timeremaining").style.display = "block";
          
          timeremaining=60;
          document.getElementById("timeremainingvalue").innerHTML= timeremaining;
          
          // hide gameover box
          hide("gameover");
          
          
           // change button to reset
          document.getElementById("startreset").innerHTML="Reset Game";
       
          
          //start countdown
          
          startCountdown();
          
          
          // generate a new Q&A
        
          generateQA();
          
      }
      
  }
  
for(i=1;i<=4;i++)
    {
      document.getElementById("box"+i).onclick = 
      function(){
      
      if(playing==true)
          {
              if(this.innerHTML== correctAnswer)
                  {
                      score++;
            document.getElementById("scorevalue").innerHTML = score;
                      hide("wrong");
                      show("correct");
                      
                      setTimeout(
                      function(){
                          
                          hide("correct");
                      },1000);
                      
                      generateQA();
                  }
              
              else{
                  
                      hide("correct");
                      show("wrong");
                      
                      setTimeout(
                      function(){
                          
                          hide("wrong");
                      },1000);
                  
              }
          }
      
  }
 
}

// if we click on answer box
     // if we are playing
          // correct ?\
                // yes
                      // increase score
                      // show correct box for 1 sec
                      // generate new Q&A
                   // no
                      // show try again box for 1 sec


  
  //function

  
  //start countdown
function startCountdown()
{
   action =setInterval(function(){
       timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML= timeremaining;
       
       if(timeremaining == 0)
           {
               //game over
               stopCountDown();
             
               document.getElementById("gameover").style.display = "block";
               
               document.getElementById("gameover").innerHTML="<p>Game Over</p><p>your score is "+score+".</p>";
                
               hide("timeremaining");
               
               hide("correct");
               hide("wrong");
               playing=false;
               
document.getElementById("startreset").innerHTML="Start Game";
           }
       
   },1000);
}



// stop countdown
function stopCountDown()
{
    clearInterval(action);
}


//hide element

function hide(Id)
{
document.getElementById(Id).style.display="none";
}


//show element
function show(Id)
{
document.getElementById(Id).style.display="block";
}


// generate q and ans

function generateQA()
{
  var x = 1+Math.round(9*Math.random());
      var y = 1+Math.round(9*Math.random());
    correctAnswer = x*y;

    document.getElementById("question").innerHTML= x + "x" + y;
    
    var correctPosition =1+Math.round(3*Math.random());
    
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
    // fill one box with correct answer
    
    // fill other boxes with wrong answer
    
    
    var answers = [correctAnswer];
    for(i=1;i<=4;i++)
        {
        
        if(i != correctPosition)
        {
            
    var wrongAnswer;
            
            do 
                  {
            wrongAnswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
            }while(answers.indexOf(wrongAnswer)>-1);
            
            
            document.getElementById("box"+i).innerHTML = wrongAnswer;
        
            answers.push(wrongAnswer);
                                                    }
    }
}