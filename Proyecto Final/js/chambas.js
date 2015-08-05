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
		var fila = parseInt(localStorage.getItem('fila'));
		//elimina el usuario
		var object = JSON.parse(localStorage.getItem('ch'));
		delete object.Chambas[fila];  
		localStorage.setItem('ch', JSON.stringify(object));
		var tex='{"Chambas":[]}';
		var ob;
		ob = JSON.parse(tex);
		var object2 = JSON.parse(localStorage.getItem('ch'));
		for (i = 0; i < object2.Chambas.length; ++i) {
			if (object2.Chambas[i] != null) {
				ob ['Chambas'].push({"id":object2.Chambas[i].id,"client":object2.Chambas[i].client,"descript":object2.Chambas[i].descript,"date":object2.Chambas[i].date,"notes":object2.Chambas[i].notes});
				tex = JSON.stringify (ob);	
			}
		};
		tex = JSON.stringify (ob);
		ob = JSON.parse(tex);
		localStorage.setItem('ch', JSON.stringify(ob));
	},
	vereliminar: function()
	{
		Chamba.usuarioline();
		var i = parseInt(localStorage.getItem('fila'));
		var object2 = JSON.parse(localStorage.getItem('ch'));
		var objetoSPAN = document.getElementById("client_delete");
		objetoSPAN.innerHTML = object2.Chambas[i].client+'  ?'; 		
	},
	usuarioline: function()
	{
		if(localStorage.getItem('UserInline')!='Administrador')
		{
			var elemento = document.getElementById("user_v");
			elemento.style.display = 'none';	
		}	
		var objetoSPAN = document.getElementById("userline");
		objetoSPAN.innerHTML = localStorage.getItem('UserInline');; 		
	},
	updateChamba: function()
	{
		var i = parseInt(localStorage.getItem('fila'));
		var object2 = JSON.parse(localStorage.getItem('ch'));
		object2.Chambas[i].id=document.getElementById('id_chamba').value;
		object2.Chambas[i].client=document.getElementById('client_chamba').value;
		object2.Chambas[i].descript=document.getElementById('descripcion_chamba').value;
		object2.Chambas[i].date=document.getElementById('date_chamba').value; 
		object2.Chambas[i].notes=document.getElementById('notes_chamba').value; 
		localStorage.setItem('ch', JSON.stringify(object2));		
	},
	fila: function(x){
		localStorage.setItem('fila', x);
	},
	llenarUpdate: function()
	{
		Chamba.usuarioline();
		var i = parseInt(localStorage.getItem('fila'));
		var object2 = JSON.parse(localStorage.getItem('ch'));
		document.getElementById('id_chamba').value =  object2.Chambas[i].id;
		document.getElementById('client_chamba').value = object2.Chambas[i].client;
		document.getElementById('descripcion_chamba').value = object2.Chambas[i].descript;
		document.getElementById('date_chamba').value = object2.Chambas[i].date;
		document.getElementById('notes_chamba').value= object2.Chambas[i].notes;
	},
	llenarChamba: function()
	{
		Chamba.usuarioline();
		if (localStorage.getItem('ch')==null || localStorage.getItem('ch')=="") 
		{
		        Materialize.toast('No hay Chambas Guardadas!', 4500, 'rounded');
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
			actions.innerHTML="<a onclick='Chamba.fila("+i+");'  href='edit_chamba.html'><img  id='editar' src='edit.png'/> </a> <a onclick='Chamba.fila("+i+");' href='delete_chambas.html'><img  src='delete.png'/> </a>";							
		};

	}
}

};
$('.datepicker').pickadate({
	selectMonths: true,
	selectYears: 15
});
