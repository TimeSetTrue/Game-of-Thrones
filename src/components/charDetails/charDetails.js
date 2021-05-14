import React, {Component} from 'react';
import './charDetails.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const Field = ({char, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{char[field]}</span>
        </li>
    )
}

export {
    Field
}

export default class CharDetails extends Component {

    gotService = new gotService();
    state = {
        char: null,
        loading: true,
        error: false,
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
        });
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if(this.props.charId !== prevProps.charId) {
            this.setState({
                loading: true,
            })
            this.updateChar();
        }
    }

    componentDidCatch = () => {
        this.setState({
            error: true,
        })
    }

    updateChar() {
        const {charId, getData} = this.props;

        if(!charId) {
            return;
        }

        getData(charId)
            .then(char => this.onCharLoaded(char))
            .catch(this.componentDidCatch);
    }
    
    render() {
        const {char, error} = this.state;
        if(!this.state.char) {
            return <span className="select-error">Please select a character</span>
        }

        if(error) {
            return <ErrorMessage />
        }

        const {name} = char;

        // const content = !(loading || error) ? <ContentChar char={char} /> : <Spinner /> ;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {char})
                        })
                    }
                </ul>
            </div>
        );
    }
}
