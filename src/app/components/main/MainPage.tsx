import Sidebar from "./Sidebar";
import IndexPage from "./IndexPage";
import useFetchUserHook from "../coustom-hooks/useFetchUserHook";
import { debug } from "console";

const MainPage = () => {
 const data =  useFetchUserHook()
  return (
      <div className="grid grid-cols-12 h-screen">
      <div className="col-span-2 bg-gray-800 text-white">
        <Sidebar />
      </div>
      <div className="col-span-10 bg-gray-100 p-4">
        <IndexPage/>
      </div>
    </div>
  );
};

export default MainPage;
