import React from "react";
import { getImageApi } from "../../api/imageUploadApi";
import BecameHostForm from "../../Components/Form/BecameHostForm";

const BecameAHost = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.value;
    const image = event.target.image.files[0];
    console.log(image);
    getImageApi(image).then((data) => console.log(data));
    //   const hostData = {
    //     location: location,

    //   }
  };
  return (
    <div>
      <BecameHostForm handleSubmit={handleSubmit}></BecameHostForm>
    </div>
  );
};

export default BecameAHost;
