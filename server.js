
var express = require("express");
var axios = require('axios');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');


const execute = require('./connection');


var http = require('http').Server(app);
//var io = require('socket.io')(http);
var io = require('socket.io')(http, { cors: { origin: '*' } });


const cors = require('cors');
const { exec } = require("child_process");
app.use(cors({
    origin: '*'
}));


const PORT = process.env.PORT || 2024;

//app.use(bodyParser.json());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));


app.use(express.static('build'));

var path = __dirname + '/'

//manejador de rutas
router.use(function (req,res,next) {
  
  next();
});




app.get("/",function(req,res){
  
	res.sendFile(path + 'index.html');
  
}); 



app.get("/login",function(req,res){
  res.redirect('/');
}); 

app.post("/clientes", function(req, res) {


  let qry = `SELECT CODCLIENTE,EMPNIT,DPI,NOMBRE,DIRECCION,CODMUN,CODDEPTO,TELEFONO,EMAIL,FECHANACIMIENTO,LATITUD,LONGITUD,CATEGORIA,CODRUTA,SALDO,FECHAINICIO,HABILITADO,DIAVISITA,LIMITECREDITO,DIASCREDITO,REFERENCIA,LASTSALE
            FROM CLIENTES`;


  execute.Query(res,qry)
})

app.post("/insert_clientes", function(req, res) {

  let qry = `
        INSERT INTO CLIENTES
        (CODCLIENTE,EMPNIT,DPI,NIT,NOMBRE,DIRECCION,CODMUN,CODDEPTO,TELEFONO,EMAIL,FECHANACIMIENTO,LATITUD,LONGITUD,CATEGORIA,CODRUTA,SALDO,FECHAINICIO,HABILITADO,DIAVISITA,LIMITECREDITO,DIASCREDITO,REFERENCIA,LASTSALE)
        VALUES
        ('${codcliente}','${empnit}','${dpi}','${nit}','${nombre}','${direccion}','${codmun}','${coddepto}','${telefono}','${email}','${fechanacimiento}',0,0,'${categoria}','${codruta}','${saldo}','${fechainicio}','${habilitado}','${diavisita}','${limitecredito}','${diascredito}','${referencia}','${lastsale}')
  `;

  execute.Query(res,qry);

  console.log(qry);

})




app.use("/",router);

app.use("*",function(req,res){
  res.redirect('/');
  //res.send('<h1 class="text-danger">NO DISPONIBLE</h1>');
});



http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

