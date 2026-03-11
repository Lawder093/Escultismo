

const express = require ('express');
const router = express.Router();

//routes 
router.get('/', (req, res) => {
const locals = {
    title: " Blog Escultismo Crítico Popular",
    description: "Este blog es para poner cosas cool"
}
    res.render('index', {locals} )
});

// Nosotros
router.get('/nosotros', (req, res) => {
  res.render('nosotros');
});

// Blog
router.get('/index', (req, res) => {
  res.render('index');
});



// Politica
router.get('/politica', (req, res) => {
  res.render('politica');
});


module.exports = router;
