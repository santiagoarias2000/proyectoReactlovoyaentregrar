export class    Vehicles{
    public idVehicle: number;
    public brand: string;
    public imagenBase64: string;
    public imagenName: string;
    public model: number;
    public plate: string;

    constructor(id: number, brand: string, imagenBase64: string, imagenName:string,model: number,plate:string){
        this.idVehicle = id;
        this.brand = brand;
        this.imagenBase64 = imagenBase64;
        this.imagenName = imagenName;
        this.model = model;
        this.plate = plate;

    }
}