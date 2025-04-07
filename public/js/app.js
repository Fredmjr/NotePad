const title = document.querySelector('#title');
const paragraph = document.querySelector('#paragraph');
const titleFromData = document.querySelectorAll('#titleFromData').innerHTML;
const deleteBtn = document.querySelectorAll('.deleteBtn');

function send (){
    let data = {
        titleData: title.value,
        paragraphData: paragraph.value
    };

    console.log(data)

    fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data)
    })

    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
} 

saveBtn.addEventListener('click', send)

/* //deleting notes
function deleteSelectedNnote (){
    let noteTitleClassObj = titleFromData;
       let deleteData = {
        deleteNoteTitle: noteTitleClassObj,
    };
    console.log(deleteData)
}
//deleting by sending the name of the note
deleteBtn.forEach((btn)=>{
    btn.addEventListener('click', deleteSelectedNnote)
}) */