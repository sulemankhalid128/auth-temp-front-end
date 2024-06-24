import React, { useContext, useEffect } from 'react'
import { useCurrent_UserQuery } from '../../../generated';
import { UserContext } from '../../../context/userProvider';

const useFetchUserHook = () => {
    const { data, error } = useCurrent_UserQuery();
    const { user, setUser } = useContext<any>(UserContext);
    useEffect(() => {
      if (data) {
        const { roles, ...result } = data.me;
        const userRoles = roles?.map((role: any) => role.role);
        setUser({ ...result, roles: userRoles });
      }
    }, [data]);
  return {...data?.me}
}

export default useFetchUserHook