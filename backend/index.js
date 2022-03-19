const express = require("express");
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser')

const db = require("./database");

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.post("/yieldyak_aave_avax" , (req, res) => {
    
    const { blocknumber, reward } = req.body;

    if (typeof(blocknumber) != "string" || typeof(reward) != "string") {
        res.status(418).send({message: `No blocknumber or reward ${typeof(reward)}`})
    } else {
        try {
            db.promise().query(`INSERT INTO yieldyak_aave_avax VALUES(${blocknumber}, ${reward})`);
            res.status(201).send({msg: "Reward added"});
        } catch (err) {
            console.log(err);
        }
    }


});

app.listen(
    PORT,
    () => console.log(`Its alive on http://localhost:${PORT}`)
)