import './QuoteBox.css';
import * as React from "react";
import {connect} from "react-redux";
import {GET_NEW_QUOTE} from "./store";

const colors = [
    'rgba(255,170,170, 0.5)',
    'rgba(170,208,255, 0.5)',
    'rgba(186,255,170, 0.5)',
    'rgba(255,234,170, 0.5)',
    'rgba(240,159,255, 0.5)',
]

class Presentational extends React.Component {

    render() {
        const backgroundColor = colors[
            Math.trunc(Math.random() * (colors.length - 1))
        ];
        return (
            <div id="container">
                <div id="quote-box" style={{backgroundColor}}>
                    <section id="quote-data">
                        <h1>{ this.props.index >= 0 ? ('# ' + (this.props.index + 1)) : '' }</h1>
                        <p id="text">{this.props.quote}</p>
                        <p id="author">- {this.props.author}</p>
                    </section>
                    <section id="links">
                        <button id="new-quote" onClick={this.props.newQuote}>New Quote</button>
                    </section>
                </div>
            </div>
        )
    }
}

const Container = connect(
    state => ({
        author: state.author,
        quote: state.quote,
        index: state.index
    }),
    dispatch => ({
        newQuote: () => dispatch({type: GET_NEW_QUOTE})
    })
)(Presentational);

export default Container;
