import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { VehicleMarca } from "../models/VehicleMarca";
import { ARRAY_MARCAS } from "../util/domains/DomVehiculoMarcas";
import noPhoto from "../../assets/img/noImagen.jpg";
import { useFormCar } from "../util/misGanchos/useFormCar";
import { Vehicles } from "../models/Vehicle";
import { ConverterBase64 } from "../util/funtions/ConverterBase64";
import { ARRAY_VEHICLE } from "../mocks/vehicle-mock";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  type formaHtml = React.FormEvent<HTMLFormElement>;

  /*Create variable for combobox to the brand vehicle */
  const [arregloMarcas] = useState<VehicleMarca[]>(ARRAY_MARCAS);
  const [imagenMiniatura, setImagenMiniatura] = useState(noPhoto);
  const [inProcess, setInProcess] = useState<boolean>(false);

  const [imgBase64, setImgBase64] = useState<string>("");
  const [arrayVehicles] = useState<Vehicles[]>(ARRAY_VEHICLE);
  const navegation = useNavigate();

  const sendForm = (fh: formaHtml) => {
    fh.preventDefault();
    const formCar = fh.currentTarget;
    if (formCar.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
      setInProcess(true);
    } else {
      const newCode = arrayVehicles.length +1;
      //objet to the let
      myObject.idVehicle = newCode;
      myObject.imagenBase64 = imgBase64;
      
      arrayVehicles.push(myObject);
//sent to next page
      setInProcess(false);
      navegation("/catalogo");
    }
  };
  /*Para usa el hook */
  let { brand, imagenName, imagenBase64, model, plate, doubleLink, myObject } =
    useFormCar<Vehicles>(new Vehicles(0, "", "", "", 0, ""));

  /*Funtion load img */
  const loadImg = async (e: any) => {
    const archive = e.target.files;
    const imagen = archive[0];

    setImagenMiniatura(URL.createObjectURL(imagen));
    /*So, and the two data Binding */
    doubleLink(e);
    const myBase64 = await ConverterBase64(imagen);
    setImgBase64(String(myBase64));
    /*but and the base 64 */
  };

  /* onChange
    const [car, setCar] = useState({
    marca: "",
    placa: "",
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCar((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(value);
  };
  use form onChange
  <label htmlFor="exampleInputEmail1" className="form-label">
                Marca
              </label>
              <input
                type="text"
                name="marca"
                value={car.marca}
                className="form-control"
                onChange={onChange}
              />*/
  return (
    <div className="d-flex justify-content-center MarginCreate">
      <div>
        <img src="" alt="" />
      </div>
      <div className="card col-md-5">
        <div className="card-body ColorA">
          <Form validated={inProcess} onSubmit={sendForm} noValidate>
            <label htmlFor="disabledTextInput" className="form-label">
              Crear un vehiculo
            </label>

            <div className="mb-3">
              <Form.Group controlId="brand">
                <Form.Label>
                  <span className="colorDelete">*</span> Marca
                </Form.Label>

                <Form.Select
                  size="sm"
                  required
                  name="brand"
                  value={brand}
                  onChange={doubleLink}
                >
                  <option value="">Seleccione una marca.</option>
                  {arregloMarcas.map((myBrand: VehicleMarca) => (
                    <option key={myBrand.id} value={myBrand.id}>
                      {myBrand.nameMarca}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group controlId="plate">
                <Form.Label>
                  <span className="colorDelete">*</span> Placa
                </Form.Label>

                <Form.Control
                  placeholder="Escriba la marca"
                  size="sm"
                  required
                  type="text"
                  name="plate"
                  value={plate}
                  onChange={doubleLink}
                ></Form.Control>
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group controlId="model">
                <Form.Label>
                  <span className="colorDelete">*</span> Modelo
                </Form.Label>

                <Form.Control
                  size="sm"
                  required
                  type="text"
                  name="model"
                  value={model}
                  onChange={doubleLink}
                ></Form.Control>
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group controlId="imagenBase64">
                <Form.Label>
                  <span className="colorDelete">*</span> Seleccionar una imagen
                </Form.Label>
                <Form.Control
                  size="sm"
                  required
                  type="file"
                  name="imagenBase64"
                  value={imagenBase64}
                  onChange={loadImg}
                ></Form.Control>
              </Form.Group>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-center">
                <img
                  src={imagenMiniatura}
                  alt="No imagen"
                  className="tamanoMaximoNoFoto"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary ColorA">
              Crear
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};
