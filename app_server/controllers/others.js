/* Get about page */
module.exports.about = function(req, res) {
	res.render('generic-text', { 
		title: 'About',
		pageHeader: {
			title: 'About'
		},
		content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adispiscing elit. Nunc sed lorem ac nisi dignissim accumsan.'
	});
};