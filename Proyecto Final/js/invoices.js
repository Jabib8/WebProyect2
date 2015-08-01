var tex ;
var Invoice = Invoice || {
	agregarInvoice: function()
	{	
		var o;
		if (localStorage.getItem('inv')==null || localStorage.getItem('inv')=="") 
		{
			tex='{"Invoices":[]}';
			o = JSON.parse(tex);
		}
		else
		{
			o=JSON.parse(localStorage.getItem('inv'));
		}
		//este mae agrega otro nuevo elemento		
		o ['Invoices'].push({"id":'1',"client":document.getElementById('client_invoice').value,"descript":document.getElementById('description_invoice').value,"mount":document.getElementById('mount_invoice').value});
		//lo convierte a objeto text
		tex = JSON.stringify (o);
		//de nuevo a parse del nuevo elemento
		o = JSON.parse(tex);
		//lo guarda en local storage
		localStorage.setItem('inv', JSON.stringify(o));
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
llenarInvoice: function()
{
	if (localStorage.getItem('inv')==null || localStorage.getItem('inv')=="") 
	{
		alert("No hay elementos en esta tabla para mostrar.");
	}
	else
	{
		var object2 = JSON.parse(localStorage.getItem('inv'));
	//alert(object2.Invoices.length+"  cantida filas");
		//ciclo para imprimir todo lo guardado
		for (var i = 0; i < object2.Invoices.length; i++) {
			var tbl = document.getElementById('table_invoices');
			var lastRow = tbl.rows.length;
			var row = tbl.insertRow(lastRow);
			var id = row.insertCell(0);
			var client = row.insertCell(1);
			var description = row.insertCell(2);
			var mount = row.insertCell(3);
			var actions = row.insertCell(4);
			id.innerHTML = object2.Invoices[i].id;
			client.innerHTML = object2.Invoices[i].client;
			description.innerHTML= object2.Invoices[i].descript;
			mount.innerHTML= object2.Invoices[i].mount;
			actions.innerHTML="<a  href='edit_client.html'><img  id='editar' src='edit.png'/> </a> <a  href='delete_client.html'><img  id='editar' src='delete.png'/> </a>";
			};
		}

	}
};
