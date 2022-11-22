import React, { useContext } from "react";
import { getImageApi } from "../../api/imageUploadApi";
import { hostDataApi } from "../../api/user";
import BecameHostForm from "../../Components/Form/BecameHostForm";
import { AuthContext } from "../../contexts/AuthProvider";

const BecameAHost = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const image = event.target.image.files[0];
    getImageApi(image).then((data) => {
      const hostData = {
        location: location,
        dataImg: data,
        email: user?.email,
        role: "request",
      };
      hostDataApi(hostData).then((data) => console.log(data));
    });
  };
  return (
    <div>
      <BecameHostForm handleSubmit={handleSubmit}></BecameHostForm>
    </div>
  );
};

export default BecameAHost;
