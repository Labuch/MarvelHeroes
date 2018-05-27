import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import { Link } from "react-router-dom";

class ItemDetail extends Component {

    componentDidMount() {
        const {type, id } = this.props.match.params;
        this.props.fetchData(`${type}/${id}`);
    }
    renderSubElements(type) {
        const itemDetail  = this.props.itemDetail[0];

        return (
            <ul>
                {itemDetail[type].items.map((item,index) => <li key={type+index} className="list-group-item"><Link
                    to={`/item/${item.resourceURI.replace("http://gateway.marvel.com/v1/public/","")}`}>{item.name}</Link></li>)}
            </ul>
        );

    }

    renderComics(){

        const itemDetail  = this.props.itemDetail[0];
        return (
        <div className="Card">
            <img className="cardImage"
                 src={itemDetail.images[0].path + "." + itemDetail.images[0].extension} width="200"
                 />
            <Link style={{gridColumn: 1}} to="/">Back To Index</Link>
            <div className="characterDetail">
                <h3>{itemDetail.title}</h3>
                <p className="heroDescription">{itemDetail.description}</p>
                <h6>Stories</h6>
                {this.renderSubElements('stories')}
            </div>

        </div>);


    }

    renderStorie(){

        const itemDetail  = this.props.itemDetail[0];
        return (
            <div className="Card">
                <img className="cardImage"
                     width="200"
                />
                <Link style={{gridColumn: 1}} to="/">Back To Index</Link>
                <div className="characterDetail">
                    <h3>{itemDetail.title}</h3>
                    <p className="heroDescription">{itemDetail.description}</p>
                    <h6>Comics</h6>
                    {this.renderSubElements('comics')}
                </div>

            </div>);

    }
    renderSerie(){
        const itemDetail  = this.props.itemDetail[0];
        return (
            <div className="Card">
                <img className="cardImage"
                     src={itemDetail.images[0].path + "." + itemDetail.images[0].extension} width="200"
                />
                <Link style={{gridColumn: 1}} to="/">Back To Index</Link>
                <div className="ItemDetail">
                    <h3>{itemDetail.title}</h3>
                    <p className="Description">{itemDetail.description}</p>
                    <h6>Comics</h6>
                    {this.renderSubElements('comics')}
                </div>

            </div>);
    }

    render()
    {
        if (!(this.props.itemDetail.length === 1))
        {
            return <div>loading...</div>
        }
        else
        {

            if (this.props.itemDetail[0].id != this.props.match.params.id)
            {
                return <div>loading...</div>
            }
            const item =()=>{
                switch (this.props.match.params.type)
                {
                case "comics":
                    return this.renderComics() ;
                case "series":
                    return this.renderSerie() ;
                case "stories":
                    return this.renderStorie() ;
                default:
                    return "";
                }
            }

            return (
                <div>
                {
                   item()
                }
                </div> )
        }


    }
}
function mapStateToProps(state) {

    return { itemDetail: state.activeItem };
}

export default connect(mapStateToProps, {fetchData})(ItemDetail);
