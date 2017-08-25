console.log('Loaded!');
var element=document.getElementById("main-text");
//element.innerHTML='New Value';
var img=document.getElementById('myimg');
img.onclick=function(){
    var interval=setInterval(moveLeft,100);
    //img.style.marginLeft='100px';
};