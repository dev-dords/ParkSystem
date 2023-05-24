import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ParkCard from "./parkcard";
import axios from "axios";
class ParkingLot extends Component {
  state = {
    parkedCars: [],
    capacity: 8,
  };
  componentDidMount() {
    axios.get("http://localhost:4000/parked").then((response) => {
      if (response.data.length > 0) {
        let occupied = response.data.filter(
          (parkedCars) => parkedCars.parked
        ).length;
        let vacant = this.state.capacity - occupied;

        this.setState({
          parkedCars: response.data,
          capacity: vacant,
        });
      }
    });
  }
  renderVacancy() {
    let content = [];
    for (let i = this.state.capacity; i > 0; i--) {
      content.push(
        <Col key={i}>
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
          {this.state.parkedCars
            .filter((parkedCars) => parkedCars.parked)
            .map((lot) => (
              <Col key={lot._id}>
                <ParkCard
                  id={lot._id}
                  parked={lot.parked}
                  car={lot.car}
                  plate={lot.plate}
                  owner={lot.owner}
                  edit={Boolean(true)}
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
