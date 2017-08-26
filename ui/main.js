/*console.log('Loaded!');
var element=document.getElementById("main-text");
//element.innerHTML='New Value';
var img=document.getElementById('myimg');
var marginLeft=0;
function moveRight(){
  marginLeft=marginLeft + 10 ;
  img.style.marginLeft=marginLeft + 'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
    //img.style.marginLeft='100px';
};*/
var button=document.getElementById('counter');
var counter=0;
button.onClick=function(){
  counter=counter + 1;
  var span=document.getElementById('count');
  span.innerHTML=counter.toString();
};
