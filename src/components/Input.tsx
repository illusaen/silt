import { text } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useRef, useState } from 'react';

const useAutosizeTextarea = ( textAreaRef: HTMLTextAreaElement | null, value: string ) => useEffect( () => {
  if ( textAreaRef ) {
    textAreaRef.style.height = '0px';
    textAreaRef.style.height = `${ textAreaRef.scrollHeight }px`;
  }
}, [ textAreaRef, value ] );

const splitInputs = ( data: string ): string[] => {
  const r = data.replace( '\n', ';' ).split( ';' );
  return r.reduce( ( acc, curr ) => {
    if ( curr === '' ) return acc;

    let modifiedCurrent = curr;
    if ( curr.at( -1 ) === '\\' ) {
      modifiedCurrent = curr.slice( 0, -1 ) + ';';
    }

    if ( acc.at( -1 ) && acc.at( -1 ).at( -1 ) === ';' ) {
      return [ ...acc.slice( 0, -1 ), acc.at( -1 ) + modifiedCurrent ];
    }

    return [ ...acc, modifiedCurrent ];
  }, [] );
};

const handleKeyDown = (
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  textareaRef: React.MutableRefObject<HTMLTextAreaElement>
) => ( e: React.KeyboardEvent<HTMLTextAreaElement> ) => {
  if ( e.key === 'Enter' && !e.shiftKey ) {
    e.preventDefault();
    handleSubmit( value );

    textareaRef.current.select();
    return;
  }

  if ( e.key === 'Escape' && !e.shiftKey ) {
    e.preventDefault();
    setValue( '' );
  }
};

const handleSubmit = ( v: string ) => {
  if ( !v ) return;
  const r = splitInputs( v );
  if ( r.length === 0 ) return;

  console.log( r );
};

export const Input = () => {
  const [ value, setValue ] = useState( '' );
  const textareaRef = useRef<HTMLTextAreaElement>();

  useAutosizeTextarea( textareaRef.current, value );

  return (
    <div className="rounded-md shadow-xl flex">
      <textarea
        className="bg-uiBackgroundDark rounded-b-md w-full focus:border-none focus:outline-0 overflow-hidden resize-none p-2 px-4 text-textDark focus:text-text text-sm hover:ring-2 focus:ring-2 ring-uiAccent ring-inset"
        ref={ textareaRef }
        wrap={ 'soft' }
        rows={ 1 }
        autoFocus={ true }
        value={ value }
        onChange={ e => setValue( e.target.value ) }
        onFocus={ e => e.target.select() }
        onKeyDown={ handleKeyDown( value, setValue, textareaRef ) }
      />
    </div>
  );
};