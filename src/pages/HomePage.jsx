

import React, { Fragment, useEffect, useState } from 'react';
import { fetchLanguages } from '../utils/api';
import { Label, Select } from 'flowbite-react';

const HomePage = () => {
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
    <Fragment>
      Starter Template for clementine-translator-frontend
      <div
        className="max-w-md"
        id="select"
      >
        <div className="mb-2 block">
          <Label
            htmlFor="countries"
            value="Select your country"
          />
        </div>
        <Select
          id="countries"
          required
        >
          {
            languages.map((values, index) =>
              <option key={index}>
                {values.name}
              </option>)
          }
        </Select>
      </div>
    </Fragment>
  );
}

export default HomePage;



