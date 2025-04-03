import express from "express"
import path from "path"
import { fileURLToPath } from "url";
import fs from "fs"

const app = express();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
//hbs engine set fro broswers
  app.set("view engine", "hbs")

//serving static files to browser
  app.set("/views", path.join(__dirname, 'views'))
  app.use(express.static(path.join(__dirname, "/views")))
  app.use(express.static('views'));
  app.use(express.static('public'));

  app.use(express.json())
//making a path or a digital path map location of where your desired folder should be.
// And also checking if there is a specific folder in that path, if not we make one.
//chcek on the folder panel(left side of vs code) if the desired folder is created
const fileDir = path.join(__dirname, 'notes')
if(!fs.existsSync(path.join(__dirname, 'notes'))){
  fs.mkdirSync(path.join(__dirname, 'notes'))
}

app.post("/save", (req, res) => {
    const {titleData, paragraphData} = req.body
    const fileContent = `<p>${titleData}</p>\n<p>${paragraphData}</p>`

    fs.writeFile(`./notes/${titleData}.md`, fileContent, (err)=>{
      console.log(err)
    })

    res.json("data received!")
  })

//redading the file specified in the file path
app.get('/read/:titleData', (req, res)=>{
  //just a combination of folder name & specified file name with extention (.md)
  let comboFilePath = path.join(fileDir, `${req.params.titleData}.md`)
  //after combination we read the file and send it as a response to the client
  fs.readFile(comboFilePath, 'utf-8', (err, data)=>{
    if(err){
      console.log(err)
    }
    res.send(data)
  } )
})
 

//reading data
app.get("/read/:titleData", (req, res)=>{
  let titleDataPath = path.join('/notes', `${req.params.titleData}.md`)
  fs.readFile(titleDataPath,"utf-8", (err, data)=>{
    if (err){
      console.log(err)
    }
    console.log(data)
    res.send(data)
  } )
})
app.get("/list",)
app.get('/test', (req, res)=>{


res.send(req.query.q)
})


//url path defined
app.get("/notepad", (req, res) => {
  //a simple directory defining
      //make empty array, loop to get all files with .md stored them in that array. (ET.help AI)
    const filePaths = [];
    fs.readdir("./notes", (error, files) => {
    files.forEach((file) => {
    const fileName = path.basename(file, '.md');
    filePaths.push(fileName);
  });
  console.log(filePaths);
});

//assign array to a variable name (for easy readability) 
    res.render("notepad", {
      notePath: filePaths,
    })
  })


 

//listing to port & printing response on clg
app.listen(4000, (req, res)=>{
    console.log('Application is in service!')
})
