import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Preview from "../components/Preview";

export default function Dashboard() {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <div className="flex h-screen pt-16">
        <Side />
        <Preview />
      </div>
    </div>
  );
}
