import React, { Component } from 'react'
import { connect } from 'react-redux'

class mainPage extends Component {

	render () {
		return (
			<div className="Homepage">
				<div className="Intro">
					<p>Hello! <br/>
					I'm Alex Tan, a Front End Web Developer who enjoys<br/>
					developing applications designed with best user experience in mind.<br/>
					On my free time, I delve into mobile development and AI.<br/>
					</p>
				</div>
			</div>
		)
	}
}

// function mapStateToProps ({portfolio}) {
// 	return {
// 		portfolio
// 	}
// }

function mapDispatchToProps(dispatch) {
	return {

	}
}

export default connect(null, mapDispatchToProps)(mainPage)