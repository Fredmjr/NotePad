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
const trashPage = document.getElementById("trashPage");
const trashBtn = document.getElementById("trashBtn");
const menuDropdown = document.getElementById("menuDropdown");
const menuHub = document.getElementById("menuHub");
const homeBtn = document.getElementById("homeBtn");
const lockedBtn = document.getElementById("lockedBtn");
const lockedPage = document.getElementById("lockedPage");
const bodyNoteContents = document.getElementById("bodyNoteContents");
const bodyMenuFeat = document.getElementById("bodyMenuFeat");
const updateBtn = document.getElementById("updateBtn");
const updatePage = document.getElementById("updatePage");
const howToUseBtn = document.getElementById("howToUseBtn");
const howToUsePage = document.getElementById("howToUsePage");
const menuDropdownConts = document.getElementById("menuDropdownConts");
const floatsPanel = document.getElementById("floatsPanel");
const secAddBtn = document.getElementById("secAddBtn");


createBtn.addEventListener('click', ()=>{
    createPage.style.display = 'block';
    previewPage.style.display = "none";
    document.getElementById('title').focus();
})
secAddBtn.addEventListener('click', ()=>{
    createPage.style.display = 'block';
    previewPage.style.display = "none";
    document.getElementById('title').focus();
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

//feature not yet added
/* appendBtn.addEventListener('click', ()=>{
    setTimeout(()=>{
        setTimeout(()=>{
            changesSaveMgs.style.display = 'none';
        }, 3000)
        changesSaveMgs.style.display = 'block';
    }, 500)
}) */

//title & paragraph heights using js
title.addEventListener('input', () => {
    title.style.height = 'auto';
    title.style.height = title.scrollHeight + 'px';
});

paragraph.addEventListener('input', () => {
    paragraph.style.height = 'auto';
    paragraph.style.height = paragraph.scrollHeight + 'px';
});

//welcome page
/* const welcomeScreen= document.getElementById('welcomeScreen');

setTimeout((!sessionStorage.getItem('divShown')) = ()=>{
    welcomeScreen.style.display = 'none';
    sessionStorage.setItem('divShown', true);
}, 2000)
 */

//reloading page once note is deleted
const deleteBtn = document.querySelectorAll('.deleteBtn');
deleteBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=> {
/*         location.reload(); */
        setTimeout(()=>{
            location.reload();
        }, 200)
}
    )
})

//reloading page once is created
closeBtn.addEventListener('click', ()=>{
    /* location.reload(); */
    document.body.opacity = 0;
    setTimeout(()=>{
        location.reload();
    }, 300);
})

//drop-down menu

menuHub.addEventListener('click', ()=>{
    menuDropdown.style.display = 'none' ? 'block' : 'none';
})

//closing drop-down menu
document.addEventListener('click', (event)=>{
    if(!BurgarBtn.contains(event.target)){
        menuDropdown.style.display = 'none';
    }
})


//drop-down menu features
homeBtn.addEventListener('click', ()=>{
    previewPage.style.display = 'block';
    bodyNoteContents.style.display = "block"
    bodyMenuFeat.style.display = "none";
    createPage.style.display = 'none';
    editPage.style.display = 'none';
    //menu dropdown
    menuDropdown.style.display = 'none';
})

trashBtn.addEventListener('click', ()=>{
    trashPage.style.display = "block";
    lockedPage.style.display = 'none';
    howToUsePage.style.display = 'none';
    updatePage.style.display = 'none';
    bodyMenuFeat.style.display = 'block';
    bodyNoteContents.style.display = 'none';
    //menu dropdown
    menuDropdown.style.display = 'none';
})

lockedBtn.addEventListener('click', ()=>{
    lockedPage.style.display = 'block';
    trashPage.style.display = "none";
    howToUsePage.style.display = 'none';
    updatePage.style.display = 'none';
    bodyMenuFeat.style.display = 'block';
    bodyNoteContents.style.display = 'none';
    //menu dropdown
    menuDropdown.style.display = 'none';
})

howToUseBtn.addEventListener('click', ()=>{
    howToUsePage.style.display = 'block';
    lockedPage.style.display = 'none';
    trashPage.style.display = "none";
    updatePage.style.display = 'none';
    bodyMenuFeat.style.display = 'block';
    bodyNoteContents.style.display = 'none';
    //menu dropdown
    menuDropdown.style.display = 'none';
})

updateBtn.addEventListener('click', ()=>{
    updatePage.style.display = 'block';
    lockedPage.style.display = 'none';
    trashPage.style.display = "none";
    howToUsePage.style.display = 'none';
    bodyMenuFeat.style.display = 'block';
    bodyNoteContents.style.display = 'none';
    //menu dropdown
    menuDropdown.style.display = 'none';
})



//close & save repositioning due to keyboard (AHelp)
    window.visualViewport.addEventListener('resize', () => {
    const keyboardHeight = window.innerHeight - window.visualViewport.height;

    if (keyboardHeight > 0) {
        floatsPanel.style.bottom = `${keyboardHeight}px`;
    } else {
        floatsPanel.style.bottom = '20px'; 
    }
  });
