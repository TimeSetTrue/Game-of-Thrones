import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import CharacterPage from '../characterPage';
import ErrorMessage from '../errorMessage';
import RandomCharPage from '../randomCharPage';


import './app.css';


export default class App extends Component {

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
                </Container>
            </>
        );
    }
}
