import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCharacterDetail } from "../actions";

class CharacterDetail extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchCharacterDetail(id);
    }

    renderDetail() {

        const characterDetail  = this.props.characterDetail[0];
        return (
            <div className="characterCard">
                <img className="cardImage"
                     src={characterDetail.thumbnail.path + "." + characterDetail.thumbnail.extension} width="200"
                     height="200"/>
                <Link style={{gridColumn: 1}} to="/">Back To Index</Link>
                <div className="itemDetail">
                    <h3>{characterDetail.name}</h3>
                    <p className="description">{characterDetail.description}</p>
                    <h6>Comics</h6>
                    {this.renderSubElements('comics')}
                    <h6>Series</h6>
                    {this.renderSubElements('series')}
                    <h6>Stories</h6>
                    {this.renderSubElements('stories')}
                </div>

            </div>
        )
    }



    renderSubElements(type) {
        const itemDetail  = this.props.characterDetail[0][type];
        const itemsToShow =  itemDetail.items ? itemDetail.items: [itemDetail];
        return (
            <ul>
                {   itemsToShow.map((item,index) => <li key={type+index} className="list-group-item"><Link
                    to={`/item/${item.resourceURI.replace("http://gateway.marvel.com/v1/public/","")}`}>{item.name}</Link></li>)}
            </ul>
        );

    }



    render()
    {
        if (!(this.props.characterDetail.length === 1) || (this.props.characterDetail[0].id != this.props.match.params.id) ) {
            return <div>loading...</div>
        }

        return (<div>
            {this.renderDetail()}
        </div> )
    }
}
function mapStateToProps(state) {
    return { characterDetail: state.activeItem };
}

export default connect(mapStateToProps, {fetchCharacterDetail})(CharacterDetail);
