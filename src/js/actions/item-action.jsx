var alt = require('../alt-application')
var mime = require('rest/interceptor/mime');
var rest = require('rest');
var client = rest.wrap(mime);

class ItemAction{

	search(searchText){
		client({path: 'https://api.github.com/search/repositories?q='+searchText })
			.then( response => {
				this.actions.searchCompleted(response.entity.items)
		});
		this.dispatch();
	}
	searchCompleted(items){
		this.dispatch(items)
	}	
}

module.exports = alt.createActions(ItemAction)