import { useState, ChangeEvent } from "react";

export const useFormCar = <T extends Object>(ObjectInit: T) => {
  const [myObject, setMyObject] = useState(ObjectInit);

  const doubleLink = ({ target }: ChangeEvent<any>) => {
    const { name, value } = target;
    setMyObject({
      //desestructurar el myObjecto
      ...myObject,
      //
      [name]: value,
    });
  };
  return {
    myObject,
    doubleLink,
    ...myObject,
  };
};
