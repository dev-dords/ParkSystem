import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ParkCard from './parkcard';
import data from '../data/data';
import axios from 'axios';
class ParkingLot extends Component {
  state = {
    parkedCars: [],
    capacity: 8,
  };
  componentDidMount() {
    axios.get('http://localhost:5000/parked').then((response) => {
      if (response.data.length > 0) {
        let free = this.state.capacity - response.data.length;

        this.setState({
          parkedCars: response.data,
          capacity: free,
        });
      }
    });
  }
  renderVacancy() {
    let content = [];
    for (let i = this.state.capacity; i > 0; i--) {
      content.push(
        <Col>
          <ParkCard />
        </Col>
      );
    }
    return content;
  }
  render() {
    return (
      <Container fluid="md" className="pb-4">
        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="gy-1 gx-4">
          {this.state.parkedCars.map((lot) => (
            <Col>
              <ParkCard
                parked="true"
                car={lot.car}
                plate={lot.plate}
                owner={lot.owner}
              />
            </Col>
          ))}
          {this.renderVacancy()}
        </Row>
      </Container>
    );
  }
}

export default ParkingLot;
