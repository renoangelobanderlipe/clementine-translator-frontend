import { Label, Select } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { fetchLanguages } from '../utils/api';

export const SelectLanguageComponent = () => {
  const [languages, setLanguages] = useState([]);

  const getLanguages = async () => {
    const result = await fetchLanguages();

    if (result.ok) {
      setLanguages(result.data);
      console.log('result.data.message');
    } else {
      console.log('Something Went Wrong!');
    }
  }

  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <div
    className="max-w-md font-poppins"
    id="select"
  >
    <div className="mb-2 block">
      <Label
        htmlFor="countries"
        value="Select a language"
        className='text-white font-poppins'
      />
    </div>
    <Select
      id="countries"
      required
      className='font-poppins text-[20px]'
    >
      {
        languages.map((values, index) =>
          <option key={index}>
            {values.name}
          </option>)
      }
    </Select>
  </div>
  )
}
