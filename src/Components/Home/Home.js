import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import League from '../League/League';
import './Home.css'
import image from '../../image/football.jpg';
const Home = () => {
    const [league, setLeague] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues))
    }, [])
    return (
        <Container>
            <div className="banner-text">
                <img style={{ width: '100%' }} src={image} alt="" />
                <h1>Sports</h1>
            </div>
            <div className="card-design">
                {
                    league.map(league => <League
                        key={league.idLeague}
                        league={league}></League>)
                }
            </div>
        </Container>
    );
};

export default Home;