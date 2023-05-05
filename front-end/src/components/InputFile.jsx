import React, { useState } from "react";
// import { DropzoneAreaBase } from "material-ui-dropzone";
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
    document.getElementById("text-upload").innerHTML =
      document.getElementById("image-upload").files[0].name;
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

  const dropzoneActive = (event) => {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("output");
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div>
      <div>
        <form onSubmit={(e) => HandleSubmit(e)} encType="multipart/form-data">
          <div className="flex justify-between w-full">
            <h2 className="p-2 bg-gray-300 w-fit rounded-t-md dark:bg-slate-700">
              Background Image
            </h2>
            <button className="btn btn-primary text-white" type="submit">
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

          <div class="flex items-center justify-center w-full">
            <label
              for="image-upload"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 relative"
              id="box-upload"
              // style={{
              //   backgroundImage:
              //     "url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg)",
              // }}
            >
              <img id="output" className="absolute top-0 w-full" />
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  class="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold" id="text-upload">
                    Click to upload or drag and drop
                  </span>
                </p>
              </div>
              <input
                id="image-upload"
                type="file"
                class="hidden"
                onChange={(e) => dropzoneActive(e)}
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default inputFile;
