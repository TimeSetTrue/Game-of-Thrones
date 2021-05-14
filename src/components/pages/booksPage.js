import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class BooksPage extends Component {
	gotService = new gotService();
	state = {
        selectedChar: 1,
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
								getData={this.gotService.getAllBooks}
								renderItem={(item) => `${item.name}`} 
							/>
		)

		const charDetails = (
					<CharDetails 
						charId={this.state.selectedChar}
						getData={this.gotService.getBook}
					>
						<Field field='numberOfPages' label='Number-Of-Pages' />
						<Field field='publisher' label='Publisher' />
						<Field field='released' label='Released' />
					</CharDetails>
				)

		return (
			<RowBlock left={itemList} right={charDetails} />
		)
	}
}