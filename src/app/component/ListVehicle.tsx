import { useEffect, useState } from "react";
import { ARRAY_VEHICLE } from "../mocks/vehicle-mock";
import { Vehicles } from "../models/Vehicle";
import { VehicleMarca } from "../models/VehicleMarca";
import { ARRAY_MARCAS } from "../util/domains/DomVehiculoMarcas";
import { MyVerticallyCenteredModal } from "./VehicleImg/MyVerticallyCenteredModal";

export const ListVehicle = () => {
  const [modalShow, setModalShow] = useState(false);
  const [arrVehicle, setArrVehicle] = useState<Vehicles>(
    new Vehicles(0, "", "", "", 0, "")
  );
  const [objVehicle, setObjVehicle] = useState<Vehicles[]>(ARRAY_VEHICLE);
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
      <div className="title">Ver la base de datos de los carros</div>
      <header className="table">
        <div className="bd-example">
          <div className=" d-flex justify-content-center">
            <div className="col-md-9 mt-5">
              <table className="table table-dark table-hover">
                <thead>
                  <tr className="text-info text-center">
                    <th style={{ width: "5%" }}>id</th>
                    <th style={{ width: "30%" }}>Marca</th>
                    <th style={{ width: "15%" }}>Placa</th>
                    <th style={{ width: "15%" }}>Modelo</th>
                    <th style={{ width: "25%" }}>Imagen</th>
                  </tr>
                </thead>

                <tbody>
                  {objVehicle.map((myVehicles: Vehicles, index: number) => (
                    <tr key={myVehicles.idVehicle} className="text-center">
                      <td>{myVehicles.idVehicle}</td>
                      <td>{listBrand(myVehicles.brand)}</td>
                      <td>{myVehicles.plate}</td>
                      <td>{myVehicles.model}</td>
                      <td>
                        <a
                          href="/#"
                          onClick={(e) => {
                            e.preventDefault();
                            setModalShow(true);
                            setArrVehicle(myVehicles);
                          }}
                        >
                          <img
                            src={myVehicles.imagenBase64}
                            alt=""
                            className="imagenU"
                          />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                obj={arrVehicle}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
