import { Button, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const ParkForm = () => {
    
  const location = useLocation();
  var car, plate, owner;
  if (location.state !== null) {
    if (location.pathname.startsWith('/edit')) {
      car = location.state.car;
      plate = location.state.plate;
      owner = location.state.owner;
    }
    if (location.pathname.startsWith('/new')) {
      car = '';
      plate = '';
      owner = '';
    }
  }
  return (
    <Form className="formContainer shadowBox" style={{ maxWidth: '700px' }}>
      <Form.Group className="mb-3 formGroup" controlId="formBasicModel">
        <Form.Label className="formItem">Car Model:</Form.Label>
        <Form.Control type="text" defaultValue={car} />
      </Form.Group>

      <Form.Group className="mb-3 formGroup" controlId="formBasicPlate">
        <Form.Label className="formItem">Plate Number:</Form.Label>
        <Form.Control type="text" defaultValue={plate} />
      </Form.Group>

      <Form.Group className="mb-3 formGroup" controlId="formOwner">
        <Form.Label className="formItem">Owner:</Form.Label>
        <Form.Control type="text" defaultValue={owner} />
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
};
export default ParkForm;
