var objPeople = [
	{
		username: "martin",
		password: "12345"
	},
	{
		username: "jose",
		password: "12345"
	},
	{ 
		username: "maria",
		password: "12345"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {

		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " Te pudiste loguear!!!")

			return
		}
	}
	console.log("incorrect username or password")
}
