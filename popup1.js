var body=document.getElementsByTagName("body");
var mainValue=document.getElementById("cont2");
var searchValue=document.getElementById("hsearch");
var exValue=document.getElementById("exsearch");
var maValue=document.getElementById("masearch");
var fiValue=document.getElementById("fisearch");
var siValue=document.getElementById("sisearch");
var coValue=document.getElementById("cosearch");
var usValue=document.getElementById("ussearch");
var tiValue=document.getElementById("tisearch");
var cont=document.getElementById("cont");
var cont1=document.getElementById("cont1");
var cont2_1=document.getElementById("cont2_1");
var cont2_2=document.getElementById("cont2_2");
var match=document.getElementById("match");
var exclude=document.getElementById("exclude");
var file=document.getElementById("file");
var size=document.getElementById("size");
var colour=document.getElementById("colour");
var usage=document.getElementById("usage");
var time=document.getElementById("time");
var logo=document.getElementById("logo");
var html=document.getElementsByTagName("html");
var cooltips=document.getElementsByTagName("h1");
var switchy=document.getElementById("switch");
var tipTimer=0;
var tipIndex=0;
let searchThis='';
let concatFile='';
var opened = 0;
var concater = '';
var concatTypes = '&tbs=';
document.addEventListener("DOMContentLoaded", function(){
    console.log(window.location.href);
    arrrotate();
})
function arrrotate(){
    if (tipTimer>9) {
        tipTimer=0;
    } else if (tipTimer==1) {
        appear();
    } else if (tipTimer==8) {
        disappear();
    }
    tipTimer+=1;
    setTimeout(arrrotate, 400);
}
var id01 = null;
function appear() {
    cooltips[tipIndex].style.display = 'block';
    var trans = 0;
    clearInterval(id01);
    id01 = setInterval(frame, 10);
    function frame() {
        if (trans >= 1) {
            clearInterval(id01);
        } else {
            trans+=0.01;
            cooltips[tipIndex].style.opacity = trans;
        }
    }
}
var id02 = null;
function disappear() {
    var trans = 1;
    clearInterval(id02);
    id02 = setInterval(frame, 10);
    function frame() {
        if (trans <= 0) {
            clearInterval(id02);
            cooltips[tipIndex].style.display = 'none';
            if (tipIndex>=(cooltips.length-1)){
                tipIndex=0;
            } else {
                tipIndex+=1;
            }
            console.log(tipIndex);
        } else {
            trans-=0.01;
            cooltips[tipIndex].style.opacity = trans;
        }
    }
}
document.getElementById("mainsearch").onsubmit = function(){
    if (searchValue.value!=''||maValue.value!=''){
        submit();
    }
};
function submit(){
    if (exValue.value!=''){
        concater+=' -'+exValue.value;
    }
    if (maValue.value!=''){
        concater+=' \"'+maValue.value+'\"'
    }
    if (coValue.value!='None'){
        colourValue = coValue.value.replaceAll(',', ',ic:');
        colourValue = colourValue.replaceAll('.', ',ic:specific,isc:')
        concatTypes += colourValue;
    }
    if (tiValue.value!='None'){
        concatTypes += ',qdr:'+tiValue.value;
    }
    if (fiValue.value!="None"){
        concatTypes += ',ift:'+fiValue.value;
    }
    if (siValue.value!='None'){
        concatTypes += ',isz:'+siValue.value;
    }
    if (usValue.value!='None'){
        concatTypes += ',il:'+usValue.value;
    }
    searchThis = searchValue.value.replaceAll('...', '*')
    window.open('https://www.google.com/search?q='+searchThis+concater+concatFile+'&tbm=isch'+concatTypes, '_blank');
}
document.onkeydown=function(evt){
    console.log(evt.key);
    if(evt.key == 'Enter'){
        if (searchValue.value!=''||maValue.value!=''){
            submit();
        }
    }
}
mainValue.onclick = function (event) {
    fadeIn();
}
document.addEventListener("click", (e) => {
    let clicked = e.target;
    do {
        if (clicked==body[0]||clicked==logo||clicked==cont||clicked==cont1||clicked==html[0]){
            fadeOut();
        }
        clicked = null;
    } while (clicked);
})
var id1 = null;
function fadeOut() {
    if (opened==1){
        opened = 0.5;
        var pos1 = 0;
        clearInterval(id1);
        id1 = setInterval(frame, 10);
        function frame() {
            if (pos1 == 1050) {
                clearInterval(id1);
                opened = 0;
            } else {
                pos1+=5;
                body[0].style.height = (575 - (pos1/3)) + 'px';
                cont2_1.style.height = (400 - (pos1/3))+"px";
                cont2_2.style.marginTop = "-"+(400 - (pos1/3))+"px";
                cooltips[0].style.marginTop = 367.5-(pos1/3)+"px";
                cooltips[1].style.marginTop = 367.5-(pos1/3)+"px";
                cooltips[2].style.marginTop = 367.5-(pos1/3)+"px";
                cooltips[3].style.marginTop = 367.5-(pos1/3)+"px";
                cooltips[4].style.marginTop = 367.5-(pos1/3)+"px";
                if (pos1<150) {
                    time.style.height = (50-((pos1)/3)) + 'px';
                } else if (pos1<300) {
                    time.style.display = 'none';
                    usage.style.height = (50-((pos1-150)/3)) + 'px';
                } else if (pos1<450) {
                    usage.style.display = 'none';
                    colour.style.height = (50-((pos1-300)/3)) + 'px';
                } else if (pos1<600) {
                    colour.style.display = 'none';
                    size.style.height = (50-((pos1-450)/3)) + 'px';
                } else if (pos1<750) {
                    size.style.display = 'none';
                    file.style.height = (50-((pos1-600)/3)) + 'px';
                } else if (pos1<900) {
                    file.style.display = 'none';
                    match.style.height = (50-((pos1-750)/3)) + 'px';
                } else if (pos1<1050){
                    match.style.display = 'none';
                    exclude.style.height = (50-((pos1-900)/3)) + 'px';
                } else {
                    exclude.style.display = 'none';
                }
            }
        }
    }
}
var id2 = null;
function fadeIn() {
    if (opened==0){
        opened = 0.5;
        var pos2 = 0;
        clearInterval(id2);
        id2 = setInterval(frame, 10);
        function frame() {
            if (pos2 == 1050) {
                clearInterval(id2);
                opened = 1;
            } else {
                pos2+=5;
                body[0].style.height = (225 + (pos2/3)) + 'px';
                cont2_1.style.height = (50+(pos2/3))+"px";
                cont2_2.style.marginTop = "-"+(50+(pos2/3))+"px";
                cooltips[0].style.marginTop = 17.5+(pos2/3)+"px";
                cooltips[1].style.marginTop = 17.5+(pos2/3)+"px";
                cooltips[2].style.marginTop = 17.5+(pos2/3)+"px";
                cooltips[3].style.marginTop = 17.5+(pos2/3)+"px";
                cooltips[4].style.marginTop = 17.5+(pos2/3)+"px";
                if (pos2<150) {
                    exclude.style.display = 'flex';
                    exclude.style.height = (pos2/3) + 'px';
                } else if (pos2<300&&pos2>=150) {
                    match.style.display = 'flex';
                    match.style.height = ((pos2-150)/3) + 'px';
                } else if (pos2<450&&pos2>=300) {
                    file.style.display = 'flex';
                    file.style.height = ((pos2-300)/3) + 'px';
                } else if (pos2<600&&pos2>=450) {
                    size.style.display = 'flex';
                    size.style.height = ((pos2-450)/3) + 'px';
                } else if (pos2<750&&pos2>=600) {
                    colour.style.display = 'flex';
                    colour.style.height = ((pos2-600)/3) + 'px';
                } else if (pos2<900&&pos2>=750) {
                    usage.style.display = 'flex';
                    usage.style.height = ((pos2-750)/3) + 'px';
                } else if (pos2<1050&&pos2>=900) {
                    time.style.display = 'flex';
                    time.style.height = ((pos2-900)/3) + 'px';
                }
            }
        }
    }
}
switchy.addEventListener("click", function(){
    window.location.href='popup.html';
    chrome.action.setPopup({popup: "popup.html"});
})