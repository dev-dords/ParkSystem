import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Dialog from "./dialog";
import axios from "axios";
const ParkForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const [userInput, setUserInput] = useState({
    car: data.car,
    owner: data.owner,
    plate: data.plate,
    edit: data.edit,
    id: data.id,
  });

  useEffect(() => {
    if (!data.edit) {
      setUserInput({
        car: "",
        owner: "",
        plate: "",
        edit: Boolean(false),
        id: "",
      });
    }
  }, [data]);
  const [dialog, SetDialog] = useState({
    message: "",
    isLoading: false,
  });
  const handleDialog = (e) => {
    SetDialog({
      message: "Please confirm to end the session.",
      isLoading: true,
    });
  };
  const handleChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };
  const onCancelHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const onEndHandler = (choose) => {
    if (choose) {
      axios
        .put("http://localhost:4000/parked/remove_park/" + userInput.id)
        .then(() => {
          navigate("/");
        });
    } else {
      SetDialog({
        message: "",
        isLoading: false,
      });
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      car: userInput.car,
      plate: userInput.plate,
      owner: userInput.owner,
      parked: true,
    };

    if (userInput.edit) {
      axios
        .put("http://localhost:4000/parked/edit/" + userInput.id, data)
        .then(() => {
          navigate("/");
        });
    } else {
      axios.post("http://localhost:4000/parked/new", data).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <Form
      className="formContainer shadowBox"
      style={{ maxWidth: "700px" }}
      onSubmit={onSubmitHandler}
    >
      <Form.Group className="mb-3 formGroup" controlId="formBasicModel">
        <Form.Label className="formItem">Car Model:</Form.Label>
        <Form.Control
          type="text"
          onChange={handleChange}
          value={userInput.car}
          name="car"
        />
      </Form.Group>

      <Form.Group className="mb-3 formGroup" controlId="formBasicPlate">
        <Form.Label className="formItem">Plate Number:</Form.Label>
        <Form.Control
          type="text"
          value={userInput.plate}
          name="plate"
          disabled={userInput.edit && userInput.plate.length > 0}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 formGroup" controlId="formOwner">
        <Form.Label className="formItem">Owner:</Form.Label>
        <Form.Control
          type="text"
          value={userInput.owner}
          name="owner"
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="success" type="submit" style={{ float: "right" }}>
        Submit
      </Button>
      {userInput.edit ? (
        <Button
          onClick={handleDialog}
          variant="danger"
          style={{ float: "right", marginRight: "5px" }}
        >
          End
        </Button>
      ) : (
        <></>
      )}
      <Button
        onClick={onCancelHandler}
        variant="secondary"
        style={{ float: "right", marginRight: "5px" }}
      >
        Cancel
      </Button>
      {dialog.isLoading && (
        <Dialog onDialog={onEndHandler} message={dialog.message} />
      )}
    </Form>
  );
};
export default ParkForm;
