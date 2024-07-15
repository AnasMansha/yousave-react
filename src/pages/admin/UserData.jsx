import CustomTable from "components/common/CustomTable";

const UserData = () => {
  const tableRows = ["User Image", "ID", "User Name", "Email", "Signup Data"];
  return (
    <div className="min-h-[50vh] flex justify-center mt-20">
      <CustomTable rows={tableRows} />
    </div>
  );
};

export default UserData;
