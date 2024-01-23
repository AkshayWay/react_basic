import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((result) => result.clone().json());
      //   const json = await res.json();
      //   setUsers(res);
      //   console.log(json);

      setUsers(res);
      console.log(res);
    };

    fetchUser();
  }, []);

  return <>User List</>;
};
export default UserList;
