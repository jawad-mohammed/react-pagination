import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


const Dropdown = () => {
   // const [selectedOption, setSelectedOption] = useState(null);  
    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedOption] = useState('');
    useEffect(()=>{
    fetchData()
    },[])
const fetchData = async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
    console.log(data);
    
    const dataOptions=data.map(({id,name})=>(
        {
            label:name,
            value:id
        }
    ))
    setOptions(dataOptions)
}


  return (
    <>
    Dropdown
   
      <Select
          placeholder="Select"
          options={options}
          value={selectedValue}
          onChange={(selected) => setSelectedOption(selected)}
          isClearable
        />
    {options.map((user)=>{
  return(<div key={user.id}>
    {user.name}
  </div>)
    })}
    
    </>
  )
}

export default Dropdown