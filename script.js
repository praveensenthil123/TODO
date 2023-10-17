
       var inp=document.getElementById("uinput");
       var list=document.getElementById("list");
 function addlist(){
        var listitem=document.createElement("li");
        
        listitem.innerHTML=inp.value + "<button onclick='del(event)'>delete</button>";
      list.append(listitem);
 }
 function del(event){
    event.target.parentElement.remove();
 }
        
    