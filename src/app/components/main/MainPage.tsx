import React, { useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useCurrent_UserQuery, useFindUserQuery } from "../../../generated";
import { UserContext, UserProvider } from "../../../context/userProvider";
import IndexPage from "./IndexPage";

const MainPage = () => {
  const { data, error } = useCurrent_UserQuery();
  const { user, setUser } = useContext<any>(UserContext);
  useEffect(() => {
    if (data) {
      const { roles, ...result } = data.me;
      const userRoles = roles?.map((role: any) => role.role);
      debugger;
      setUser({ ...result, roles: userRoles });
    }
  }, [data]);

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
