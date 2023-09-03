import React from "react";
import { Card, Label, Select, Textarea } from "flowbite-react";
import { SelectLanguageComponent } from "./SelectLanguageComponent";

export const SourceComponent = (props) => {
  const { languages, className, disabled, value, sourceLanguage, body } = props;

  return (
    <Card className={`bg-[#FFFFFF33] backdrop-blur-[25px] flex flex-col gap-24 font-poppins ${className}`}>

      {/* <SelectLanguageComponent source={sourceLanguage} /> */}

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
              <option key={index} onClick={() => sourceLanguage(values)}>
                {values.name}
              </option>)
          }
        </Select>
      </div>

      <Textarea
        className='resize-none h-[250px] w-[300px] disabled:opacity-100'
        id="comment"
        placeholder="Input text here"
        disabled={disabled}
        value={value}
        required
        rows={4}
        onChange={(e) => body(e.target.value)}
      />
    </Card>
  );
}