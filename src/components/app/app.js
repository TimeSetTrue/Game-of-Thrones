import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';


export default class App extends Component {
    constructor() {
        super();
    }

    state = {
        hide: true,
    }

    toggleRandomChar = (event) => {
        this.setState({
            hide: !this.state.hide,
        })
    }

    render() {
        const{hide} = this.state;

        const randomChar = hide ? <RandomChar /> : null;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                            <button className="toggle-btn" onClick={this.toggleRandomChar}>Toggle button random</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
