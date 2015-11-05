var alt = require('../alt-application')
var ItemActions = require('../actions/item-action')
class ItemStore{
	constructor(){
		this.items = []
		this.loading = false;
		
		this.bindAction(ItemActions.search,this.onSearch)
		this.bindAction(ItemActions.searchCompleted,this.onSearchCompleted)
	}
	
	onSearch(){
		this.items = [];
		this.loading = true;
	}
	
	onSearchCompleted(items){
		this.items = items;
		this.loading = false;
	}
}

module.exports = alt.createStore(ItemStore)