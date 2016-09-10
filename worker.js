onmessage = function(e){
	var msg = e.data;
	postMessage('Worker is responding on ' + msg + '!!!');
};

postMessage('Worker is here!');