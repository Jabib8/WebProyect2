var Login = Login || {
	validar: function(x){
		if(document.getElementById('user').value=='admin' && document.getElementById('password').value=='$uper4dmin')
		{
			localStorage.setItem('UserInline', 'Administrador');
			window.location = ("dashboard.html"); 
			return false;
		}
		var object2 = JSON.parse(localStorage.getItem('User'));
		for (var i = 0; i < object2.User.length; i++) {
			if(object2.User[i]!=null)
			{
				if(object2.User[i].username==document.getElementById('user').value && object2.User[i].pasword==document.getElementById('password').value)
				{
					localStorage.setItem('UserInline',object2.User[i].fullname);
					window.location = ("dashboard.html"); 
					return false;
				}
			}
		};
		Materialize.toast('Contraseña Invalida!', 4500, 'rounded');
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
			var objetoSPAN = document.getElementById("userline");
			objetoSPAN.innerHTML = localStorage.getItem('UserInline');
			var objetoH = document.getElementById("welcome");
			objetoH.innerHTML = 'Welcome '+localStorage.getItem('UserInline');
			if(localStorage.getItem('UserInline')!='Administrador')
			{
				var elemento = document.getElementById("user_v");
				elemento.style.display = 'none';	
			}	
		}
	}
};