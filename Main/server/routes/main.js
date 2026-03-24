const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// HOME 
router.get('/', async (req, res) => {
    const locals = {
        title: "Blog Escultismo Crítico Popular",
        description: "Este blog es para poner cosas cool"
    }

    try {
  const data = await Post.find();
  res.render('index', { locals, data });
    }catch (error){
console.log(error)
    }

    
});







// Main 

router.get('/home', (req, res) => {
  res.render('home');
});

router.get('/nosotros', (req, res) => {
  res.render('nosotros');
});

router.get('/centros', (req, res) => {
  res.render('centros');
});

router.get('/contacto', (req, res) => {
  res.render('contacto');
});

// FOOTER

router.get('/politica', (req, res) => {
  res.render('politica');
});

router.get('/transparencia', (req, res) => {
  res.render('transparencia');
});

module.exports = router;