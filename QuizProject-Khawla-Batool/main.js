var questions = [{question:"1.Which number should come next in the pattern:"+"\n"+"37, 34, 31, 28...",
                  answer:"choice3",
                  choices : ["a.18","b.26","c.25","d.48"]},
                  {question:"2.Find the answer that best completes the analogy: "+"\n"+  "Book is to Reading as Fork is to:",
                  answer:"choice1",
                  choices : [ "a.Eating", "b.Drawing","c.Writing","d.Stirring"]},
                  {question:"3.Which number should replace the ?  in the pattern?"+"\n"+"2,7,12,17,?,27,32",
                  answer:"choice4",
                  choices : ["a.17","b.29","c.31","d.22"]},
                  {question:"4.One word in this list doesn't belong to the same group:"+"\n"+"Yen, Pound, Franc, Penny, Mark.",
                  answer:"choice3",
                  choices : ["a.Yen","b.Pound","c.Mark","d.Franc"]} ];



//filing questions

$("#q1").text(questions[0].question);
$("#q2").text(questions[1].question);
$("#q3").text(questions[2].question);
$("#q4").text(questions[3].question);
// filling the choices 
//first Q choices
$("#l1").text((questions[0].choices)[0]);
$("#l2").text((questions[0].choices)[1]);
$("#l3").text((questions[0].choices)[2]);
$("#l4").text((questions[0].choices)[3]);
//second Q choices
$("#l5").text((questions[1].choices)[0]);
$("#l6").text((questions[1].choices)[1]);
$("#l7").text((questions[1].choices)[2]);
$("#l8").text((questions[1].choices)[3]);
//third Q choices
$("#l9").text((questions[2].choices)[0]);
$("#l10").text((questions[2].choices)[1]);
$("#l11").text((questions[2].choices)[2]);
$("#l12").text((questions[2].choices)[3]);
//fourth Q choices
$("#l13").text((questions[3].choices)[0]);
$("#l14").text((questions[3].choices)[1]);
$("#l15").text((questions[3].choices)[2]);
$("#l16").text((questions[3].choices)[3]);

//hide the question until the user clicks on start
$("#start").click(function(){
      $("#questiondiv").css("display", "block");
       $("#finishdiv").css("display", "block");
       $("#startdiv").css("display", "none");
 })


// counting the result 

$("#finish").click(function count(){
      var count=0;
      if ($("#form1 :checked").val() === questions[0].answer)
            count++;
      if ($("#form2 :checked").val() === questions[1].answer)
            count++;
      if($("#form3 :checked").val() === questions[2].answer)
            count++;
      if($("#form4 :checked").val() === questions[3].answer)
            count++;

       $("#questiondiv").css("display", "none");
       $("#startdiv").css("display", "none");
       $("#finishdiv").css("display", "none");
       $("#result").css("display", "block");

      var average= (count/4)*100 ;
      var audio = document.getElementById("sound1");
      function playAudio() { 
          audio.play(); 
      } 


      if(average===100 || average>=90)
      {
            $('#result').text("congratulation!!! You are very smart: "+average);
            $('#cong').css("display", "block");
            playAudio();
      }

      else if(average>=70 && average<90)
      {
            $('#result').text("congratulation!!! You are smart: "+average);
            $('#cong').css("display", "block");
             playAudio();
      }

       else if(average>=40 &&average<70){
            
            $('#result').text("congratulation!!! You have an average IQ: "+average);
            $('#cong').css("display", "block");
            audio.play();
       }

       else{
            $('#result').text("I am sorry ,Your IQ is below average click in the this link if you need more practice: "+average);
            $('a').css("display", "block");


       } 
 });
            
