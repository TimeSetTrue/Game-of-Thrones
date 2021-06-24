import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import ErrorMessage from '../errorMessage';
import RandomCharPage from '../randomCharPage';
import gotService from '../../services/gotService';
import {BooksPage, CharacterPage, HousesPage, BooksItem} from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';

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
            <Router basename={process.env.PUBLIC_URL}> 
                <div className="app">
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <RandomCharPage />
                        <Route path="/" exact component={() => <h1 className="app-header">
                                                                    Choose your hero
                                                                </h1> } />
                        <Route path="/characters" component={CharacterPage} />
                        <Route path="/houses" component={HousesPage} />
                        <Route path="/books" exact component={BooksPage} />
                        <Route path="/books/:id" render={
                            ({match}) => {
                                const {id} = match.params;
                                return <BooksItem bookId={id} />
                            }
                        } />
                    </Container>
                </div>
            </Router> 
        );
    }
}
