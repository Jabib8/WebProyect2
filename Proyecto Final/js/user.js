var tex ;
var Usuario = Usuario || {
	agregarUser: function()
	{	
		var ob;
		if (localStorage.getItem('User')==null || localStorage.getItem('User')=="") 
		{
			tex='{"User":[]}';
			ob = JSON.parse(tex);
		}
		else
		{
			ob=JSON.parse(localStorage.getItem('User'));
		}
		ob ['User'].push({"fullname":document.getElementById('user_name').value,"username":document.getElementById('name_user').value,"pasword":document.getElementById('pasword_repeat').value});
		//lo convierte a objeto text
		tex = JSON.stringify (ob);
		//de nuevo a parse del nuevo elemento
		ob = JSON.parse(tex);
		//lo guarda en local storage
		localStorage.setItem('User', JSON.stringify(ob));
	},
	deleteClient: function()
	{	

		//variable para leer lo del local storage
		//var object2 = JSON.parse(localStorage.getItem('Ul'));
		//ciclo para imprimir todo lo guardado
		//for (var i = 0; i < object2.clients.length; i++) {
		//	alert(object2.clients[i].firstName + " " + object2.clients[i].lastName);
		//elimina un objeto
		//delete object2.clients[i];
		//modificar un elemento
		//object2.clients[i].lastName = "Fonseca";
		//alert(object2.employees[i].firstName + " " + object2.employees[i].lastName);	

	},
	updateClient: function()
	{	

		//variable para leer lo del local storage
		var object2 = JSON.parse(localStorage.getItem('Ul'));
		//ciclo para imprimir todo lo guardado
		for (var i = 0; i < object2.clients.length; i++) {
		//modificar un elemento
		object2.clients[i].lastName = "Fonseca";
		//alert(object2.employees[i].firstName + " " + object2.employees[i].lastName);
	};

},
llenarUser: function()
{
	if (localStorage.getItem('User')==null || localStorage.getItem('User')=="") 
	{
		alert('No hay usuarios guardadas.');
	}
	else
	{
		var object2 = JSON.parse(localStorage.getItem('User'));
		//ciclo para imprimir todo lo guardado
		for (var i = 0; i < object2.User.length; i++) {
			var tbl = document.getElementById('table_user');
			var lastRow = tbl.rows.length;
			var row = tbl.insertRow(lastRow);
			var full = row.insertCell(0);
			var username = row.insertCell(1);
			var pasword = row.insertCell(2);
			var actions = row.insertCell(3);
			full.innerHTML = object2.User[i].fullname;
			username.innerHTML = object2.User[i].username;
			pasword.innerHTML= object2.User[i].pasword;
			actions.innerHTML="<a  href='edit_client.html'><img  id='editar' src='edit.png'/> </a> <a  href='delete_client.html'><img  id='editar' src='delete.png'/> </a>";
			//actions.innerHTML="<img src='edit.png' href='edit_client.html'/> <img src='delete.png' href='delete_client.html'/>";
			};


		}
	}
};
