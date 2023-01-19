///********question connect******/
const sectionContent = ["r1", "r2", "r3","r4","r5","r6","r7","r8","r9","r10","r11","r12","r13","r14","r15"];
let currentSection = sectionContent[0];

const displayContent = (q, area) => {
    document.getElementById(q).classList.add("active");
    document.getElementById(q + "-button").classList.add("button-active");
    currentSection = sectionContent[area.indexOf(q)];
    const toNone = area.filter(e => e !== q);
 
    
    for (i in toNone) {
        document.getElementById(toNone[i]).classList.remove("active");
      

    }
    if (sectionContent.indexOf(q) == 0) {
        document.getElementById("previous").classList.remove("button-active");
        document.getElementById("next").classList.add("button-active");
        
    }
    else if (sectionContent.indexOf(q) == sectionContent.length - 1) {
        document.getElementById("previous").classList.add("button-active");
        document.getElementById("next").classList.remove("button-active"); 
        document.getElementById("submitall").style.display="block"
    } else {
        document.getElementById("previous").classList.add("button-active");
        document.getElementById("next").classList.add("button-active");
        document.getElementById("submitall").style.display="none"
        
        
    }
         ///********missingQuestionList work with next and privious  button******/
        missingQuestionList()
         ///********video off when go another page******/
        $('.videoshown video').each(function(){
          $(this).get(0).pause();
        })
          ///********audio off when go another page******/
        var quesaudio11 = document.getElementById("quesaudio11")
        quesaudio11.pause(); 
      
        Questioninfor() 
}

const displayR1 = () => displayContent("r1", sectionContent);
const displayR2 = () => displayContent("r2", sectionContent);
const displayR3 = () => displayContent("r3", sectionContent);
const displayR4 = () => displayContent("r4", sectionContent);
const displayR5 = () => displayContent("r5", sectionContent);
const displayR6 = () => displayContent("r6", sectionContent);
const displayR7 = () => displayContent("r7", sectionContent);
const displayR8 = () => displayContent("r8", sectionContent);
const displayR9 = () => displayContent("r9", sectionContent);
const displayR10 = () => displayContent("r10", sectionContent);
const displayR11 = () => displayContent("r11", sectionContent);
const displayR12 = () => displayContent("r12", sectionContent);
const displayR13 = () => displayContent("r13", sectionContent);
const displayR14 = () => displayContent("r14", sectionContent);
const displayR15 = () => displayContent("r15", sectionContent);


const displayNext = ()=> displayContent(sectionContent[sectionContent.indexOf(currentSection) + 1], sectionContent)
const displayPrevious = () => displayContent(sectionContent[sectionContent.indexOf(currentSection) - 1], sectionContent);



function question1click1(){
if (document.querySelector("input[type='radio'][name=qus1]:checked").value) {
   document.getElementById("r1-button").style.background="#20BF55" 
}
else{
    document.getElementById("r1-button").style.background="#20BF55"
  }

}



function questionclick2(){
  if (document.querySelector("input[type='radio'][name=qus2]:checked").value) {
     document.getElementById("r2-button").style.background="#20BF55" 
  }
  else{
      document.getElementById("r2-button").style.background="#20BF55"
    }
  
  }
  



function questionclick3(){
  if (document.querySelector("input[type='radio'][name=qus3]:checked").value) {
      document.getElementById("r3-button").style.background="#20BF55" 
  }
  else{
      document.getElementById("r3-button").style.background="#20BF55"
    }
  
  }
    



function questionclick4(){
  if (document.querySelector("input[type='radio'][name=qus4]:checked").value) {
      document.getElementById("r4-button").style.background="#20BF55" 
  }
  else{
      document.getElementById("r4-button").style.background="#20BF55"
    }
  
  }
      
    

function questionclick5(){
  if (document.querySelector("input[type='radio'][name=qus5]:checked").value) {
      document.getElementById("r5-button").style.background="#20BF55" 
  }
  else{
      document.getElementById("r5-button").style.background="#20BF55"
    }
  
  }

  function questionclick6(){
    var question_6_text = [];
    $("input[name='question_6[]']").each(function() {
        var question_6 = $(this).val();
        if (question_6) {
            question_6_text.push(question_6);
        }
    });
    if (question_6_text.length === 4) {
      document.getElementById("r6-button").style.background="#20BF55" 
    }
  else{
    document.getElementById("r6-button").style.background="#FF7E05"
  }
    
    }





    function questionclick8(){
      var question_8_text = [];
      $("input[name='question_8[]']").each(function() {
          var question_8 = $(this).val();
          if (question_8) {
              question_8_text.push(question_8);
          }
      });
      if (question_8_text.length === 5) {
        document.getElementById("r8-button").style.background="#20BF55" 
      }
    else{
      document.getElementById("r8-button").style.background="#FF7E05"
    }
      
      }






function questionclick9(){

if($(".question_9").val()==''){
        document.getElementById("r9-button").style.background="#FF7E05"
      }
else{
      document.getElementById("r9-button").style.background="#20BF55"
    }
    
  }




function questionclick10(){

  if($("input[name='cost_quantity[]']").val() == '' ||
  $("input[name='cost_unit[]']").val() == '' ||
  $("input[name='cost_importance[]']").val() == '' ||
  $("input[name='cost_total[]']").val() == '' ||
  $("input[name='cost_grand_total']").val() == ''
  ){
    document.getElementById("r10-button").style.background="#FF7E05"
  }
   

else if($("input[name='material_quantity[]']").val() == '' ||
$("input[name='material_unit[]']").val() == '' ||
$("input[name='material_importance[]']").val() == '' ||
$("input[name='material_total[]']").val() == '' ||
$("input[name='material_grand_total']").val() == '' 
){
  document.getElementById("r10-button").style.background="#FF7E05"
}


else if($("input[name='invoice_sub_total']").val() == '' ||
$("input[name='invoice_tax']").val() == '' ||
$("input[name='invoice_grand_total']").val() == '' 
){
  document.getElementById("r10-button").style.background="#FF7E05"
}
else{
  document.getElementById("r10-button").style.background="#20BF55"
}  




  }  







  function questionclick11(){

    if($(".question_11").val()==''){
            document.getElementById("r11-button").style.background="#FF7E05"
          }
    else{
          document.getElementById("r11-button").style.background="#20BF55"
        }
        
}

function questionclick12(){

        var drageullements = document.querySelector('#dragulli');
        if (drageullements.children.length == 5) {
          document.getElementById("r12-button").style.background="#20BF55"
      }
     
            
 }
    


 function questionclick13(){

 
if($(".question_13_img").val()==''){
  document.getElementById("r13-button").style.background="#FF7E05"
}
else{
  document.getElementById("r13-button").style.background="#20BF55"
}

      
}

function questionclick14(){

  if($(".question_14_video").val()==''){
    document.getElementById("r14-button").style.background="#FF7E05"
  }
  else{
    document.getElementById("r14-button").style.background="#20BF55"
  }
  
         
  } 
        
  


function mySelectBoxques7(){

    document.getElementById("r7-button").style.background="#20BF55"


}


function mainongko(){
  if(document.getElementById('mainongko').checked){
  document.getElementById("r15-button").style.background="#20BF55"
}
else{
  document.getElementById("r15-button").style.background="#012D59"
} 
}






 
























































///********calculator open close******/
function calopen(){
  document.getElementById("calc-container").style.display="block"
}
function calclose(){
  document.getElementById("calc-container").style.display="none"
}

///********note open close******/
function noteopen(){
  document.getElementById("note-container").style.display="block"
}
function noteclose(){
  document.getElementById("note-container").style.display="none"
}


///********calculator drag******/
dragElement(document.getElementById("calc-container"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
  
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}









///********note drag******/
dragElement(document.getElementById("note-container"));

function dragElement(elmntt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmntt.id + "mydivheader")) {
    document.getElementById(elmntt.id + "mydivheader").onmousedown = dragMouseDown;
  } else {
    elmntt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmntt.style.top = (elmntt.offsetTop - pos2) + "px";
    elmntt.style.left = (elmntt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.getElementById("textnote").addEventListener("mousedown", function(e) {
  e.stopPropagation();
}, false);









///********question 13 image show******/

function zomimgshow(){
  document.getElementById("imgmodal").style.display="block"
}

function zomhide(){
  document.getElementById("imgmodal").style.display="none"
}





///********question 14 video show******/
function videogshow(){
  document.getElementById("videoshown").style.display="block"
  document.getElementById("wave1").style.visibility="hidden"
  document.getElementById("wave2").style.visibility="hidden"
  document.getElementById("wave3").style.visibility="hidden"

}

function videohide(){
  document.getElementById("videoshown").style.display="none"
  document.getElementById("wave1").style.visibility="visible"
  document.getElementById("wave2").style.visibility="visible"
  document.getElementById("wave3").style.visibility="visible"
  $('.videoshown video').each(function(){
    $(this).get(0).pause();
  })
}



///********question 7 select******/
function myselect() {
  "use strict";
  var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
selElmnt = x[i].getElementsByTagName("select")[0];
ll = selElmnt.length;

a = document.createElement("DIV");
a.setAttribute("class", "select-selected");
a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
x[i].appendChild(a);

b = document.createElement("DIV");
b.setAttribute("class", "select-items select-hide");
for (j = 1; j < ll; j++) {

c = document.createElement("DIV");
c.innerHTML = selElmnt.options[j].innerHTML;
c.addEventListener("click", function(e) {
var y, i, k, s, h, sl, yl;
s = this.parentNode.parentNode.getElementsByTagName("select")[0];
sl = s.length;
h = this.parentNode.previousSibling;
for (i = 0; i < sl; i++) {
if (s.options[i].innerHTML == this.innerHTML) {
s.selectedIndex = i;
h.innerHTML = this.innerHTML;
y = this.parentNode.getElementsByClassName("same-as-selected");
yl = y.length;
for (k = 0; k < yl; k++) {
y[k].removeAttribute("class");
}
this.setAttribute("class", "same-as-selected");
break;
}
}
h.click();
});
b.appendChild(c);
}
x[i].appendChild(b);
a.addEventListener("click", function(e) {
e.stopPropagation();
closeAllSelect(this);
this.nextSibling.classList.toggle("select-hide");
this.classList.toggle("select-arrow-active");
});
}
function closeAllSelect(elmnt) {

var x, y, i, xl, yl, arrNo = [];
x = document.getElementsByClassName("select-items");
y = document.getElementsByClassName("select-selected");
xl = x.length;
yl = y.length;
for (i = 0; i < yl; i++) {
if (elmnt == y[i]) {
arrNo.push(i)
} else {
y[i].classList.remove("select-arrow-active");
}
}
for (i = 0; i < xl; i++) {
if (arrNo.indexOf(i)) {
x[i].classList.add("select-hide");
}
}
}

document.addEventListener("click", closeAllSelect);


}
myselect()






///********question 10 incress row******/

$( "#material_dynamic_button" ).click(function() {
  $("#material_dynamic").append($("#material_dynamic_data").html());
});

$( "#cost_dynamic_button" ).click(function() {
  $("#cost_dynamic").append($("#cost_dynamic_data").html());
});




///********text area count 1******/

var maxchar = 1000;

$('#textarea_feedback').html(maxchar+' of '+maxchar);
$('#textareacount').attr('maxlength', maxchar);
$('#textareacount').parent().addClass('wrap-text');
$('#textareacount').on("keydown", function(e){
	var len =  $('#textareacount').val().length;
	if (len >= maxchar && e.keyCode != 8)
		   e.preventDefault();
	else if(len <= maxchar && e.keyCode == 8){
		if(len <= maxchar && len != 0)
	   		$('#textarea_feedback').html((maxchar - len +1));
	   	else if(len == 0)
	   		$('#textarea_feedback').html((maxchar - len));
	}else
		 $('#textarea_feedback').html((maxchar - len-1)); 
})


///********text area count 2******/
var maxchar1 = 1000;
    
$('#textarea_feedback1').html(maxchar+' of '+maxchar);
$('#textareacount1').attr('maxlength', maxchar);
$('#textareacount1').parent().addClass('wrap-text');
$('#textareacount1').on("keydown", function(e){
    var len =  $('#textareacount1').val().length;
    if (len >= maxchar && e.keyCode != 8)
           e.preventDefault();
    else if(len <= maxchar && e.keyCode == 8){
        if(len <= maxchar && len != 0)
               $('#textarea_feedback1').html((maxchar - len +1));
           else if(len == 0)
               $('#textarea_feedback1').html((maxchar - len));
    }else
         $('#textarea_feedback1').html((maxchar - len-1)); 
})






///********text area count 3******/
var maxchar2 = 1000;
    
$('#textarea_feedback2').html(maxchar+' of '+maxchar);
$('#textareacount2').attr('maxlength', maxchar);
$('#textareacount2').parent().addClass('wrap-text');
$('#textareacount2').on("keydown", function(e){
    var len =  $('#textareacount2').val().length;
    if (len >= maxchar && e.keyCode != 8)
           e.preventDefault();
    else if(len <= maxchar && e.keyCode == 8){
        if(len <= maxchar && len != 0)
               $('#textarea_feedback2').html((maxchar - len +1));
           else if(len == 0)
               $('#textarea_feedback2').html((maxchar - len));
    }else
         $('#textarea_feedback2').html((maxchar - len-1)); 
})


///********text area count 4******/
var maxchar3 = 1000;
    
$('#textarea_feedback3').html(maxchar+' of '+maxchar);
$('#textareacount3').attr('maxlength', maxchar);
$('#textareacount3').parent().addClass('wrap-text');
$('#textareacount3').on("keydown", function(e){
    var len =  $('#textareacount3').val().length;
    if (len >= maxchar && e.keyCode != 8)
           e.preventDefault();
    else if(len <= maxchar && e.keyCode == 8){
        if(len <= maxchar && len != 0)
               $('#textarea_feedback3').html((maxchar - len +1));
           else if(len == 0)
               $('#textarea_feedback3').html((maxchar - len));
    }else
         $('#textarea_feedback3').html((maxchar - len-1)); 
})




///********text area count 5******/
var maxchar4 = 1000;
        
$('#textarea_feedback4').html(maxchar+' of '+maxchar);
$('#textareacount4').attr('maxlength', maxchar);
$('#textareacount4').parent().addClass('wrap-text');
$('#textareacount4').on("keydown", function(e){
    var len =  $('#textareacount4').val().length;
    if (len >= maxchar && e.keyCode != 8)
           e.preventDefault();
    else if(len <= maxchar && e.keyCode == 8){
        if(len <= maxchar && len != 0)
               $('#textarea_feedback4').html((maxchar - len +1));
           else if(len == 0)
               $('#textarea_feedback4').html((maxchar - len));
    }else
         $('#textarea_feedback4').html((maxchar - len-1)); 
})






///********all side show******/
$(document).ready(function(){
  $("#auftragss").on('click', function(){
    $("#anzum").prop('disabled', function (_, val) { return ! val; });
    $("#mainforallques").toggleClass("col-md-offset-2 col-md-offset-3");
    $( "[id^='pagefixedcontent']").toggleClass("displaynone displayblock");
  });
});
$(document).ready(function(){
  $("[id^='closefixed']").on('click', function(){
    $("#anzum").removeProp('disabled', function (_, val) { return ! val; });
    $("#mainforallques").toggleClass("col-md-offset-3 col-md-offset-2");
    $( "[id^='pagefixedcontent']").toggleClass("displayblock displaynone");
  });
});
$(document).ready(function(){
  $("#anzum").on('click', function(){
    $("#auftragss").prop('disabled', function (_, val) { return ! val; });    
    $("#mainforallques").toggleClass("col-md-offset-2 col-md-offset-3");
    $( "#objecivepdf").toggleClass("displaynoneob displayblockob");
  });
});
$(document).ready(function(){
  $("#objectclose").on('click', function(){
    $("#auftragss").removeProp('disabled', function (_, val) { return ! val; });
    $("#mainforallques").toggleClass("col-md-offset-3 col-md-offset-2");
    $("#objecivepdf").toggleClass("displaynoneob displayblockob");
  });
});






///********missing question list******/
function missingQuestionList(){
  questionList = '';
      if (!$("input[name='qus1']:checked").val()) {
        questionList += ' Frage 1,'; 
        
      }
     


      if (!$("input[name='qus2']:checked").val()) {
        questionList += ' Frage 2,';  
      }
     
      if (!$("input[name='qus3']:checked").val()) {
        questionList += ' Frage 3,'; 
      }
     
      if (!$("input[name='qus4']:checked").val()) {
        questionList += ' Frage 4,';  
      }if (!$("input[name='qus5']:checked").val()) {
        questionList += ' Frage 5,';  
      }
      var question_6_text = [];
      $("input[name='question_6[]']").each(function() {
          var question_6 = $(this).val();
          if (question_6) {
              question_6_text.push(question_6);
          }
      });
      if (question_6_text.length === 0) {
           questionList += ' Frage 6,';
      }




 var maoncuustomselect = document.getElementById("mySelectBoxques7").value;

      if (!(maoncuustomselect === "34" || maoncuustomselect === "35" || maoncuustomselect === "36" || maoncuustomselect === "37")) {
        questionList += ' Frage 7,';
      }



      var question_8_text = [];

      $("input[name='question_8[]']").each(function() {
          var question_8 = $(this).val();
          if (question_8) {
              question_8_text.push(question_8);
          }
      });
      if (question_8_text.length === 0) {
           questionList += ' Frage 8,';
      }


     

     





      if($(".question_9").val()==''){
          questionList += ' Frage 9,';
      }
      if($("input[name='cost_quantity[]']").val() == '' ||
        $("input[name='cost_unit[]']").val() == '' ||
        $("input[name='cost_importance[]']").val() == '' ||
        $("input[name='cost_total[]']").val() == '' ||
        $("input[name='cost_grand_total']").val() == ''
        ){
            questionList += ' Frage 10,';
        }
        if($(".question_11").val()==''){
          questionList += ' Frage 11,';
      }
      var drageullements = document.querySelector('#dragulli');
      if (drageullements.children.length <= 5) {
        questionList += ' Frage 12,';
    }
    if($(".question_13_img").val()==''){
      questionList += ' Frage 13,';
    }
    if($(".question_14_video").val()==''){
      questionList += ' Frage 14,';
    }
    if(questionList!=''){
          questionList = 'Sie haben folgende Fragen noch nicht beantwortet:'+questionList;
      }
       document.getElementById("missingQuestionList").innerHTML=questionList
      var strVal = $.trim($('#missingQuestionList').text());
      var lastChar = strVal.slice(-1);
      if (lastChar == ',') { 
        strVal = strVal.slice(0, -1); 
        $("#missingQuestionList").text(strVal);
      }
     
           
 } 





///********question 13 zoom img******/
 function zoom(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}








///********question information modal******/
function subicomecal(){
  var subidivcal=document.getElementById("subhisabcontent")
  subidivcal.classList.add("subidivcalsty");
}
function subigocal(){
  var subidivcal=document.getElementById("subhisabcontent")
  subidivcal.classList.remove("subidivcalsty");
}

























$(function () {
	jQuery.fn.extend({
    	countdown: function () {
        	 // 24 hour countdown
           // Change variable here to see what will happen :D
            let hour = 1, min = 30, sec = 0
            render(hour, min, sec)
            
            const timer = setInterval(() => {
            	if (hour == 0 && min == 0 && sec == 0) {
                	clearInterval(timer)
                    return ;
                }
                
            	sec = dealSec(sec)
                min = dealMin(min, sec)
                hour = dealhour(hour, min, sec)
                render(hour, min, sec)
            }, 1000)
        },
    })
    
    $('#countdown').countdown()
})

function dealSec (sec) {
    const timeRange = [...Array(60).keys()].reverse()
	const idxNow = timeRange.indexOf(sec)
    const idxNext = (idxNow + 1) % timeRange.length
    return timeRange[idxNext]
}

function dealMin(min, sec) {
    const timeRange = [...Array(60).keys()].reverse()
    if (sec === 59) {
    	const idxNow = timeRange.indexOf(min)
        const idxNext = (idxNow + 1) % timeRange.length
        return timeRange[idxNext]
    }
    return min
}

function dealhour (hour, min, sec) {
	if (min === 59 && sec === 59) return hour - 1
    return hour
}

function render(hour, min, sec) {
	hour = ("00" + hour).slice(-2)
    min  = ("00" + min).slice(-2)
    sec  = ("00" + sec).slice(-2)
    
    $('#countdown').text(`${hour}:${min}:${sec}`)
}