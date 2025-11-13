import { useState } from "react";
import Forrm from "./components/Form";
import Table from "./components/Table";
function App() {
  const initialFormData = {
    name: "",
    email: "",
  };
  const [formData, setformData] = useState(initialFormData);
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const handleFormDataChange = (key, value) => {
    console.log({ key, value });
    setformData({
      ...formData,
      [key]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted:", formData);
    if (editIndex == null) {
      setTableData([...tableData, formData]);
      setformData(initialFormData);
    } else {
      tableData[editIndex] = formData;
      setformData(initialFormData);
      setTableData(tableData);
      setEditIndex(null);
    }
  };
  const handleEdit = (index) => {
    console.log("Edit clicked on row", index);
    const clickItem = tableData[index];
    setformData(clickItem);
    setEditIndex(index);
  };
  const handleDelte = (index) => {
    tableData.splice(index, 1);
    setTableData([...tableData]);
  };
  // console.log("form data change", formData);
  return (
    <div className="p-6 mx-auto">
      <Forrm
        formdata={formData}
        handleFormDataChange={handleFormDataChange}
        handleSubmit={handleSubmit}
        editIndex={editIndex}
      />
      <Table
        tableData={tableData}
        handleEdit={handleEdit}
        handleDelte={handleDelte}
      />
    </div>
  );
}

export default App;
