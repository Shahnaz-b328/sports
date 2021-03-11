import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './LeagueDetail.css';
import twitter from '../../image/Twitter.png';
import facebook from '../../image/Facebook.png';
import youtube from '../../image/YouTube.png';
import female from '../../image/female.png';
import male from '../../image/male.png';
const LeagueDetail = () => {
    const { id } = useParams();
    const [leagueDetail, setLeagueDetail] = useState([]);
    const { strLeague, intFormedYear, strCountry, strGender, strDescriptionEN, strFanart2, strLogo, strSport } = leagueDetail;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagueDetail(data.leagues[0]));
    }, [id])
    return (
        <Container className="mt-5">
            <img src={strFanart2} alt="" />
            <div className="logo">
                <img src={strLogo} alt="" />
            </div>
            <Row className="background-color">
                <div className="league-detail mt-5">
                    <Col>
                        <h3>{strLeague}</h3>
                        <h4> Founded: {intFormedYear}</h4>
                        <h4>Country: {strCountry}</h4>
                        <h4>Sport Type: {strSport}</h4>
                        <h4>Gender: {strGender}</h4>
                    </Col>
                    <Col className="gender-image">
                        {
                            (strGender)
                                ? <img width="400px" height="200px" style={{ borderRadius: '5px' }} src={male} alt="" />
                                : <img width="400px" height="200px" style={{ borderRadius: '5px' }} src={female} alt="" />
                        }
                    </Col>
                </div>
                <div className="mt-5 paragraph">
                    <p>{strDescriptionEN}</p>
                </div>
            </Row>
            <div className="social-icon mt-5">
                <a target="_blank" href="https://twitter.com/"><img src={twitter} alt="" /></a>
                <a target="_blank" href="https://web.facebook.com/"><img src={facebook} alt="" /></a>
                <a target="_blank" href="https://www.youtube.com/"><img src={youtube} alt="" /></a>
            </div>
        </Container>
    );
};

export default LeagueDetail;