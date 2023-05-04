import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Preview from "../components/Preview";
import useStyleStore from "../store/CssStore";

export default function PreviewAll() {
  const stateComponents = useStyleStore((state) => state);
  return (
    <div className=" min-h-screen bg-white dark:bg-[#0f172a] dark:text-slate-200 text-gray-600">
      <Navbar />
      <div className="flex min-h-screen pt-16">
        <Side />
        {/* Disini Isi */}
        <div className="p-5">
          {/* Button */}
          <div className="grid grid-cols-4 gap-2">
            <button className="bg-primary text-white px-2 py-[3px] rounded-md">
              Button
            </button>
            <button className="bg-primary text-white px-2 py-[3px] rounded-md">
              Button
            </button>
            <button className="bg-primary text-white px-2 py-[3px] rounded-md">
              Button
            </button>
            <button className="bg-primary text-white px-2 py-[3px] rounded-md">
              Button
            </button>
          </div>
          {/* End Button */}
        </div>
        {/* End Disini Isi */}
      </div>
    </div>
  );
}
