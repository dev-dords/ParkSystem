import { Component } from 'react';
import { Button, Card, Spinner, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ParkCard extends Component {
  render() {
    return (
      <Card
        className="shadowBox"
        style={{
          width: '20rem',
          padding: '2px',
          justifyContent: 'center',
          margin: 'auto',
        }}
      >
        <div className="cardImg">
          <Card.Img variant="top" src="/car2.png" />
        </div>
        <hr
          style={{
            background: 'none',
            borderColor: '#030229',
            color: '#030229',
            width: '18rem',
            margin: 'auto',
          }}
        />
        <Card.Body style={{ backgroundColor: 'white' }}>
          <ListGroup className="mb-2">
            <ListGroup.Item className="carModel">
              {this.props.car || 'Car Model'}
            </ListGroup.Item>
            <ListGroup.Item>
              {this.props.plate || 'Plate Number'}
            </ListGroup.Item>
            <ListGroup.Item>{this.props.owner || 'Owner'}</ListGroup.Item>
          </ListGroup>
          {this.props.parked ? (
            <Link
              to={`/edit/${this.props.plate}`}
              state={{
                car: this.props.car,
                plate: this.props.plate,
                owner: this.props.owner,
                edit: Boolean(true),
              }}
            >
              <Button variant="outline-danger">
                <Card.Subtitle>
                  {'Parked '}
                  <Spinner animation="grow" size="sm" variant="danger" />
                </Card.Subtitle>
              </Button>
            </Link>
          ) : (
            <Link
              to={'/new'}
              state={{
                car: '',
                plate: '',
                owner: '',
                edit: Boolean(false),
              }}
            >
              <Button variant="outline-success">
                <Card.Subtitle>
                  {'Available '}
                  <Spinner animation="grow" size="sm" variant="success" />
                </Card.Subtitle>
              </Button>{' '}
            </Link>
          )}
        </Card.Body>
      </Card>
    );
  }
}
export default ParkCard;
