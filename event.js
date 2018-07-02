var callback = function callback (response) {
response.on('event', function show () { console.log(abc);})
}
//test up stream

callback.end();
