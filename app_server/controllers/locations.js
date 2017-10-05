var request = require("request");
var apiOptions = {
	server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
	apiOptions.server = "https://jasonsantoso.herokuapp.com";
}

var renderHomepage = function(req, res, responseBody) {
	res.render('locations-list', {
		title: 'Loc8r - find a place to work with wifi',
		pageHeader: {
			title: 'Loc8r',
			strapline: 'Find a place to work with wifi near you!'
		},
		sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let loc8r help you find the place you're looking for.",
		locations: responseBody
	});
}

/* Get locations pages */
module.exports.homelist = function(req, res) {
	var requestOptions, path;
	path = '/api/locations';
	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {},
		qs : {
			lng : -0.7992599,
			lat : 51.378091,
			maxDistance : 20
		}
	};
	request(
		requestOptions, 
		function(err, response, body) {
			renderHomepage(req, res, body);
		}
	);
};

module.exports.locationInfo = function(req, res) {
	res.render('location-info', {
		title: 'Starups',
		pageHeader: {
			title: 'Starcups'
		},
		detail: {
			rating: 3,
			address: '125 High Street, Reading RG6, 1PS',
			openingTimes: [{
				days: 'Monday - Friday',
				open: '7:00am',
				close: '7:00pm',
				closed: false
			},{
				days: 'Saturday',
				open: '8:00am',
				close: '5:00pm',
				closed: false
			},{
				days: 'Sunday',
				closed: true
			}],
			facilities: ['Hot drinks', 'Foods', 'Premium wifi'],
			coords: {lat: 51.455041, lng: -0.9690884}
		},
		review: [{
			rating: 5,
			name: 'Simon Holmes',
			day: 16,
			month: 'July',
			year: 2013,
			comment: 'What a great place. I can\'t say enough good things about it'
		},{
			rating: 4,
			name: 'Simon Holmes',
			day: 16,
			month: 'July',
			year: 2013,
			comment: 'It was okay. Coffee wasn\'t great, but wifi was fast'
		}],
		sidebar: ["Simon's cafe is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.",
		"If you've been and you like it - or if you don't - please leave a review to help other people just like you."]
	});
};

module.exports.addReview = function(req, res) {
	res.render('location-review-form', { 
		title: 'Add review',
		pageHeader: {
			title: 'Starcups'
		} 
	});
};