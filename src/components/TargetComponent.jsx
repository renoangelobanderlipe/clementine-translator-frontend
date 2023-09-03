import { Card, Label, Select, Textarea } from "flowbite-react";
import React from "react";
import { SelectLanguageComponent } from "./SelectLanguageComponent";


export const TargetComponent = (props) => {
  const { languages, className, disabled, value, targetLanguage, translated } = props;

  return (
    <Card className={`bg-[#FFFFFF33] backdrop-blur-[25px] flex flex-col gap-24 font-poppins ${className}`}>
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
              <option key={index} onClick={() => targetLanguage(values)}>
                {values.name}
              </option>)
          }
        </Select>
      </div>
      <Textarea
        className='resize-none h-[250px] w-[300px] disabled:opacity-100'
        id="comment"
        placeholder={{...translated}?.translatedText ?? ""}
        disabled={disabled}
        value={value}
        required
        rows={4}
      />
    </Card>
  );
}