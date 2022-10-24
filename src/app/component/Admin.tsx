import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ARRAY_VEHICLE } from "../mocks/vehicle-mock";
import { Vehicles } from "../models/Vehicle";
import { VehicleMarca } from "../models/VehicleMarca";
import { ARRAY_MARCAS } from "../util/domains/DomVehiculoMarcas";

export const Admin = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modalShow, setModalShow] = useState(false);
  const [objVehicle, setObjVehicle] = useState<Vehicles>(
    new Vehicles(0, "", "", "", 0, "")
  );
  const [arrVehicle, setArrVehicle] = useState<Vehicles[]>(ARRAY_VEHICLE);
  const deleteVehicle = (code: number) => {
    let limit = arrVehicle.length;
    for (let i = 0; i < limit; i++) {
      if (arrVehicle[i] !== undefined) {
        const comparar = arrVehicle[i].idVehicle;
        if (comparar === code) {
          arrVehicle.splice(i, 1);
        }
      }
    }
  };
//See brand tu vehicle
const [objMarcas, setMarcas] = useState<VehicleMarca[]>(ARRAY_MARCAS);
  const listBrand = (brand: string) => {
    var brandint = parseInt(brand);
    var nameBrand;
    objMarcas.forEach((myBrand: VehicleMarca) => {
      if (myBrand.id === brandint) {
        nameBrand = myBrand.nameMarca;
      } else {
        return "Error";
      }
    });
    return nameBrand;
  };
  return (
    <div>
      <div className="title">Administrar la base de datos de los carros</div>
      <header className="table">
        <div className="bd-example">
          <div className=" d-flex justify-content-center">
            <div className="col-md-9 mt-5">
              <table className="table table-dark table-hover">
                <thead>
                  <tr className="text-info text-center ">
                    <th style={{ width: "5%" }}>id</th>
                    <th style={{ width: "20%" }}>Marca</th>
                    <th style={{ width: "15%" }}>Placa</th>
                    <th style={{ width: "15%" }}>Modelo</th>
                    <th style={{ width: "15%" }}>Nombre imagen</th>
                    <th style={{ width: "15%" }}>/</th>
                  </tr>
                </thead>
                <tbody>
                  {arrVehicle.map((myVehicles: Vehicles, index: number) => (
                    <tr key={myVehicles.idVehicle} className="text-center">
                      <td>{myVehicles.idVehicle}</td>
                      <td>{listBrand(myVehicles.brand)}</td>
                      <td>{myVehicles.plate}</td>
                      <td>{myVehicles.model}</td>
                      <td>{myVehicles.imagenName}</td>
                      <td>
                        <a
                          href=""
                          onClick={(e) => {
                            e.preventDefault();
                            setShow(true);
                            //Traer el obejto vehiculo
                            setObjVehicle(myVehicles);
                          }}
                        >
                        <i className="fa-solid fa-trash-can text-danger"></i>{" "}
                        </a>
                        <Link to={`/update/${myVehicles.idVehicle}`}>
                        <i className="fa-solid fa-edit"></i>{" "}
                        </Link>
                        <i className="fa-solid fa-rotate text-info"></i>{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>
                    Eliminar este vehiculo: {objVehicle.plate}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {objVehicle.brand} {objVehicle.model}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                  </Button>
                  <Button
                    className="bg-danger"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteVehicle(objVehicle.idVehicle);
                      setShow(false);
                    }}
                    variant="primary"
                  >
                    Eliminar
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
