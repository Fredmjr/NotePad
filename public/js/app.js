const title = document.querySelector('#title');
const paragraph = document.querySelector('#paragraph');

function send (){
    let data = {
        titleData: title.value,
        paragraphData: paragraph.value
    };
5
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