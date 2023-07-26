import { useEffect, useRef } from "react";

const outputs = Array.from( Array(20).keys() ).map( x => `test ${(x+1).toString()}` );

export const Output = () => {
  const showTimestamps = false;

  const divRef = useRef<HTMLDivElement>();
  useEffect( () => {
    if (divRef.current) {
      divRef.current.scrollTo( 0, divRef.current.scrollHeight - divRef.current.clientHeight );
    }
  }, [] );

  return (
    <div className='bg-uiBackgroundDark rounded-t-md shadow-xl text-text grow p-4 overflow-y-scroll break-words w-full' ref={ divRef }>
      <table>
        <tbody>
          { 
            outputs.map( ( output, index ) =>
              <tr className='' key={ index }>
                { showTimestamps && <td>{ Date.now() }</td> }
                <td>{ output }</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};
