import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class HousesPage extends Component {
	gotService = new gotService();
	state = {
        selectedChar: null,
		error: false,
    }

	onItemSelected = (id) => {
        this.setState({
            selectedChar: id,
        })
    }

	componentDidCatch() {
		this.setState({
			error: true,
		})
	}

 	render() {

		if(this.state.error) {
			return <ErrorMessage />
		}

		const itemList = ( <ItemList
								onItemSelected={this.onItemSelected} 
								getData={this.gotService.getAllHouses}
								renderItem={(item) => `${item.name}`} 
							/>
		)

		const charDetails = (
					<CharDetails 
						charId={this.state.selectedChar}
						getData={this.gotService.getHouse}
					>
						<Field field='region' label='Region' />
						<Field field='words' label='Words' />
						<Field field='titles' label='Titles' />
						<Field field='ancestralWeapons' label='AncestralWeapons' />
					</CharDetails>
				)

		return (
			<RowBlock left={itemList} right={charDetails} />
		)
	}
}