displayNotes();
var addBtn = document.getElementById("addNote");
addBtn.addEventListener("click", function (e) {

    var txt = document.getElementById("addTxt");
    var notes = localStorage.getItem("notes");
    if (notes == null) {
        notesarr = [];

    }
    else {
        notesarr = JSON.parse(notes);
    }
    notesarr.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesarr));
    addTxt.value = "";
    //console.log(notesarr);
    displayNotes();
})
function displayNotes() {
    var notes = localStorage.getItem("notes");
    if (notes == null) {
        notesarr = [];

    }
    else {
        notesarr = JSON.parse(notes);
    }
    var display = "";
    notesarr.forEach(function(element, index)
    {
        display +=`
            <div class="card my-2 mx-2" style="width: 18rem">

                <div class="card-body">
                    <h5 class="card-title">Note ${index+1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary" href="#">Delete Note</button>
                </div>
            </div>
            `
    });
    var s=document.getElementById("notes");
    if(notesarr.length !=0)
    {
        s.innerHTML=display;
        
    }
    else{
        s.innerHTML=`No New Note Added.`;
    }
}
function deleteNote(index)
{
    var notes = localStorage.getItem("notes");
    if (notes == null) {
        notesarr = [];

    }
    else {
        notesarr = JSON.parse(notes);
    }
    notesarr.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesarr));
    displayNotes();
}
