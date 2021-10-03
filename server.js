const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {

    const items = [{
            title: "D",
            message: "DEMAAAAAAAACIAAAAAAA"
        },
        {
            title: "E",
            message: "EEEEEETAA PEAOOOO"
        },
        {
            title: "M",
            message: "MAOOOEEEEEE"
        },
        {
            title: "A",
            message: "ABLUBLUBLé"
        }
    ];

    const subtitle = "Texto para subtitulo";

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle
    });
});

app.get("/about", function(req, res) {
    res.render("pages/about");
});

app.listen(8080);

console.log("rodando");