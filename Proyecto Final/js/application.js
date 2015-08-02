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
		var fila = parseInt(localStorage.getItem('fila_cli'));
		var numero=0;
		var object2 = JSON.parse(localStorage.getItem('Ul'));
		for (var i = 0; i < object2.clients.length; i++) {
			if(object2.clients[i]!=null)
			{
				if(numero==fila)
				{
					delete object2.clients[i];  
					localStorage.setItem('Ul', JSON.stringify(object2));  
				}
				numero++;
			}				
		};

	},
	updateInvoice: function()
	{
		var fila = parseInt(localStorage.getItem('fila_cli'));
		var numero=0;
		var object2 = JSON.parse(localStorage.getItem('Ul'));
		for (var i = 0; i < object2.clients.length; i++) {
			if(object2.clients[i]!=null)
			{
				    if(numero==fila)
				    {	
						//modificar un elemento	
						object2.clients[i].firstName=document.getElementById('first_name').value;
						object2.clients[i].lastName=document.getElementById('last_name').value;
						object2.clients[i].id=document.getElementById('id').value;
						object2.clients[i].phone=document.getElementById('phone').value; 
						localStorage.setItem('Ul', JSON.stringify(object2));
					}
					numero++;
				}				
			};
		},
		fila: function(x){
			localStorage.setItem('fila_cli', x);
		},
		llenarUpdate: function()
		{
			var fila = parseInt(localStorage.getItem('fila_cli'));
			var numero=0;
			var object2 = JSON.parse(localStorage.getItem('Ul'));
			for (var i = 0; i < object2.clients.length; i++) {
				if(object2.clients[i]!=null)
				{
					if(numero==fila)
					{						
						document.getElementById('first_name').value=object2.clients[i].firstName;
						document.getElementById('last_name').value=object2.clients[i].lastName;
						document.getElementById('id').value=object2.clients[i].id;
						document.getElementById('phone').value=object2.clients[i].phone;
					}
					numero++;
				}				
			};
		},
		llenartabla: function()
		{
			if (localStorage.getItem('inv')==null || localStorage.getItem('inv')=="") 
			{
				alert("No hay elementos en esta tabla para mostrar.");
			}
			else
			{
			var numfila=0;
			var object2 = JSON.parse(localStorage.getItem('Ul'));
		//ciclo para imprimir todo lo guardado
		for (var i = 0; i < object2.clients.length; i++) {
			if(object2.clients[i]!=null){
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
			actions.innerHTML="<a onclick='Util.fila("+numfila+");'  href='edit_client.html'><img  id='editar' src='edit.png'/> </a> <a onclick='Util.fila("+numfila+");' href='delete_client.html'><img  src='delete.png'/> </a>";
			numfila++;
		}
		};
	}

	}
};
