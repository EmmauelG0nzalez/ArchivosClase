const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.get('/app/greet',(req,res)=>{
    res.json({message: 'Esta es la primer API!'});
});

app.listen(PORT,()=>{
    console.log('Servidor corriendo en http://localhost: ${PORT}');
});
app.use(express.json());
let estudiantes =[
    {id:1, nombre: 'Juan Pérez'},
    {id:2, nombre: 'Monica Gómez'},
    {id:3, nombre: 'José Ruiz'}
];
app.get('/estudiantes',(req,res)=>{
    res.json(estudiantes);
});
app.get('/estudiantes/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const estudiante = estudiantes.find(e=> e.id===id);
    if  (estudiante){
        res.json(estudiante);
    } else{
        res.status(404).send('Estudiante no encontrado');
    }
});
opp.post('/estudiante',(req,res)=>{
    const nuevoestudiante ={
        id:estudiantes.length+1,
        nombre:req.body.nombre
    };
    estudiantes.push(nuevoestudiante);
    res.status(201).json(nuevoestudiante);
});
app.put('/items/:id',(req,res)=>{
    const id = parseInt(req.params,id);
    const item = items.find(i=>i.id===id);
    if(item){
        item.name=req.body.name;
        res.json(item);
    }else{
        res.status(404).send('Item no encontrado');
    }
});
// Delete: eliminar un item por id
app.delete ('/estudiantes/:id',(req,res)=>{
    const id = parseInt (req.params.id);
    const index = estudiantes.findIndex (i=>i.id===id);
    if (estudiante!==-1){
        estudiantes.splice(index,1);
        res.send('estudiante eliminado');
    } else 
        res.status(404).send('estudiante no encontrado');
})
