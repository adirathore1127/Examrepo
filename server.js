const express  = require('express')
const cors = require ('cors')
const mysql = require('mysql')
// const Routes1 = require('./routes/login');
const appforlogin = express.Router();

const db = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'manager',
database : 'examdb' 
});

const app = express()
app.use(cors('*'))
app.use(express.json())

app.get('/',(request,response)=>{
    response.send('welcome to the my APIs testing products')
})

app.get('/mov',(request,response)=>{
    const statement = `select * from Employee_Tb`
    db.query(statement,(error,data)=>{
        if(error){
            response.send('error......')    
        }
        else{
            response.send(data);
        }
    })
})

app.post("/", (request, response)=>{;
    var query = 
    `insert into Employee_Tb(e_name,email,password,emp_id,dname,doj) values('${request.body.e_name}','${request.body.email}','${request.body.password}',${request.body.emp_id},'${request.body.dname}',${request.body.doj})`;

    db.query(query, (error, result)=>{
        if(error==null)
        {
            var data = JSON.stringify(result) 
            response.setHeader("Content-Type","application/json");
            response.write(data);
        } 
        else
        {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error)
        }
        response.end();
})
})

app.put("/:id", (request, response)=>{
    var query1 = `update Employee_Tb set dname = '${request.body.dname}', doj = '${request.body.doj}' where id = ${request.params.id}`;
    db.query(query1, (error, result)=>{
        if(error == null){
            var data = JSON.stringify(result);
            response.setHeader("Content-Type", "application/json");
            response.write(data);
        } else {
            console.log(error);
            response.write(error);
        }
        response.end();
    });
});


app.delete("/:id", (request, response)=>{
    console.log("Data Received is as below..")
    console.log(request.params)
    var query = 
    `delete from Employee_Tb where id = ${request.params.id}`;
                    
    db.query(query, (error, result)=>{
                        if(error==null)
                        {
                            var data = JSON.stringify(result) 
                            response.setHeader("Content-Type","application/json");
                            response.write(data);
                        } 
                        else
                        {
                            console.log(error);
                            response.setHeader("Content-Type","application/json");
                            response.write(error)
                        }
                        response.end();
                })
})

app.listen(4100,'0.0.0.0',()=>{
    console.log('served started on port 4100')
})
