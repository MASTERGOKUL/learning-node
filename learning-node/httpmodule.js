var http=require('http');
http.createServer( function(req,res){
    res.writeHead(200,{"content-type":"text/plan"});
    res.write("welcome")
    res.end('\n thankyou')}
).listen(8080);