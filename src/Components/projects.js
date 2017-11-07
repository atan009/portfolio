import React, { Component } from 'react'
import { connect } from 'react-redux'

class projects extends Component {
	render () {
		const { portfolio } = this.props
		console.log(portfolio)

		return (
			<div className="Projects">
				{portfolio.projects.map(project => (
					<div key={project.title} className="Project">
						<h2><a className="project-title" href={project.url}>{project.title}</a></h2>
						<h3 className="project-year">{project.year}</h3>
						<div>
						{project.images.map(image => (
							<img key={image} src={image} className="project-image" alt=""/>

							))}
						<p className="project-description">giuguigiug</p>
						</div>
					</div>
				))}
			</div>
		)
	}
}

function mapStateToProps ({portfolio}) {
	return {
		portfolio
	}
}

function mapDispatchToProps(dispatch) {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(projects)