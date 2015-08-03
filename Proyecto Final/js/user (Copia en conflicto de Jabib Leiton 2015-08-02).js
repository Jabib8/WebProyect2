var tex ;
var Usuario = Usuario || {
	agregarUser: function()
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
	},
	deleteClient: function()
	{	
			var fila = parseInt(localStorage.getItem('fila'));
			var numero=0;
			var object2 = JSON.parse(localStorage.getItem('User'));
			for (var i = 0; i < object2.User.length; i++) {
				if(object2.User[i]!=null)
				{
					if(numero==fila)
					{
						delete object2.User[i];  
						localStorage.setItem('User', JSON.stringify(object2));  
					}
					numero++;
				}				
			};
			    	
     },
updateUser: function()
{	

	     var fila = parseInt(localStorage.getItem('fila'));
			var numero=0;
			var object2 = JSON.parse(localStorage.getItem('User'));
			for (var i = 0; i < object2.User.length; i++) {
				if(object2.User[i]!=null)
				{
					if(numero==fila)
					{	
						//modificar un elemento		                
		                object2.User[i].fullname=document.getElementById('user_name').value;
						object2.User[i].pasword=document.getElementById('pasword_repeat').value;
						object2.User[i].username=document.getElementById('name_user').value;
						localStorage.setItem('User', JSON.stringify(object2));  
					}
					numero++;
				}				
			};
},
llenarUser: function()
{
	if (localStorage.getItem('User')==null || localStorage.getItem('User')=="") 
	{
		 Materialize.toast('No hay usuarios registrados!', 4000, 'rounded');
		
	}
	else
	{
		var numfila=0;
		var object2 = JSON.parse(localStorage.getItem('User'));
		//ciclo para imprimir todo lo guardado
		for (var i = 0; i < object2.User.length; i++) {
			if(object2.User[i]!=null)
			{
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
				actions.innerHTML="<a onclick='Usuario.fila("+numfila+");'  href='edit_user.html'><img  id='editar' src='edit.png'/> </a> <a onclick='Usuario.fila("+numfila+");' href='delete_user.html'><img  src='delete.png'/> </a>";
				numfila++;
			}
		};


	}
},
fila: function(x){
	localStorage.setItem('fila', x);
},
llenarUpdate: function()
{
	var fila = parseInt(localStorage.getItem('fila'));
			var numero=0;
			var object2 = JSON.parse(localStorage.getItem('User'));
			for (var i = 0; i < object2.User.length; i++) {
				if(object2.User[i]!=null)
				{
					if(numero==fila)
					{
						document.getElementById('user_name').value=object2.User[i].fullname;
						document.getElementById('name_user').value=object2.User[i].username;
						document.getElementById('pasword').value=object2.User[i].pasword;
						document.getElementById('pasword_repeat').value=object2.User[i].pasword;
					}
					numero++;
				}				
			};
}
};
