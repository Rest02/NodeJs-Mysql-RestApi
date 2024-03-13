import { request } from "express";
import {pool} from '../db.js'

export const getEmployees = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM employee")
    res.send(rows)
};

export const createEmployee = async (req, res) => {
    const {name , salary} = req.body
    const [rows] = await pool.query("INSERT INTO employee(name , salary) VALUES(?,?)", [name , salary])
    res.send({
        id: rows.insertId,
        name, 
        salary
    })
};

export const updateEmployee = (req, res) => res.send("Actualizando empleados");

export const deleteEmployee = (req, res) => res.send("Eliminando empleados");
