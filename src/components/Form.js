import React from "react";

const Form = ({ formdata,handleFormDataChange, handleSubmit,editIndex }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">Form and table Example</h2>
      <form className="border rounded-s-lg p-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded mb-2 p-2"
          onChange={(event) => {
            const { value } = event.target;
            handleFormDataChange("name", value);
          }}
          required
          value={formdata.name}
        ></input>
        <input
          type="email"
          placeholder="email"
          className="w-full border mb-2 p-2 rounded"
          onChange={(event) => {
            const { value } = event.target;
            handleFormDataChange("email", value);
          }}
          required
          value={formdata.email}
        ></input>
        <button
          className="bg-blue-500 px-4 py-2 rounded-md text-white"
          type="submit"
        >
          { editIndex==null? "Add":"Edit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
