const express = require("express");
const path = require("path");
const expressHbs = require("express-Handlebars");

const app = express();
const homeRouter = require("./routes/Home");
const compareHelpers = require("./helpers/hbs/compare");

app.engine("hbs", expressHbs({helpers:{diferentElement: compareHelpers.diferentElement, vacio: compareHelpers.vacio,tema: compareHelpers.tema}}));
app.set("view engine", "hbs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "Public")));

app.use(homeRouter);

app.use((req,res,next)=>{
    res.status(404).render("404",{layout:false});
});


app.listen(3000);