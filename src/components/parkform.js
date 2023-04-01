import { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

class ParkForm extends Component {
  render() {
    return (
      <Form className="formContainer shadowBox" style={{ maxWidth: '700px' }}>
        <Form.Group className="mb-3 formGroup" controlId="formBasicModel">
          <Form.Label className="formItem">Car Model:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3 formGroup" controlId="formBasicPlate">
          <Form.Label className="formItem">Plate Number:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3 formGroup" controlId="formOwner">
          <Form.Label className="formItem">Owner:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Button variant="success" type="submit" style={{ float: 'right' }}>
          Submit
        </Button>
        <Button
          variant="secondary"
          style={{ float: 'right', marginRight: '10px' }}
        >
          Cancel
        </Button>
      </Form>
    );
  }
}
export default ParkForm;
