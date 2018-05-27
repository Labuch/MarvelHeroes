import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCharacters } from "../actions";

class CharactersIndex extends Component {
    constructor(props) {
        super(props);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this)
        this.state = {offset: 0};
    }

    componentDidMount() {
        this.props.fetchCharacters(0);
    }

    renderCharacters() {

        return _.map(this.props.characters, character => {
            return (
                <li className="characterItem" key={character.id}>
                    <img src={character.thumbnail.path+"."+character.thumbnail.extension} width="100" height="100"/>
                    {character.name}
                    <Link to={`/character/${character.id}`}>
                            Detail
                    </Link>
                </li>
            );
        });

    }

    handlePrevClick(){
        const newOffset = this.state.offset-50;
        this.props.fetchCharacters(newOffset);
        this.setState(() => ( {offset: newOffset}));
    }
    handleNextClick(){
        const newOffset = this.state.offset+50;
        this.props.fetchCharacters(newOffset);
        this.setState(() => ( {offset: newOffset}));

    }

    renderPager(){

        const PrevButton = this.state.offset > 0 ? (<button onClick={this.handlePrevClick}> Previous Page </button>): null

        const NextButton = <button onClick={this.handleNextClick}  >Next Page </button>

       return (
           <div className="Pager">
               {PrevButton}
               {NextButton}

            </div>);
    }


    render() {
        return (

            <div className="charactersIndex">
                <h3>Marvel SuperHeroes: </h3>
                <ul className="list-group  index">
                    {this.renderCharacters()}
                </ul>
                {this.renderPager()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { characters: state.list };
}

export default connect(mapStateToProps, { fetchCharacters })(CharactersIndex);
