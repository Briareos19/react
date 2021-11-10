//se puede crear variable const o dejar que el sistema lo haga
let express = require("express"),
cors = require("cors"),
mongoose = require("mongoose"),
database = require("./database"),
bodyParser = require("body-parser"); 
const app = express();

var corsOptions={
  origin:'*',
  optionSuccessStatus:200
}

app.use(cors(corsOptions));

const productAPI = require("./routes/product.route");
const userAPI = require("./routes/user.route");
const msgAPI = require("./routes/msgContact.route");
const rutas= require("./routes/rutas");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Connect mongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useFindAndModify: false, 
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database could't be connected to: " + error);
    }
  );

  const history = require('connect-history-api-fallback'); 
  app.use(history());
  app.use(express.static(__dirname + '/public'));


//usado para el heroku
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// API
app.use("/api", productAPI);
app.use("/apiuser", userAPI);
app.use("/apimsg", msgAPI);
app.use("/apiroutes", rutas);


app.get("/", ( req, res)=> {
  const datos={
      msg: 'Base ATLAS',
      status: false
  }
  res.send ( datos)
})

// Create port -promesa-

/* const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
}); */


//puerto para usar en heroku

app.set("PORT", process.env.PORT || 3000);
app.listen(app.get("PORT"), ()=>{
 console.log(`Server started on port: ${app.get("PORT")}`);
});


// Find 404
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
