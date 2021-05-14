import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import ErrorMessage from '../errorMessage';
import RandomCharPage from '../randomCharPage';
import gotService from '../../services/gotService';
import {BooksPage, CharacterPage, HousesPage} from '../pages';


import './app.css';


export default class App extends Component {
    gotService = new gotService();

    state = {
        error: false,
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

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <RandomCharPage />
                    <CharacterPage />
                    <BooksPage />
                    <HousesPage />
                </Container>
            </>
        );
    }
}
