import React from 'react'
import { SelectLanguageComponent } from './SelectLanguageComponent'
import { Card, Textarea } from 'flowbite-react'

export const ContainerComponent = ({ className, disabled, value, setSourceLanguage, setTargetLanguage }) => {
  return (
    <Card className={`bg-[#FFFFFF33] backdrop-blur-[25px] flex flex-col gap-24 font-poppins ${className}`}>
      <SelectLanguageComponent />
      <Textarea
        className='resize-none h-[250px] w-[300px] disabled:opacity-100'
        id="comment"
        placeholder="Input text here"
        disabled={disabled}
        value={value}
        required
        rows={4}
      />
    </Card>
  )
}
