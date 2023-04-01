import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ParkCard from './parkcard';
import data from '../data/data';
class ParkingLot extends Component {
  render() {
    return (
      <Container fluid="md" className="pb-4">
        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="gy-1 gx-4">
          {data.parkinglots.map((lot) => (
            <Col>
              <ParkCard
                parked={lot.parked}
                car={lot.car}
                plate={lot.plate}
                owner={lot.owner}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default ParkingLot;
