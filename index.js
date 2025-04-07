import express from "express"
import path from "path"
import { fileURLToPath } from "url";
import fs from "fs"
import sqlite3 from 'sqlite3'
import {open} from 'sqlite' 
import { error } from "console";

const db = await open({
  filename: "./database.db",
  driver: sqlite3.Database
})

await db.exec(`
  CREATE TABLE IF NOT EXISTS note (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  body TEXT
  ) 
  `)

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

app.post("/save",async (req, res) => {
    const {titleData, paragraphData} = req.body
    console.log(titleData, paragraphData)
    try{
      const results = await db.run(`
        INSERT INTO note (title, body) VALUES (?, ?)
        `, [titleData, paragraphData])
        console.log(results)
        res.json('data received')
    }
    catch(err){
      console.log(err)
      res.status(500).json({
        'message': err
      })
    }
  })

app.delete('/notes/:titleFromData', (req, res)=>{
  let titleFromData = req.params.titleFromData
  fs.unlink(`./notes/${titleFromData}.md`,(err)=>{
    if(err){
      res.status(500).send('file deleted!')
    } else{
      res.status(200)
    }
  })
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
app.get("/note/:id", async (req, res)=>{
  const id = req.params.id
  try {
    const NotesData = await db.get(`
      SELECT * FROM note WHERE id = ?
      `, [id])
      console.log(NotesData)
      res.render("data", {
        data: NotesData,
      }) 

  } catch (error) {
    
console.log(error)  }
})

app.get('/test', (req, res)=>{


res.send(req.query.q)
})


//url path defined
app.get("/notepad", async (req, res) => {
  try {
    const Notes = await db.all(`
      SELECT * FROM note
      `)
      console.log(Notes)
      res.render("notepad", {
        notePath: Notes,
      }) 

  } catch (error) {
    
console.log(error)  }
});


 

//listing to port & printing response on clg
app.listen(4750, (req, res)=>{
    console.log('Application is in service!')
})
