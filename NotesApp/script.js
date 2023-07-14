const createNote=document.getElementById("create-note");
const note=document.querySelectorAll(".note");
const addNotes=document.querySelector(".add-notes");

function showNotes()
{
    addNotes.innerHTML=localStorage.getItem("note");
}
showNotes();

function updateStorage(){
    console.log(addNotes.innerHTML);
    localStorage.setItem("note",addNotes.innerHTML);
}

//create note

createNote.addEventListener("click",()=>{
    console.log("add note");
   
   let p= document.createElement("p");
   p.classList.add("note");
   p.setAttribute("contenteditable","true");
   
   let image=document.createElement("img");
   image.src="images/delete.png";
   image.setAttribute("id","delete");
    
   p.appendChild(image);
   addNotes.appendChild(p);
});

//delete note
 
 addNotes.addEventListener("click",function(e){
   if( e.target.tagName==="IMG")
   {
    e.target.parentElement.remove();
    updateStorage();
   }
   else if(e.target.tagName==="P")
   {
    //note=document.querySelectorAll(".note");
    note.forEach(n => {
        n.onkeyup=function(){
            updateStorage();
        }    
    });
   }
 });
 

 document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
 })
