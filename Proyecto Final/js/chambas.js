var tex ;
var Chamba = Chamba || {
	agregarChamba: function()
	{	
		var ob;
		if (localStorage.getItem('ch')==null || localStorage.getItem('ch')=="") 
		{
			tex='{"Chambas":[]}';
			ob = JSON.parse(tex);
		}
		else
		{
			ob=JSON.parse(localStorage.getItem('ch'));
		}
		//este mae agrega otro nuevo elemento		
		ob ['Chambas'].push({"id":document.getElementById('id_chamba').value,"client":document.getElementById('client_chamba').value,"descript":document.getElementById('descripcion_chamba').value,"date":document.getElementById('date_chamba').value,"notes":document.getElementById('notes_chamba').value});
		//lo convierte a objeto text
		tex = JSON.stringify (ob);
		//de nuevo a parse del nuevo elemento
		ob = JSON.parse(tex);
		//lo guarda en local storage
		localStorage.setItem('ch', JSON.stringify(ob));
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
llenarChamba: function()
{
	if (localStorage.getItem('ch')==null || localStorage.getItem('ch')=="") 
	{
		alert('No hay chambas guardadas.');
	}
	else
	{
		var object2 = JSON.parse(localStorage.getItem('ch'));
		//ciclo para imprimir todo lo guardado
		for (var i = 0; i < object2.Chambas.length; i++) {
			var tbl = document.getElementById('table_chamba');
			var lastRow = tbl.rows.length;
			var row = tbl.insertRow(lastRow);
			var id = row.insertCell(0);
			var full = row.insertCell(1);
			var description = row.insertCell(2);
			var date = row.insertCell(3);
			var notes = row.insertCell(4);
			var actions = row.insertCell(5);
			id.innerHTML = object2.Chambas[i].id;
			full.innerHTML = object2.Chambas[i].client;
			description.innerHTML= object2.Chambas[i].descript;
			date.innerHTML= object2.Chambas[i].date;
			notes.innerHTML= object2.Chambas[i].notes;
			actions.innerHTML="<a  href='edit_client.html'><img  id='editar' src='edit.png'/> </a> <a  href='delete_client.html'><img  id='editar' src='delete.png'/> </a>";
			};

		}
	}
};
