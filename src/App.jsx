import { useState } from "react";
import street from "./assets/under-con.webp";
import map from "./assets/map.png";

function App() {
  const [value, setValue] = useState("1");
  const [uploadImg, setUploadImg] = useState(null);

  // Manage Button Switch
  const manageTab = (newValue) => {
    setValue(newValue);
  };

  // Handle Upload Image
  const handleUploadImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setUploadImg(reader.result);
        setValue("3");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-full my-10">
      <div className="w-[500px] mx-auto">
        <h2 className="text-center mb-16 text-blue-600 font-bold text-5xl underline">
          Image Change :
        </h2>
        {/* Image Start*/}
        <div className="h-[300px]">
          {value === "1" && (
            <div>
              <img
                className="w-full h-[300px] border-4 rounded-lg border-[#d1d5db]"
                src={street}
                alt="street"
              />
              <img
                className="relative w-[100px] h-[100px] bottom-[120px] left-5 border-2 rounded-lg border-[#d1d5db]"
                src={map}
                alt="map"
              />
            </div>
          )}
          {value === "2" && (
            <img
              className="w-full h-[300px] border-4 rounded-lg border-[#d1d5db]"
              src={map}
              alt="map"
            />
          )}
          {value === "3" && uploadImg && (
            <img
              className="w-full h-[300px] border-4 rounded-lg border-[#d1d5db]"
              src={uploadImg}
              alt="uploadImg"
            />
          )}
        </div>
        {/* Image End*/}

        {/* Button Start */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => manageTab("1")}
            className="bg-gray-300 border border-[#d1d5db]
         w-full rounded text-sm font-semibold px-4 py-2 transition duration-300 hover:text-white hover:bg-green-500"
          >
            Switch to Street
          </button>

          <div className="border rounded border-[#d1d5db] flex gap-2 p-1">
            <button
              onClick={() => manageTab("1")}
              className={`${
                value === "1" ? "bg-green-500 text-white" : ""
              } w-full rounded text-sm font-semibold px-4 py-2 transition duration-300 hover:text-white hover:bg-green-500`}
            >
              Street
            </button>
            <button
              onClick={() => manageTab("2")}
              className={`${
                value === "2" ? "bg-green-500 text-white" : "bg-white"
              } w-full rounded text-sm font-semibold px-4 py-2 transition duration-300 hover:text-white hover:bg-green-500`}
            >
              Map
            </button>
            <label
              htmlFor="image-upload"
              className={`${
                value === "3" && uploadImg
                  ? "bg-green-500 text-white"
                  : "bg-white"
              } w-full rounded text-sm font-semibold px-4 py-2 transition duration-300 hover:text-white hover:bg-green-500`}
            >
              Image
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleUploadImg}
                style={{ display: "none" }}
              />
            </label>
          </div>
          {/* Button End */}
        </div>
      </div>
    </div>
  );
}

export default App;
