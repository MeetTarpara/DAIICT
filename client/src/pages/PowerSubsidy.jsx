import React, { useState } from "react";

export default function PowerSubsidy() {
    const [formData, setFormData] = useState({
        farmerID: '',
        electricity_connection_number: '',
        connection_type: '',
        connection_load: '',
        meter_number: '',
        subsidy_type_applied_for: '',
        previous_subsidy_availed: false,
        previous_subsidy_details: '',
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log(formData);
      };
    
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold  text-[#304b24] mb-8">
        Power Subsidy
      </h1>

      <h2 className="text-2xl font-semibold mb-4">Description</h2>
      <p className="text-xl font-semibold ">
      The Indian government provides power subsidies to reduce the cost of electricity for certain groups, such as farmers, low-income households, and small industries. These subsidies are aimed at making electricity more affordable and ensuring access to essential energy services. The government often covers a portion of the electricity costs, which helps alleviate the financial burden on consumers. However, these subsidies can also strain the finances of state governments and impact the sustainability of power distribution companies.
      </p>
      <div>
      <form onSubmit={handleSubmit} className="mx-auto bg-white p-8 rounded-lg shadow-md mt-5">
      <h2 className="text-2xl font-semibold mb-6">Power Subsidy Form</h2>

      <div className="flex justify-between shrink gap-6">
      <div className="flex-1 mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="farmerID">Farmer ID</label>
        <input
          type="text"
          id="farmerID"
          name="farmerID"
          value={formData.farmerID}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="flex-1 mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="electricity_connection_number">Electricity Connection Number</label>
        <input
          type="text"
          id="electricity_connection_number"
          name="electricity_connection_number"
          value={formData.electricity_connection_number}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      </div>

      <div className="flex justify-between shrink gap-6">

      <div className="mb-4 flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="connection_type">Connection Type</label>
        <input
          type="text"
          id="connection_type"
          name="connection_type"
          value={formData.connection_type}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4 flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="connection_load">Connection Load (kW)</label>
        <input
          type="number"
          id="connection_load"
          name="connection_load"
          value={formData.connection_load}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      </div>

      <div className="flex justify-between shrink gap-6">
      <div className="mb-4 flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="meter_number">Meter Number</label>
        <input
          type="text"
          id="meter_number"
          name="meter_number"
          value={formData.meter_number}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4 flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subsidy_type_applied_for">Subsidy Type Applied For</label>
        <input
          type="text"
          id="subsidy_type_applied_for"
          name="subsidy_type_applied_for"
          value={formData.subsidy_type_applied_for}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      </div>

      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="previous_subsidy_availed">Previous Subsidy Availed</label>
        <input
          type="checkbox"
          id="previous_subsidy_availed"
          name="previous_subsidy_availed"
          checked={formData.previous_subsidy_availed}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
      </div> */}

      {formData.previous_subsidy_availed && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="previous_subsidy_details">Previous Subsidy Details</label>
          <textarea
            id="previous_subsidy_details"
            name="previous_subsidy_details"
            value={formData.previous_subsidy_details}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      )}

      <button type="submit" className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
        Submit
      </button>
    </form>
      </div>
    </div>
    

  );
}
