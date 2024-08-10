import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [err, setErr] = useState('');
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData(e.target.files[0]); // Capture the file data
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  //   const formData = new FormData();
  // formData.append('avatar', e.target.files[0]);
    try {
      const response1 = await axios.post('/api/image/putimage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });      const response2 = await axios.get('/api/image/getimage');
      console.log(response2.data);
      if (response2.data.success === false) {
        console.log(response2.data.message);
        return;
      }
    } catch (error) {
      setErr("Surprise error", error);
    }
  };

  return (
    <>
      <div>homer</div>
      <form onSubmit={handleSubmit}>
        <input type='file' id="file" onChange={handleChange} />
        <input type='submit' />
      </form>
      <div>
        {err !== '' ? err : ""}
        {/* {response1 ? response1.json() : ""} */}
      </div>
    </>
  );
}
