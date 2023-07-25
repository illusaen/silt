import React, { useEffect, useRef, useState } from 'react';

const useAutosizeTextarea = ( textAreaRef: HTMLTextAreaElement | null, value: string ) => useEffect( () => {
  if ( textAreaRef ) {
    textAreaRef.style.height = '0px';
    textAreaRef.style.height = `${textAreaRef.scrollHeight}px`;
  }
}, [ textAreaRef, value ] );

export const Input = (): JSX.Element => {
  const [ value, setValue ] = useState( '' );
  const textareaRef = useRef<HTMLTextAreaElement>();

  useAutosizeTextarea( textareaRef.current, value );

  const handleChange = ( e: React.ChangeEvent<HTMLTextAreaElement> ) => setValue( e.target?.value );

  return (
    <div className='bg-gray-300 rounded-md shadow-lg flex'>
      <textarea
        className='bg-inherit rounded-b-md w-full focus:border-none focus:outline-0 focus:bg-gray-100 overflow-hidden resize-none p-2 px-4'
        ref={ textareaRef }
        wrap={ 'soft' }
        rows={ 1 }
        value={ value }
        onChange={ handleChange }
      />
    </div>
)};