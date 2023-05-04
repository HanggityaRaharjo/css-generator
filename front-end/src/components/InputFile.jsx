import React, { useState } from "react";
import { DropzoneAreaBase } from "material-ui-dropzone";
import useStyleStore from "../store/CssStore";
import axios from "axios";

const inputFile = (props) => {
  const [selectedFile, setSelectedFile] = useState({});
  const changeStyle = useStyleStore((state) => state.changeStyle);

  console.log(props.property, "ini file");
  const HandleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("images", document.getElementById("image-upload").files[0]);
    axios
      .post("http://localhost:8000/api/store-image", data, {
        "content-type": "multipart/form-data",
      })
      .then(({ data }) => {
        changeStyle({
          property: props.property,
          value: data.name,
        });
      })
      .catch((response) => {
        console.log(response);
      });
  };
  console.log(selectedFile[0], "yg ini");

  return (
    <div>
      <div>
        <form onSubmit={(e) => HandleSubmit(e)} encType="multipart/form-data">
          <div className="flex justify-between w-full">
            <h2 className="p-2 bg-gray-300 w-fit p-2 rounded-t-md dark:bg-slate-700">
              Background Image
            </h2>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
          {/* <DropzoneAreaBase
            className="bg-red-500"
            onAdd={(fileObjs) => setSelectedFile(fileObjs)}
            onDelete={(fileObj) => console.log("Removed File:", fileObj)}
            onAlert={(message, variant) =>
              console.log(`${variant}: ${message}`)
            }
          /> */}
          <input type="file" name="" id="image-upload" />
        </form>
      </div>
    </div>
  );
};

export default inputFile;
