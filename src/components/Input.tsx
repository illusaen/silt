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
    <div className='rounded-md shadow-xl flex'>
      <textarea
        className='bg-uiBackgroundDark rounded-b-md w-full focus:border-none focus:outline-0 overflow-hidden resize-none p-2 px-4 text-textDark focus:text-text text-sm hover:ring-2 focus:ring-2 ring-uiAccent ring-inset'
        ref={ textareaRef }
        wrap={ 'soft' }
        rows={ 1 }
        value={ value }
        onChange={ handleChange }
        onFocus={ e => e.target.select() }
      />
    </div>
)};