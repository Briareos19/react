const express = require("express");
const ruta = express.Router();

let modeloDatos = require("../models/modelo");

ruta.get('/',(req, res) => {
    modeloDatos.find((error, data, next) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });
  
  const bcrypt = require('bcrypt');

  ruta.post('/registrar',async (req, res, next) => {
    const emailExist=await modeloDatos.findOne({email:req.body.email})
    if(emailExist){{
      return res.status(400).json({error: 'emmail registrado'})
    }}
    const encryp=await bcrypt.genSalt(10);
    const password=await bcrypt.hash(req.body.password, encryp);
    console.log(password)
    const user=new modeloDatos({
      name:req.body.name,
      apellido:req.body.apellido,
      email:req.body.email,
      phone:req.body.phone,
      pais:req.body.pais,
      ciudad:req.body.ciudad,
      direccion:req.body.direccion,
      clasificacion:req.body.clasificacion,
      password: password
    })

    modeloDatos.create(user, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });

  ruta.get("/editar/:id",(req, res) => {
    modeloDatos.findById(req.params.id, (error, data, next) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });

  ruta.put("/actualizar/:id",(req, res, next) => {
    modeloDatos.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          console.log(error);
          return error;
        } else {
          res.json(data);
          console.log("Usuario successfully updated!");
        }
      }
    );
  });

  ruta.delete("/eliminar/:id",(req, res, next) => {
    modeloDatos.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    });
  });
  
  ruta.post('/login',async (req, res, next) => {
    const jwt=require('jsonwebtoken')
    const user=await modeloDatos.findOne({
      email:req.body.email
    })
    if(!user){
      return res.status(404).json({
        error:'El usuario no esta registrado'
    }) 
  }

    const validPass = await bcrypt.compare(req.body.password,user.password)

    if(!validPass){
      return res.status(401).json({
        error:'La contraseña no es valida'
      })
    }

    /* res.json({
      error:null,
      data:'inicio valido'
    }) */

    const token =jwt.sign({
      email:user.email,
      id:user._id
    },"claveSecreta")

    res.header('auth-token', token).json({
      error:'acceso exitoso',
      data:{token},
      
    })
    console.log(token);


     })






  module.exports = ruta;