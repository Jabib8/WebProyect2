var text = '{"clients":[]}';
var Util = Util || {
	agregarClient: function()
	{	
		var obj;
		if (localStorage.getItem('Ul')=="") 
		{
			text='{"clients":[]}';
			obj = JSON.parse(text);
		}
		else
		{
			obj=JSON.parse(localStorage.getItem('Ul'));
		}
		//este mae convierte a string la variable global llamada text		
		
		//este mae agrega otro nuevo elemento		
		obj ['clients'].push({"firstName":document.getElementById('first_name_client').value,"lastName":document.getElementById('last_name_client').value,"id":document.getElementById('id_client').value,"phone":document.getElementById('phone_client').value});
		//lo convierte a objeto 
		text = JSON.stringify (obj);
		//de nuevo a parse del nuevo elemento
		obj = JSON.parse(text);
		//lo guarda en local storage
		localStorage.setItem('Ul', JSON.stringify(obj));
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
llenartabla: function()
{
	var object2 = JSON.parse(localStorage.getItem('Ul'));
		//ciclo para imprimir todo lo guardado
		for (var i = 0; i < object2.clients.length; i++) {
			var tbl = document.getElementById('tableclient');
			var lastRow = tbl.rows.length;
			var row = tbl.insertRow(lastRow);
			var id = row.insertCell(0);
			var fullname = row.insertCell(1);
			var phone = row.insertCell(2);
			var actions = row.insertCell(3);
			id.innerHTML = object2.clients[i].id;
			fullname.innerHTML = object2.clients[i].firstName+" "+object2.clients[i].lastName;
			phone.innerHTML = object2.clients[i].phone;
			actions.innerHTML="<a  href='edit_client.html'><img  id='editar' src='edit.png'/> </a> <a  href='delete_client.html'><img  id='editar' src='delete.png'/> </a>";
			};

		}
	};
