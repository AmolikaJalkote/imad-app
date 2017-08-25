var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
               ${date}
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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
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

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
