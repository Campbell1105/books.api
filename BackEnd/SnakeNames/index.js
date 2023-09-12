let http = require("http")
const snakeNames = require('snake-names');

let http = http.createServer(function(req, res){
    res.write("hello")
    res.end()
})

let namePicked = snakeNames.random()

console.log("you should name this snake: ", namePicked)

Server.listen(3000, function(){
    console.log("awake")
})