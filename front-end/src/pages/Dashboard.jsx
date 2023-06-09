import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Preview from "../components/Preview";

export default function Dashboard() {
  return (
    <div className=" min-h-screen bg-white dark:bg-[#0f172a] dark:text-slate-200 text-gray-600">
      <Navbar />
      <div className="flex min-h-screen pt-16">
        <Side />
        <Preview />
      </div>
    </div>
  );
}
