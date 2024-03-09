import express from "express";
import {pool} from './db.js'

const app = express();

app.get("/ping" , async (req, res) => {
  const [result] = await pool.query("SELECT 1+1 AS RESULT")
  res.send(result[0])
})

app.get("/employees", (req, res) => {
  res.send("Obteniendo empleados");
});

app.post("/employees", (req, res) => {
  res.send("Creando empleados");
});

app.put("/employees", (req, res) => {
  res.send("Actualizando empleados");
});

app.delete("/employees", (req, res) => {
  res.send("Eliminando empleados");
});

app.listen(3000);
console.log("Servidor corriendo en el puerto 3000");
