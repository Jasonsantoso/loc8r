/* Get locations pages */
module.exports.homelist = function(req, res) {
	res.render('locations-list', {
		title: 'Loc8r - find a place to work with wifi',
		pageHeader: {
			title: 'Loc8r',
			strapline: 'Find a place to work with wifi near you!'
		},
		locations: [{
			name: 'Starcups',
			rating: 3,
			distance: '100m',
			address: '125 High Street, Reading, RG6 1PS',
			facilities: ['Hot drinks', 'Foods', 'Premium wifi'] 
		},{
			name: 'Del taco',
			rating: 2,
			distance: '150m',
			address: '125 High Street, Reading, RG6 1PS',
			facilities: ['Hot drinks', 'Foods'] 
		},{
			name: "Denny's",
			rating: 3,
			distance: '100m',
			address: '125 High Street, Reading, RG6 1PS',
			facilities: ['Hot drinks', 'Foods', 'Premium wifi'] 
		}] 
	});
};

module.exports.locationInfo = function(req, res) {
	res.render('location-info', { title: 'Location info' });
};

module.exports.addReview = function(req, res) {
	res.render('location-review-form', { title: 'Add review' });
};