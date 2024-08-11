import React, { useEffect, useState } from "react";

export default function ExportSubsidy() {
  const [formData, setFormData] = useState({
    FarmerID: "",
    FarmerName: "",
    AadhaarNumber: "",
    LandLocation: "",
    CropType: "",
    SubsidyAmount: "",
    ExportDate: "",
    ApprovalStatus: false,
  });

  // const [data, setData] = useState([])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // useEffect(()=> {
  //   fetch("/api/subsidy/export/").then(res => res.json()).then(res=>setData(res));
  // }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('/api/export-subsidies', formData);
      const response = await fetch("/api/subsidy/export/add/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // console.log(response2.data);
      // Handle successful form submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error in form submission
    }
  };

  // const formattedData = data.map((d) => {
  //   return <h1>{d.CropType}</h1>
  // })

  return (
    <div className="p-10 ">
      <h1 className="text-3xl font-bold  text-[#304b24] mb-8">
        Export Subsidy
      </h1>

      <h2 className="text-2xl font-semibold mb-4">Description</h2>
      <p className="text-xl font-semibold ">
      {/* {formattedData} */}
        The Indian government provides export subsidies to promote the
        competitiveness of its goods and services in the global market. These
        incentives aim to offset domestic production costs and encourage
        exporters to expand their international reach. Key export subsidy
        schemes include the Merchandise Exports from India Scheme (MEIS) and the
        Service Exports from India Scheme (SEIS), which offer duty credit scrips
        to exporters. Additionally, initiatives like interest equalization on
        pre- and post-shipment rupee export credit and exemptions or reductions
        in customs duties on imported inputs further support India's export
        sector. However, some of these subsidies have faced challenges under
        World Trade Organization (WTO) rules, prompting reforms and adjustments
        in recent years.
      </p>

      <div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto bg-white p-8 rounded-lg shadow-md mt-5"
        >
          <h2 className="text-2xl font-bold mb-6">Add Export Subsidy</h2>

          <div className="flex justify-between shrink gap-6">
            <div className="mb-4 flex-1">
              <label className=" text-sm font-medium text-gray-700">
                Farmer ID
              </label>
              <input
                type="text"
                name="FarmerID"
                value={formData.FarmerID}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4 flex-1">
              <label className=" text-sm font-medium text-gray-700">
                Farmer Name
              </label>
              <input
                type="text"
                name="FarmerName"
                value={formData.FarmerName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex justify-between shrink gap-6">
            <div className="mb-4 flex-1">
              <label className=" text-sm font-medium text-gray-700">
                Aadhaar Number
              </label>
              <input
                type="text"
                name="AadhaarNumber"
                value={formData.AadhaarNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4 flex-1">
              <label className=" text-sm font-medium text-gray-700">
                Land Location
              </label>
              <input
                type="text"
                name="LandLocation"
                value={formData.LandLocation}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex justify-between shrink gap-6">
            <div className="mb-4 flex-1">
              <label className=" text-sm font-medium text-gray-700">
                Crop Type
              </label>
              <input
                type="text"
                name="CropType"
                value={formData.CropType}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4 flex-1">
              <label className=" text-sm font-medium text-gray-700">
                Subsidy Amount
              </label>
              <input
                type="number"
                name="SubsidyAmount"
                value={formData.SubsidyAmount}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex justify-start shrink gap-6">
            <div className="mb-4 w-[50%] pr-3">
              <label className="block text-sm font-medium text-gray-700">
                Export Date
              </label>
              <input
                type="date"
                name="ExportDate"
                value={formData.ExportDate}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          {/* <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Approval Status</label>
        <select
          name="ApprovalStatus"
          value={formData.ApprovalStatus}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        >
          <option value="">Select Status</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div> */}

          <button
            type="submit"
            className=" bg-blue-500 text-white p-2 px-5 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        {formattedData}
      </div>
    </div>
  );
}
