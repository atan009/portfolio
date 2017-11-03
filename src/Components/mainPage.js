import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class mainPage extends Component {

	render () {
		return (
			<p>hello world</p>
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