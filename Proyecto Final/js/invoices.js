
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
		var fila = parseInt(localStorage.getItem('fila_inv'));
		var numero=0;
		var object2 = JSON.parse(localStorage.getItem('inv'));
		for (var i = 0; i < object2.Invoices.length; i++) {
			if(object2.Invoices[i]!=null)
			{
				if(numero==fila)
				{
					delete object2.Invoices[i];  
					localStorage.setItem('inv', JSON.stringify(object2));  
				}
				numero++;
			}				
		};

	},
	vereliminar: function()
	{
		alert('aqui');
		var fila = parseInt(localStorage.getItem('fila_inv'));
		var numero=0;
		var object2 = JSON.parse(localStorage.getItem('inv'));

		for (var i = 0; i < object2.Invoices.length; i++) {
			if(object2.Invoices[i]!=null)
			{

				if(numero==fila)
				{
					alert('ver elemento eliminar:   '+bject2.Invoices[i].client);
					document.getElementById('client_delete').value= object2.Invoices[i].client; 
				}
				numero++;
			}				
		};
	},
	updateInvoice: function()
	{
		alert('Cambiaremos datos');
		var fila = parseInt(localStorage.getItem('fila_inv'));
		var numero=0;
		var object2 = JSON.parse(localStorage.getItem('inv'));
		for (var i = 0; i < object2.Invoices.length; i++) {
			if(object2.Invoices[i]!=null)
			{
				if(numero==fila)
				{	
					alert('numero '+fila+'  ciclo  '+numero);
						//modificar un elemento		                
						object2.Invoices[i].client=document.getElementById('first_name').value;
						object2.Invoices[i].descript=document.getElementById('description_invoice').value;
						object2.Invoices[i].mount=document.getElementById('mount_invoice').value;
						localStorage.setItem('inv', JSON.stringify(object2));  
					}
					numero++;
				}				
			};
		},
		fila: function(x){
			localStorage.setItem('fila_inv', x);
		},
		llenarUpdate: function()
		{
			var fila = parseInt(localStorage.getItem('fila_inv'));
			var numero=0;
			var object2 = JSON.parse(localStorage.getItem('inv'));
			for (var i = 0; i < object2.Invoices.length; i++) {
				if(object2.Invoices[i]!=null)
				{
					if(numero==fila)
					{
						alert(object2.Invoices[i].client);
						document.getElementById('first_name').value=object2.Invoices[i].client;
						document.getElementById('description_invoice').value=object2.Invoices[i].descript;
						document.getElementById('mount_invoice').value=object2.Invoices[i].mount;
					}
					numero++;
				}				
			};
		},
		llenarInvoice: function()
		{
			if (localStorage.getItem('inv')==null || localStorage.getItem('inv')=="") 
			{
				alert("No hay elementos en esta tabla para mostrar.");
				 Materialize.toast('No hay elementos en esta tabla!', 4000, 'rounded');
			}
			else
			{
				var object2 = JSON.parse(localStorage.getItem('inv'));
				var numfila=0;
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
						actions.innerHTML="<a onclick='Invoice.fila("+numfila+");'  href='edit_invoice.html'><img  id='editar' src='edit.png'/> </a> <a onclick='Invoice.fila("+numfila+");' href='delete_invoice.html'><img  src='delete.png'/> </a>";
						numfila++;
					}
				};
			}

		}
	};
