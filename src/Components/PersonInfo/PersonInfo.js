import React, { Component } from 'react'

import './PersonInfo.css'

export default class PersonInfo extends Component {

    render () {
        const { name, city, country, employer, title, favoriteMovies, id } = this.props
        return (
            <div className="personInfoContainer">
                <div className="cardIDAndName">
                    <h1> {`${name.first} ${name.last}`} </h1>
                    <h2> {`${id}/25`} </h2>
                </div>
                <div className="aboutContainer">
                    <h3> From: {`${city}, ${country}`} </h3>
                    <h3> Job Title: {`${title}`} </h3>
                    <h3> Employer: {`${employer}`} </h3>
                </div>
                <div className="favMoviesContainer">
                    <h3> Favorite Movies </h3>
                    <h4> 1. {favoriteMovies[0]} </h4>
                    <h4> 2. {favoriteMovies[1]} </h4>
                    <h4> 3. {favoriteMovies[2]} </h4>
                </div>
            </div>
        )
    }
}