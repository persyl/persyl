onmessage = function(e){
	var msg = e.data;
	postmessage('Worker is responding on ' + msg + '!!!');
};

postmessage('Worker is here!');