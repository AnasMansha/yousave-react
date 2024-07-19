import AdminHeader from "components/admin/Header";
import CustomTable from "components/common/CustomTable";
import { useEffect, useState } from "react";
import { getAllUsers } from "utils/apis/admin";

const UserData = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getAllUsers();
      setUserData(users);
    };

    fetchUsers();
  }, []);

  const [userData, setUserData] = useState(null);
  const headings = ["User Image", "ID", "User Name", "Email", "Signup Date"];
  const tableCols = [
    {
      dataIndex: "avatar",
      type: "image",
      alt: "https://yousave.ai/img/logo3.png",
    },
    { dataIndex: "id" },
    { dataIndex: "name" },
    { dataIndex: "email" },
    { dataIndex: "date" },
  ];
  return (
    <div>
      <AdminHeader />
      <div className="text-center text-3xl font-bold mt-10 mb-5">User Data</div>
      <div className="px-2 md:px-10 overflow-x-scroll">
        <CustomTable
          headings={headings}
          rows={userData || []}
          cols={tableCols}
          emptyMessage={
            userData === null ? "Loading..." : "No users to display"
          }
        />
      </div>
    </div>
  );
};

export default UserData;
