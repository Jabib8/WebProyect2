var Update = Update || {
	updateClient: function()
	{	

		//variable para leer lo del local storage
		var object2 = JSON.parse(localStorage.getItem('Ul'));
		//ciclo para imprimir todo lo guardado
		for (var i = 0; i < object2.clients.length; i++) {
		//modificar un elemento
		object2.clients[i].lastName = "Fonseca";
		//alert(object2.employees[i].firstName + " " + object2.employees[i].lastName);
	},
	fila: function(x){
		localStorage.setItem('fila', x);
		alert(localStorage.getItem('fila'));
       // var mensaje = 'La celda está situada en la fila '+x;
        return mensaje;
    },

};