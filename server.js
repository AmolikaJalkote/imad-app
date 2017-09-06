var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto=require('crypto');

//--to connect to the database.
var Pool=require(pg).Pool;

var config={
  user:'amolikajalkote',
  database:'amolikajalkote',
  host:'db.imad.hasura.io',
  port:'5432',
  password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var articles={
'article-one' :{
    title:'Article-One',
    heading:' Article-one | amolika_j',
    date: 'Augest 20 ,2017',
    content:
    `
                <p>
                    This is what i'm trying it out! :D
                    First try! just coding in HTML..Follow my  quotes.
                </p>
                
                 
               <ol>
                    <li>
                        data, facts, intelligence, advice. 
                    </li>
                    <li>
                         Information, knowledge, wisdom are terms for human acquirements through reading, study, and practical experience.
                    </li>
                </ol>
                <p> Information applies to facts told, read, or communicated that may be unorganized and even unrelated: to pick up useful information. Knowledge is an organized body of information, or the comprehension and understanding consequent on having acquired and organized a body of facts: a knowledge of chemistry. Wisdom is a knowledge of people, life, and conduct, with the facts so thoroughly assimilated as to have produced sagacity, judgment, and insight: to use wisdom in handling people.
               </p>`
               },
               
'article-two':{
    title:'Article-Two',
    heading:' Article-two | amolika_j',
    date: 'Augest 20 ,2017',
    content:
    `
                <p>
                    This is what i'm trying it out! :D
                    First try! just coding in HTML..Follow my  quotes.
                </p>
                
                 
               <ol>
                    <li>
                        data, facts, intelligence, advice. 
                    </li>
                    <li>
                         Information, knowledge, wisdom are terms for human acquirements through reading, study, and practical experience.
                    </li>
                </ol>
                `
},
'article-three':{
    heading:'Article-Three',
    title:' Article-three | amolika_j',
    date: 'Augest 20 ,2017',
    content:
    `
                <p>
                    This is what i'm trying it out! :D
                    First try! just coding in HTML..Follow my  quotes.
                </p>
                
             `
},
};
function createTemplate (data)
{
    var date=data.date;
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    
var htmltemplate=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <style>
          .c1{
               margin:0 auto;
             
              max-width: 500px;
               color:gray;
               font-family:san-serif;
           } 
        </style>
    </head>
    <body>
        <div class="c1">
            <div>
                <a href="/ui/madi.png">Home</a>
            </div>
            <hr/>
            <h3>${heading}</h3>
            <div>
               ${date.toDateStrig()}
            </div>
            <div >
                ${content}
            </div>
        </div>
    </body>
</html>

    `;
    return htmltemplate;
}


function hash(input,salt){
    //how do we create a hash?
    var hashed=crypto.pbkdf2Sync(input,salt,10000,512,'sha512');//10000 is no. of iterations
   // return hashed;//outputs sequence of bytes.
   return hashed.toString('hex');
   //pbkdf2Sync() function takes our i/p,appends the value to the salt and applies hash function 10000v times
   //pbkdf is Password based Key Derivation Function.
}

app.get('/hash/:index',function(res,req){
    var hashedString=hash(req.params.input,'this-is-some rande string');
    res.send(hasedString);
});


//function to create a new user
app.get('/create-user',function(req,res){
    //takes usernme and password and entries it in uservtable of DB.
    
})


var counter=0;
app.get('/counter',function(req,res){
   counter=counter + 1;
   res.send(counter.toString());
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

//--connecting the POOL
var pool=new Pool(config);

app.get('/test-db',function(req,res){
    //make select request
    //return a result with respose
    pool.query('select* from test',function(err,result){
       if(err){
           res.status(500).send(err.toString())
       } else{
        //   res.send(JSON.stringify(result));
          // res.send(JSON.stringify(result.rows));
          if(result.rows.length===0){
              res.status(404).send("Article not found");
          }else{
              var articleData=result.rows[0];
              res.send(createTemplate(articleData));
          }
       }
    });
});

app.get('/articles/:articleName',function(req,res){
   // var articleName=req.params.articleName;
    //res.send(createTemplate(articles[articleName]));
    //var articleData;//will have values from DB.
   // pool.query("select* from article where title='article-one'");
    pool.query("select* from article where title='" + req.params.articleName+"'",function(err,result){
        if(err){
            
        }else{
            
        }
    });
   res.send(createTemplate(articleData));
   
   
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80
var names=[];
app.get('/submit/:name',function(req,res){
//get name from request object
    //var name=req.params.name;
    var name=req.query.name;
    names.push(name);
    //JSON:Javascript Object Notation:Converts js object into strings.
    res.send(JSON.stringify(names));
});
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

