import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';

export default class RandomCharPage extends Component {

	state = {
		hide: true,
		error: false,
	}

	componentDidCatch() {
		this.setState({
			error: true,
		})
	}

	toggleRandomChar = (event) => {
        this.setState((state) => {
            return {
                hide: !state.hide,
            }
        })
    }

	render() {

		if(this.state.error) {
			return <ErrorMessage />
		}

		const{hide} = this.state;
		const randomChar = hide ? <RandomChar /> : null;

		return (
			<Row>
				<Col lg={{size: 5, offset: 0}}>
					{randomChar}
					<button className="toggle-btn" onClick={this.toggleRandomChar}>Toggle button random</button>
				</Col>
			</Row>
		)
	}
}