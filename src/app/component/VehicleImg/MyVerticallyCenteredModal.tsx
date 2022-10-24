import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { ARRAY_VEHICLE } from '../../mocks/vehicle-mock';


export const MyVerticallyCenteredModal =(props: any)=>{

    const idVehicle = Number(props.obj.idVehicle);
    const myVehicle = ARRAY_VEHICLE.find((theVehicle)=>{
        return theVehicle.idVehicle  === idVehicle
    })
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {myVehicle?.brand}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='d-flex justify-content-center'>
        <Card style={{ width: '20rem' }}>
      <img src={myVehicle?.imagenBase64} alt="" className='center' />
      <Card.Body>

      </Card.Body>
    </Card>

      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center'>
        <Button onClick={props.onHide} className="col-md-5">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}