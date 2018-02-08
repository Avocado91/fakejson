var data = JSON.stringify({
	'token': '4NXoVWBI6HSlZDo-ESd6UQ',
	'data' : {
		'nameFirst': 'nameFirst',
		'personAvatar': 'personAvatar',
		'jobTitle': 'personTitle',
		'nickName': 'personNickname',
		'_repeat': 9
	}
});

//Create a variable that stores the XMLHttpRequest object
var request = new XMLHttpRequest();
request.WithCredentials = true;

//Initialize the request - specify that the request is a POST and add the URL endpoint
request.open('POST', 'https://app.fakejson.com/q');
request.setRequestHeader('content-type', 'application/json');

//Send the request
request.send(data);


request.onload = function() {
	//Access the FakeJSON response - in JSON
	var fakeData = JSON.parse(this.response);
	console.log(fakeData);
}