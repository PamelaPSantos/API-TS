import startUp from "./startUp";

let port = 5000

startUp.app.listen(port, function (){
  console.log(`servidor rodando na porta: ${port}`)
})