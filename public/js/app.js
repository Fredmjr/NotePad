const title = document.querySelector('#title');
const paragraph = document.querySelector('#paragraph');
const titleFromData = document.querySelectorAll('#titleFromData').innerHTML;
const junkBros = document.getElementsByClassName('junkBros').innerHTML;

function send (){
    let data = {
        titleData: title.value,
        paragraphData: paragraph.value
    };

/*     console.log(data) */

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

/* //deleting by sending the name of the note
deleteBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=> {

    const noteParentTitle = btn.closest('.noteParentTitle');
    const titleFromData = noteParentTitle.querySelector('#titleFromData');

    let junkBrosValue = titleFromData.value;
    let deleteData = {
        junkBrosKey: junkBrosValue,
    };
    console.log(deleteData);
}
    )
})  */

function Delete(id){
    data = {
        Id: id,
    }

/*     console.log(data) */
}