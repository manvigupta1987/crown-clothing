import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

// actions
import { fetchCollectionsStart } from '../redux/shop/shop.actions'

// components
import CollectionsOverviewContainer from '../components/collections-overview/CollectionsOverviewContainer'
import CollectionPageContainer from './collection/CollectionContainer'

class ShopPage extends Component {
	componentDidMount() {
		const { fetchCollectionsStart } = this.props
		fetchCollectionsStart()
	}

	render() {
		const { match } = this.props

		return (
			<div className='shop-page'>
				<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(ShopPage)