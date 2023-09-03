

import React, { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';
import { SourceComponent } from './../components/SourceComponent';
import { TargetComponent } from './../components/TargetComponent';
import { fetchLanguages, translate } from '../utils/api';

const HomePage = () => {
  const [languages, setLanguages] = useState([]);
  const [sourceLanguage, setSourceLanguage] = useState();
  const [targetLanguage, setTargetLanguage] = useState();
  const [body, setBody] = useState();
  const [translated, setTranslated] = useState('');

  const getLanguages = async () => {
    const result = await fetchLanguages();

    if (result.ok) {
      setLanguages(result.data);
    } else {
      console.log('Something Went Wrong!');
    }
  }

  const handleSubmit = async (event) => {

    const result = await translate({
      'source_language': sourceLanguage.code,
      'target_language': targetLanguage.code,
      'body': body,
    })
    console.log('result', result);
    if (result.ok) {
      setTranslated(result.data[0]);
      console.log('result.data.message',result.data);

      event.preventDefault()
    } else {
      console.log('test', result.data.message);
      event.preventDefault()
    }
    event.preventDefault()
  }

  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <div className="bg-[url('/images/background.png')] h-screen w-screen bg-cover bg-no-repeat flex flex-col gap-24 items-center justify-center font-poppins ">
      <h1 className='text-h2 uppercase text-white'>Language Translator</h1>
      {/* <form > */}
        <div className="relative flex gap-16">

          <SourceComponent
            className={'h-fit'}
            languages={languages}
            sourceLanguage={setSourceLanguage}
            body={setBody}
          />

          <Button
            onClick={handleSubmit}

            type="submit"
            className='uppercase font-[700] bg-[#FF007A] rounded-[5px] absolute top-[300px] left-[300px] z-10 focus:ring-0'
          >
            Translate
          </Button>

          <TargetComponent
            className='mt-[80px]'
            disabled={true}
            languages={languages}
            targetLanguage={setTargetLanguage}
            translated={translated}
          />
        </div>
      {/* </form> */}
    </div>
  );
}

export default HomePage;



