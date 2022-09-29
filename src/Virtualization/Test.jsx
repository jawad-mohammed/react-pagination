import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from "axios";

function Test() {
  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedOption] = useState('');

  useEffect( () => {
    loadOptions();
  }, [])

  const loadOptions = async () => {
    try {
      const res  = await axios.get(`https://jsonplaceholder.typicode.com/users`);
     const data = await res.json()
      const dataOptions = data.map(({ id, name }) => (
        {
          label: name,
          value: id
        }
      ));
      setOptions(dataOptions);
    } catch (err) {
      console.log(err); // eslint-disable
    }
  };

  return (
    <div className="App">
      <div className="dropdown">
        <div className="label"><label>Passenger name</label></div>
        <Select
          placeholder="Select"
          options={options}
          value={selectedValue}
          onChange={(selected) => setSelectedOption(selected)}
          isClearable
        />
      </div>
    </div>
  );
}
export default Test;