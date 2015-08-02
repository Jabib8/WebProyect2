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
	deleteChamba: function()
	{	
		var fila = parseInt(localStorage.getItem('fila_ch'));
		var numero=0;
		var object2 = JSON.parse(localStorage.getItem('ch'));
		for (var i = 0; i < object2.Chambas.length; i++) {
			if(object2.Chambas[i]!=null)
			{
				if(numero==fila)
				{
					delete object2.Chambas[i];  
					localStorage.setItem('ch', JSON.stringify(object2));
				}
				numero++;
			}				
		};

	},
	updateChamba: function()
	{
		var fila = parseInt(localStorage.getItem('fila_ch'));
		var numero=0;
		var object2 = JSON.parse(localStorage.getItem('ch'));
		for (var i = 0; i < object2.Chambas.length; i++) {
			if(object2.Chambas[i]!=null)
			{
				    if(numero==fila)
				    {	
						//modificar un elemento	
						object2.Chambas[i].id=document.getElementById('id_chamba').value;
						object2.Chambas[i].client=document.getElementById('client_chamba').value;
						object2.Chambas[i].descript=document.getElementById('descripcion_chamba').value;
						object2.Chambas[i].date=document.getElementById('date_chamba').value; 
						object2.Chambas[i].notes=document.getElementById('notes_chamba').value; 
						localStorage.setItem('ch', JSON.stringify(object2));
					}
					numero++;
				}				
			};
		},
		fila: function(x){
			localStorage.setItem('fila_ch', x);
		},
		llenarUpdate: function()
		{
			var fila = parseInt(localStorage.getItem('fila_ch'));
			var numero=0;
			var object2 = JSON.parse(localStorage.getItem('ch'));
			for (var i = 0; i < object2.Chambas.length; i++) {
				if(object2.Chambas[i]!=null)
				{
					if(numero==fila)
					{						
						document.getElementById('id_chamba').value= object2.Chambas[i].id;
						document.getElementById('client_chamba').value= object2.Chambas[i].client;
						document.getElementById('descripcion_chamba').value= object2.Chambas[i].descript;
						document.getElementById('date_chamba').value = object2.Chambas[i].date;
						document.getElementById('notes_chamba').value= object2.Chambas[i].notes; 
					}
					numero++;
				}				
			};
		},
llenarChamba: function()
{
	if (localStorage.getItem('ch')==null || localStorage.getItem('ch')=="") 
	{
		alert('No hay chambas guardadas.');
		 Materialize.toast('No hay Chambas registrados!', 4000, 'rounded');
	}
	else
	{
		var object2 = JSON.parse(localStorage.getItem('ch'));
		var numfila=0;
		//ciclo para imprimir todo lo guardado
		for (var i = 0; i < object2.Chambas.length; i++) {
			if(object2.Chambas[i]!=null){
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
			actions.innerHTML="<a onclick='Chamba.fila("+numfila+");'  href='edit_chamba.html'><img  id='editar' src='edit.png'/> </a> <a onclick='Chamba.fila("+numfila+");' href='delete_chambas.html'><img  src='delete.png'/> </a>";
		    numfila++;
		    }
			};

		}
	}
};
