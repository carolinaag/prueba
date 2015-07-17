//Ejercicio modulo 4

var express = require('express');

var app =express();

//

 app.get('/preguntas', function (req, res){
   res.send('<html>'
    +'<head>'
    +'<meta charset="UTF-8">'
    +'<title>Preguntas </title>'
    +'</head>'
    +'<body>'
    +'<form name="form1" method="get" action="/respuesta">'
    +'¿Quién descubrió America?: <br>'
    +'<input type="hidden" name="p1" value="1"/>'
    +'<input type="text" name="pregunta1"/>'
    +'<input type="submit" value="Enviar"/>'
    +'</form>'
    +'<br>'
    +'<form name="form2" method="get" action="/respuesta">'
    +'Capital de Portugal: <br>'
    +'<input type="hidden" name="p2" value="2"/>'
    +'<input type="text" name="pregunta2"/>'
    +'<input type="submit" value="Enviar"/>'
    +'</form>'
    +'</body>'
    +'</html>'
   );
     
  });
  
  app.get('/respuesta', function(req, res, next){
      if(req.query.p1 === "1"){
          var aux = req.query.pregunta1;
          if(aux.toLowerCase() === "cristobal colon"){
             res.send("Respuesta correcta"
        + "<br><a href='https://mod4-carolinaag.c9.io/preguntas'>volver</a>"); 
          }
          else{
            res.send("Respuesta incorrecta, la respuesta es Cristobal Colon"
            + "<br><a href='https://mod4-carolinaag.c9.io/preguntas'>volver</a>");
          }
      } 
      else{
      next();
      }
   });
   
     app.get('/respuesta', function(req, res){
      if(req.query.p2 === "2"){
         var aux = req.query.pregunta2;
          if(aux.toLowerCase() === "lisboa"){
             res.send("Respuesta correcta"
        + "<br><a href='https://mod4-carolinaag.c9.io/preguntas'>volver</a>"); 
          }
          else{
            res.send("Respuesta incorrecta, la respuesta es Lisboa"
            + "<br><a href='https://mod4-carolinaag.c9.io/preguntas'>volver</a>");
          }
      } 
      
   });
   
 
   
  
   

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");