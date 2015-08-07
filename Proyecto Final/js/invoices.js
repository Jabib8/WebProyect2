
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
	deleteInvoice: function()
	{			
		var fila = parseInt(localStorage.getItem('fila'));
		//elimina el usuario user
		var object = JSON.parse(localStorage.getItem('inv'));
		delete object.Invoices[fila];  
		localStorage.setItem('inv', JSON.stringify(object));
		var tex='{"Invoices":[]}';
		var ob;
		ob = JSON.parse(tex);
		var object2 = JSON.parse(localStorage.getItem('inv'));
		for (i = 0; i < object2.Invoices.length; ++i) {
			if (object2.Invoices[i] != null) {
				ob ['Invoices'].push({"id":'1',"client":object2.Invoices[i].client,"descript":object2.Invoices[i].descript,"mount":object2.Invoices[i].mount});
				tex = JSON.stringify (ob);	
			}
		};
		tex = JSON.stringify (ob);
		ob = JSON.parse(tex);
		localStorage.setItem('inv', JSON.stringify(ob));
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
			if(localStorage.getItem('UserInline')!='Administrador')
			{
				var elemento = document.getElementById("user_v");
				elemento.style.display = 'none';	
			}	
			var objetoSPAN = document.getElementById("userline");
			objetoSPAN.innerHTML = localStorage.getItem('UserInline');
			var i = parseInt(localStorage.getItem('fila'));
			var object2 = JSON.parse(localStorage.getItem('inv'));
			var objetoSPAN = document.getElementById("client_delete");
			objetoSPAN.innerHTML = object2.Invoices[i].client+'  ?';
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
			if (localStorage.getItem('Client')!=null || localStorage.getItem('Client')!="") 
			{    
				var object2 = JSON.parse(localStorage.getItem('Client'));
				var options = '';
				for (var i = 0; i < object2.clients.length; i++) {
					options += '<option value="'+object2.clients[i].firstName+' '+object2.clients[i].lastName+'" />';
					document.getElementById('clientes').innerHTML = options;
				};
			}   
		}
	},
	updateInvoice: function()
	{

		var i = parseInt(localStorage.getItem('fila'));	 
		var object2 = JSON.parse(localStorage.getItem('inv'));               
		object2.Invoices[i].client=document.getElementById('first_name').value;
		object2.Invoices[i].descript=document.getElementById('description_invoice').value;
		object2.Invoices[i].mount=document.getElementById('mount_invoice').value;
		localStorage.setItem('inv', JSON.stringify(object2));  

	},
	fila: function(x){
		localStorage.setItem('fila', x);
	},
	getfila: function()	{
		var selectBox = document.getElementById("select");
		var x = selectBox.options[selectBox.selectedIndex].value;
		localStorage.setItem('fila', x);
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
			if(localStorage.getItem('UserInline')!='Administrador')
			{
				var elemento = document.getElementById("user_v");
				elemento.style.display = 'none';	
			}	
			var objetoSPAN = document.getElementById("userline");
			objetoSPAN.innerHTML = localStorage.getItem('UserInline');
			var i = parseInt(localStorage.getItem('fila'));
			var object2 = JSON.parse(localStorage.getItem('inv'));		
			document.getElementById('first_name').value=object2.Invoices[i].client;
			document.getElementById('description_invoice').value=object2.Invoices[i].descript;
			document.getElementById('mount_invoice').value=object2.Invoices[i].mount;
		}
	},
	cerrarsecion: function()
	{
		localStorage.setItem('UserInline', '');
	},
	llenarInvoice: function()
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
			if (localStorage.getItem('inv')==null || localStorage.getItem('inv')=="") 
			{
				Materialize.toast('No hay Invoices Guardados!', 4500, 'rounded');
			}
			else
			{
				var select = document.getElementById("select");
				var object2 = JSON.parse(localStorage.getItem('inv'));
				for (var i = 0; i < object2.Invoices.length; i++) {
					if(object2.Invoices[i]!=null)
					{
						var tbl = document.getElementById('table_invoices');
						var lastRow = tbl.rows.length;
						var row = tbl.insertRow(lastRow);
						var id = row.insertCell(0);
						var client = row.insertCell(1);
						var description = row.insertCell(2);
						var mount = row.insertCell(3);
						var actions = row.insertCell(4);
						id.innerHTML = i;
						client.innerHTML = object2.Invoices[i].client;
						description.innerHTML= object2.Invoices[i].descript;
						mount.innerHTML= object2.Invoices[i].mount;
						actions.innerHTML="<a onclick='Invoice.fila("+i+");'  href='edit_invoice.html'><img  id='editar' src='edit.png'/> </a> <a onclick='Invoice.fila("+i+");' href='delete_invoice.html'><img  src='delete.png'/> </a>";					
						//llenar select
						var opt = document.createElement('option');
						opt.value = i;
						opt.innerHTML = 'Client: '+object2.Invoices[i].client+" Descript: "+object2.Invoices[i].descript+" Mount: "+object2.Invoices[i].mount;
						select.appendChild(opt);
					}
				};
			}
		}

	}
};
