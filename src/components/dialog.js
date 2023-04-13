import { Button, Card, ListGroup } from 'react-bootstrap';
function Dialog({ message, onDialog }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0,0,0,.9)',
      }}
    >
      <Card
        style={{
          top: '20%',
          left: '50%',
          transform: 'translate(-50%,-20%)',
          padding: '2px',
          maxWidth: '30rem',
          justifyContent: 'center',
          margin: '0 5px',
        }}
      >
        <Card.Body style={{ backgroundColor: 'white' }}>
          <ListGroup style={{ marginBottom: '10px' }}>
            <h5>{message}</h5>
          </ListGroup>
          <Button
            onClick={() => onDialog(true)}
            variant="danger"
            style={{ float: 'right', marginRight: '5px' }}
          >
            End
          </Button>
          <Button
            onClick={() => onDialog(false)}
            variant="secondary"
            style={{ float: 'right', marginRight: '5px' }}
          >
            Cancel
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Dialog;
