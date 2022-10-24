import { Route, Routes } from "react-router-dom";
import { Admin } from "../../component/Admin";
import { Body } from "../../component/Body";
import { Create } from "../../component/Create";
import { ListVehicle } from "../../component/ListVehicle";
import { Update } from "../../component/Update";


export const Ruteo = () =>{
    return(
        <Routes>
            <Route path = "/init" element={<Body/>}/>
            <Route path = "/create" element={<Create/>}/>
            <Route path = "/catalogo" element={<ListVehicle/>}/>
            <Route path = "/admi" element={<Admin/>}/>
            <Route path = "/Update/:code" element={<Update/>}/>
        </Routes>
    );
};