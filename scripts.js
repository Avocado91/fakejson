var app = document.getElementById('root');
var container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

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


request.onload = function() {
	//Access the FakeJSON response - in JSON
	var fakeData = JSON.parse(this.response);

	fakeData.forEach(companyRole => {
	
	//Create a div element with a class of 'card'
	var card = document.createElement('div');
	card.setAttribute('class', 'card');

	//Create an img element, populating it using the fake avater retrieved from FakeJSON
	var elem = document.createElement('img');
	elem.setAttribute('src', companyRole.personAvatar);
	elem.setAttribute('height', '180px');
	elem.setAttribute('width', '100%');
	elem.setAttribute('alt', 'Profile Picture');

	//Create an h1 element, populating it using the fake first name retrieved from FakeJSON
	var h1 = document.createElement('h1');
	h1.textContent = companyRole.nameFirst;

	//Create a p element, populating it using the fake job title retrieved from FakeJSON
	var p1 = document.createElement('p1');
	p1.textContent = companyRole.jobTitle;

	//Create a p element, populating it suing the fake nickname retrieved from FakeJSON
	var p2 = document.createElement('p2');
	p2.textContent = 'Also known as "' + companyRole.nickName + '"';

	//Create a line break element, to seperate the two p elements
	var br = document.createElement('br');

	//Append the div class 'card' element to the previously created div class 'container' element
	container.appendChild(card);

	//Append the img, h1, and p elements previously reated to the div class 'card' element
	card.appendChild(elem);
	card.appendChild(h1);
	card.appendChild(p1);
	card.appendChild(br);
	card.appendChild(p2);
	});
}


//Initialize the request - specify that the request is a POST and add the URL endpoint
request.open('POST', 'https://app.fakejson.com/q');
request.setRequestHeader('content-type', 'application/json');

//Send the request
request.send(data);