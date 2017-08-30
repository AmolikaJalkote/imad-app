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


//Submit name
var nameInput=document.getElementById("name");
var name=nameInput.value;
var submit=document.getElementById("submit");
submit.onClick=function(){
//makes request to the server and send the name

//captures list of name and render
var names=["name1","name2","name3"];
var list=" ";
for(var i=0;i<names.length;i++)
{
    list=list + '<li>' + names[i] + '</li>';
}
    var ul=document.getElementById("namelist");
}