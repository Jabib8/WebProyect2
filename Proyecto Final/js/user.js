var tex ;
var Usuario = Usuario || {
	agregarUser: function()
	{	

		if(document.getElementById('pasword_repeat').value==document.getElementById('pasword').value)
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
		document.getElementById('user_name').value='';
		document.getElementById('name_user').value='';
		document.getElementById('pasword_repeat').value='';
		document.getElementById('pasword').value='';
	}
	else
	{		
		Materialize.toast('Las contrase;as no coinciden!', 4500, 'rounded');
	}
},	
deleteClient: function()
{	
	var fila = parseInt(localStorage.getItem('fila'));
		//elimina el usuario
		var object = JSON.parse(localStorage.getItem('User'));
		delete object.User[fila];  
		localStorage.setItem('User', JSON.stringify(object));
		var tex='{"User":[]}';
		var ob;
		ob = JSON.parse(tex);
		var object2 = JSON.parse(localStorage.getItem('User'));
		for (i = 0; i < object2.User.length; ++i) {
			if (object2.User[i] != null) {
				ob ['User'].push({"fullname":object2.User[i].fullname,"username":object2.User[i].pasword,"pasword":object2.User[i].username});	
				tex = JSON.stringify (ob);	
			}
		};
		tex = JSON.stringify (ob);
		ob = JSON.parse(tex);
		localStorage.setItem('User', JSON.stringify(ob));
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
			Usuario.usuarioline();
			var i = parseInt(localStorage.getItem('fila'));
			var object2 = JSON.parse(localStorage.getItem('User'));
			var objetoSPAN = document.getElementById("client_delete");
			objetoSPAN.innerHTML = object2.User[i].fullname+'  ?'; 
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
	updateUser: function()
	{	
		var i = parseInt(localStorage.getItem('fila'));
		var object2 = JSON.parse(localStorage.getItem('User'));
		object2.User[i].fullname=document.getElementById('user_name').value;
		object2.User[i].pasword=document.getElementById('pasword_repeat').value;
		object2.User[i].username=document.getElementById('name_user').value;
		localStorage.setItem('User', JSON.stringify(object2));  
	},
	cerrarsecion: function()
	{
		localStorage.setItem('UserInline', '');
	},
	llenarUser: function()
	{
		if(localStorage.getItem('UserInline')==''||localStorage.getItem('UserInline')==null)
		{
			window.location = ("login.html"); 
			return false;
		}
		else
		{
			Usuario.usuarioline();
			if (localStorage.getItem('User')==null || localStorage.getItem('User')=="") 
			{
				Materialize.toast('No hay Usuarios  Guardados!', 4500, 'rounded');
			}
			else
			{
				var object2 = JSON.parse(localStorage.getItem('User'));
				var select = document.getElementById("select");
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
			actions.innerHTML="<a onclick='Usuario.fila("+i+");'  href='edit_user.html'><img  id='editar' src='edit.png'/> </a> <a onclick='Usuario.fila("+i+");' href='delete_user.html'><img  src='delete.png'/> </a>";				
			//llenar select
			var opt = document.createElement('option');
			opt.value = i;
			opt.innerHTML = 'Full name: '+object2.User[i].fullname+" Username: "+object2.User[i].username +" pasword: "+object2.User[i].pasword;
			select.appendChild(opt);
		};

	}
}
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
		Usuario.usuarioline();
		var i = parseInt(localStorage.getItem('fila'));
		var object2 = JSON.parse(localStorage.getItem('User'));
		document.getElementById('user_name').value=object2.User[i].fullname;
		document.getElementById('name_user').value=object2.User[i].username;
		document.getElementById('pasword').value=object2.User[i].pasword;
		document.getElementById('pasword_repeat').value=object2.User[i].pasword;
	}
}
};
