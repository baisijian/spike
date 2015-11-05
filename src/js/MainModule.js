import React from 'react';

module.exports = React.createClass({
	render(){
		return(
		<div>
			<div className="backColor">
				<h1>This is a Header</h1>
			</div>
			<div className="container">
				<form>
					<input className="searchText" type="text" ref="searchText"/>
					<div className="item">
						<h2>Name</h2>
						<br/>
						Owner
						<br/>
						FullName
					</div>
					<div className="item">
						<h2>Name</h2>
						<br/>
						Owner
						<br/>
						FullName
					</div>
				</form>
			</div>
		</div>
		);
	}
});