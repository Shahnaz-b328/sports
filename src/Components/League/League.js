import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './League.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const League = (props) => {
  const { idLeague, strLeague, strSport } = props.league;
  const history = useHistory();
  const handelClick = (idLeague) => {
    const url = `/league/${idLeague}`;
    history.push(url);
  }

  return (
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '15px' }}>{strLeague}</Card.Title>
        <Card.Text>
          Sports Type: {strSport}
        </Card.Text>
        <Button onClick={() => handelClick(idLeague)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
      </Card.Body>
    </Card>
  );
};

export default League;