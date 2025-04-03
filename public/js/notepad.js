const createBtn = document.getElementById("createBtn");
const previewPage = document.getElementById("previewPage");
const createPage= document.getElementById("createPage");
const saveBtn = document.getElementById("saveBtn");
const noteSaveMgs = document.getElementById("noteSaveMgs");
const closeBtn = document.getElementById("closeBtn");
const editPage = document.getElementById("editPage");
const closeEditPageBtn = document.getElementById("closeEditPageBtn");
const appendBtn = document.getElementById("appendBtn");
const changesSaveMgs = document.getElementById("changesSaveMgs");

createBtn.addEventListener('click', ()=>{
    createPage.style.display = 'block';
    previewPage.style.display = "none";
})

closeBtn.addEventListener('click', ()=>{
    createPage.style.display = 'none';
    previewPage.style.display = "block";
})
saveBtn.addEventListener('click', ()=>{
setTimeout(() => {
    noteSaveMgs.style.display = "block";
    setTimeout(() => {
    noteSaveMgs.style.display = "none";
}, 3000);

}, 500);
})
clearInterval();


noteSaveMgs.addEventListener('click', ()=>{
    createPage.style.display = 'none';
    previewPage.style.display = 'add';
})

const editNote = document.querySelectorAll('.editNote');
editNote.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        editPage.style.display = 'block';
        previewPage.style.display = "none";
    })
})

closeEditPageBtn.addEventListener('click', ()=>{
    editPage.style.display = 'none';
    previewPage.style.display = 'block';
})


appendBtn.addEventListener('click', ()=>{
    setTimeout(()=>{
        setTimeout(()=>{
            changesSaveMgs.style.display = 'none';
        }, 3000)
        changesSaveMgs.style.display = 'block';
    }, 500)
})