
/////////////////////////////////////////////////////////QUIZ STEP

/////////////////////////////////////////////////////////CALCULATER
var draggable = $('#dragit');
draggable.on('mousedown', function(e){
var dr = $(this).addClass("drag").css("cursor","move");
height = dr.outerHeight();
width = dr.outerWidth();
ypos = dr.offset().top + height - e.pageY,
xpos = dr.offset().left + width - e.pageX;
$(document.body).on('mousemove', function(e){
    var itop = e.pageY + ypos - height;
    var ileft = e.pageX + xpos - width;
if(dr.hasClass("drag")){
    dr.offset({top: itop,left: ileft});
}
}).on('mouseup', function(e){
    dr.removeClass("drag");
});
});

jQuery('.cal_close').click(function(){
    jQuery('.cal-body').toggleClass('open_cal');
});

function insert(num){
    $(".screen").val($(".screen").val() + num);
}

function eql(){
    $(".screen").val(eval($(".screen").val()));
}

function clr(){
    $(".screen").val('');
}

function del() {
    value = $('.screen').val();
    $('.screen').val(value.substring(0, value.length - 1));
}
/////////////////////////////////////////////////////////CALCULATER



////////////////////////////////////////////////////////COUNTDOWN TIMER
var interval;
function countdown() {
    clearInterval(interval);
    interval = setInterval( function() {
        var timer = $('.countdown').html();
        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
  
        $('.countdown').html(minutes + ':' + seconds);
  
        if (minutes == 0 && seconds == 0){ 
            clearInterval(interval);
            $( "#quiz_exam" ).submit();
        }
    }, 1000);
}
var pathname = window.location.pathname; 
var exam_path = pathname.includes("/exam");  
if(exam_path){
    countdown();
}
////////////////////////////////////////////////////////COUNTDOWN TIMER


///////////////////////////////////////////////////////DRAGDROP
$(".draggable-right").sortable({
    connectWith: ".connected-sortable",
    stack: ".connected-sortable ul",
    update: function( event, ui ) {
        find_total();
    }
}).disableSelection();

$('.dropable-right').sortable({
    update:function(ev, ui){
        var widget = $(this);
        var collapse_id = ($(ui.item).attr('data-accord'));
        var removeButton = $("<i class='fa fa-times'></i>").click(function(){
            var parentLi = $(this).parent().parent();
            $(this).remove();
            parentLi.appendTo($('#collapse' + collapse_id + ' .draggable-right'))
             $('#collapse' + collapse_id + ' .draggable-right li').sort(asc_sort).appendTo($('#collapse' + collapse_id + ' .draggable-right'));
        });
        $(ui.item).children(".remove-icon").html(removeButton);
    }
}).disableSelection();

function asc_sort(a, b){
    return ($(b).text().toUpperCase()) < ($(a).text().toUpperCase());    
}

$(".remove-icon .fa-times").click(function(){
    var collapse_id = ($(this).parent().parent().attr('data-accord'));
    var parentLi = $(this).parent().parent();
    $(this).remove();
    parentLi.appendTo($('#collapse' + collapse_id + ' .draggable-right'))
        $('#collapse' + collapse_id + ' .draggable-right li').sort(asc_sort).appendTo($('#collapse' + collapse_id + ' .draggable-right'));
});

//DRAGDROP QUESTION
$(".draggable-right-q").sortable({
    connectWith: ".connected-sortable",
    stack: ".connected-sortable ul"
}).disableSelection();

$('.dropable-right-q').sortable({
    update:function(ev, ui){
        var widget = $(this);
        var removeButton = $("<i class='fa fa-times'></i>").click(function(){
            var parentLi = $(this).parent().parent();
            $(this).remove();
            parentLi.appendTo($('.draggable-right-q'))
             $('.draggable-right-q li').sort(asc_sort).appendTo($('.draggable-right-q'));
        });
        $(ui.item).children(".remove-icon-q").html(removeButton);
    }
}).disableSelection();
//DRAGDROP QUESTION

//DRAGDROP CALCULATOR & NOTICEBOARD
$(".drag").draggable();
//DRAGDROP CALCULATOR & NOTICEBOARD
///////////////////////////////////////////////////////DRAGDROP


//////////////////////////////////////////////////////RESIZE SEPARATOR

// A function is used for dragging and moving
function dragElement(element, direction)
{
    var   md; // remember mouse down info
    const first  = document.getElementById("first");
    const second = document.getElementById("second");

    element.onmousedown = onMouseDown;

    function onMouseDown(e)
    {
        //console.log("mouse down: " + e.clientX);
        md = {e,
              offsetLeft:  element.offsetLeft,
              offsetTop:   element.offsetTop,
              firstWidth:  first.offsetWidth,
              secondWidth: second.offsetWidth
             };

        document.onmousemove = onMouseMove;
        document.onmouseup = () => {
            //console.log("mouse up");
            document.onmousemove = document.onmouseup = null;
        }
    }

    function onMouseMove(e)
    {
        //console.log("mouse move: " + e.clientX);
        var delta = {x: e.clientX - md.e.clientX,
                     y: e.clientY - md.e.clientY};

        if (direction === "H" ) // Horizontal
        {
            // Prevent negative-sized elements
            delta.x = Math.min(Math.max(delta.x, -md.firstWidth),
                       md.secondWidth);

            element.style.left = md.offsetLeft + delta.x + "px";
            first.style.width = (md.firstWidth + delta.x) + "px";
            second.style.width = (md.secondWidth - delta.x) + "px";
        }
    }
}

dragElement( document.getElementById("separator"), "H" );
//////////////////////////////////////////////////////RESIZE SEPARATOR
