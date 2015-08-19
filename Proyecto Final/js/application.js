var text ;
var Util = Util || {
	agregarClient: function()
	{	
		var obj;
		if (localStorage.getItem('Client')==null || localStorage.getItem('Client')=="") 
		{
			text='{"clients":[]}';
			obj = JSON.parse(text);
		}
		else
		{
			obj=JSON.parse(localStorage.getItem('Client'));
		}		
		// convierte a string la variable global llamada text	
		
		//este mae agrega otro nuevo elemento		
		obj ['clients'].push({"firstName":document.getElementById('first_name_client').value,"lastName":document.getElementById('last_name_client').value,"id":document.getElementById('id_client').value,"phone":document.getElementById('phone_client').value});
		//lo convierte a objeto 
		text = JSON.stringify (obj);
		//de nuevo a parse del nuevo elemento
		obj = JSON.parse(text);
		//lo guarda en local storage
		localStorage.setItem('Client', JSON.stringify(obj));
	},
	deleteClient: function()
	{	
		var fila = parseInt(localStorage.getItem('fila'));
		//elimina el usuario
		var object = JSON.parse(localStorage.getItem('Client'));
		delete object.clients[fila];  
		localStorage.setItem('Client', JSON.stringify(object));
		var tex='{"clients":[]}';
		var ob;
		ob = JSON.parse(tex);
		var object2 = JSON.parse(localStorage.getItem('Client'));
		for (i = 0; i < object2.clients.length; ++i) {
			if (object2.clients[i] != null) {
				ob ['clients'].push({"firstName":object2.clients[i].firstName,"lastName":object2.clients[i].lastName,"id":object2.clients[i].id,"phone":object2.clients[i].phone});
				tex = JSON.stringify (ob);	
			}
		};
		tex = JSON.stringify (ob);
		ob = JSON.parse(tex);
		localStorage.setItem('Client', JSON.stringify(ob));
	},
	vereliminar: function()
	{
		if(localStorage.getItem('UserInline')==''||localStorage.getItem('UserInline')==null)
		{
			window.location = ("login.html"); 
			return false;
		}
		else
		{
			Util.usuarioline();
			var i = parseInt(localStorage.getItem('fila'));
			var object2 = JSON.parse(localStorage.getItem('Client'));
			var objetoSPAN = document.getElementById("client_delete");
			objetoSPAN.innerHTML = object2.clients[i].firstName+' '+object2.clients[i].lastName+'  ?';
		}
	},
	usuarioline: function()
	{

		if(localStorage.getItem('UserInline')==''||localStorage.getItem('UserInline')==null)
		{

			window.location = ("login.html"); 
			return false;
		}
		else
		{			

			if(localStorage.getItem('UserInline')!='Administrador')
			{

				var elemento = document.getElementById("user_v");
				elemento.style.display = 'none';
			}	
			var objetoSPAN = document.getElementById("userline");			
			objetoSPAN.innerHTML = localStorage.getItem('UserInline');
			
		} 		
	},
	updateInvoice: function()
	{
		var i = parseInt(localStorage.getItem('fila'));
		var object2 = JSON.parse(localStorage.getItem('Client'));
		object2.clients[i].firstName=document.getElementById('first_name').value;
		object2.clients[i].lastName=document.getElementById('last_name').value;
		object2.clients[i].id=document.getElementById('id_client').value;
		object2.clients[i].phone=document.getElementById('phone_client').value; 
		localStorage.setItem('Client', JSON.stringify(object2));
	},
	fila: function(x){		
		localStorage.setItem('fila', x);
	},
	getfila: function()	{
		var selectBox = document.getElementById("select");
		var x = selectBox.options[selectBox.selectedIndex].value;
		localStorage.setItem('fila', x);
		var object2 = JSON.parse(localStorage.getItem('Client'));
		    var objetoSPAN = document.getElementById("id");
			objetoSPAN.innerHTML ='ID: ' +object2.clients[x].id;
			var objetoSPAN = document.getElementById("full");
			objetoSPAN.innerHTML = 'Full name: '+object2.clients[x].firstName+" "+object2.clients[x].lastName;
			var objetoSPAN = document.getElementById("phone");
			objetoSPAN.innerHTML ='Phone: '+ object2.clients[x].phone;
			
	},
	llenarUpdate: function()
	{
		if(localStorage.getItem('UserInline')==''||localStorage.getItem('UserInline')==null)
		{
			window.location = ("login.html"); 
			return false;
		}
		else
		{
			Util.usuarioline();
			var i = parseInt(localStorage.getItem('fila'));
			var object2 = JSON.parse(localStorage.getItem('Client'));
			document.getElementById('first_name').value=object2.clients[i].firstName;
			document.getElementById('last_name').value=object2.clients[i].lastName;
			document.getElementById('id_client').value=object2.clients[i].id;
			document.getElementById('phone_client').value=object2.clients[i].phone;
		}
	},
	cerrarsecion: function()
	{
		localStorage.setItem('UserInline', '');
	},
	llenartabla: function()
	{
		if(localStorage.getItem('UserInline')==''||localStorage.getItem('UserInline')==null)
		{
			window.location = ("login.html"); 
			return false;
		}
		else
		{
			Util.usuarioline();
			if (localStorage.getItem('Client')==null || localStorage.getItem('Client')=="") 
			{
				Materialize.toast('No hay Clientes Guardados!', 4500, 'rounded');
			}
			else
			{
				var object2 = JSON.parse(localStorage.getItem('Client'));
				var options = '';
				//este es el id del select
				var select = document.getElementById("select");
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
			actions.innerHTML="<a onclick='Util.fila("+i+");'  href='edit_client.html'><img  id='editar' src='edit.png'/> </a> <a onclick='Util.fila("+i+");' href='delete_client.html'><img  src='delete.png'/> </a>";						//llenar div
			//llenar select
			var opt = document.createElement('option');
			opt.value = i;
			opt.innerHTML = object2.clients[i].id+' '+object2.clients[i].firstName+" "+object2.clients[i].lastName;
			select.appendChild(opt);
		};
	}
}

}
};

$('.button-collapse').sideNav({
	menuWidth: 200,
	closeOnClick: true
}
);
function cli() 
{
	var pagina="clients.html"
	location.href=pagina
} 

function cha() 
{
	var pagina="chambas.html"
	location.href=pagina
} 

function invo() 
{
	var pagina="invoices.html"
	location.href=pagina
} 
function use() 
{
	var pagina="user.html"
	location.href=pagina
} 
