import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class navBar extends Component {
	render () {
		const { portfolio } = this.props
		return (
			<ul className="main-categories">
				{portfolio.mainCategories.map(category => (
					<li key={category} className="main-category">
						<Link to={`/${category}`}>{category}</Link>
					</li>
					))}
			</ul>
		)
	}
}

function mapStateToProps({portfolio}) {
	return {
		portfolio
	}
}

function mapDispatchToProps(dispatch) {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(navBar)