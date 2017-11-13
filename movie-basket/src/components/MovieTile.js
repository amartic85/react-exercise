import React, { Component } from 'react';

class MovieTile extends Component {

    render(){
        return (
            <div style={{ width: '300px', marginBottom: "50px"}}>
                <img src={this.props.imgSrc} alt={this.props.movieTitle}/>
                <div className="movie-info">
                    <div className="table" style={{marginBottom: "5px"}}>
                        <div className="row">
                            <div className="cell">
                                <b>{this.props.movieTitle}</b>
                            </div> 
                        </div>
                    </div>
  
                    <div className="table movie-details">
                        <div className="row" >
                            <div className="cell"><b>Year:</b></div>
                            <div className="cell">&nbsp;{this.props.year}</div>
                        </div>
                        <div className="row">
                            <div className="cell"><b>Director:</b> </div>
                            <div className="cell">&nbsp;{this.props.director}</div>
                        </div>
                    </div>
                </div>
            </div>
            

        );
    }
}


export default MovieTile;