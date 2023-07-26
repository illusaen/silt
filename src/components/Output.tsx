import { useEffect, useRef } from "react";

const outputs = Array.from( Array(100).keys() ).map( x => `test ${(x+1).toString()}` );

export const Output = () => {
  const showTimestamps = false;

  const divRef = useRef<HTMLDivElement>();
  useEffect( () => {
    if (divRef.current) {
      divRef.current.scrollTo( 0, divRef.current.scrollHeight - divRef.current.clientHeight );
    }
  }, [] );

  return (
    <div className='bg-gray-900 rounded-t-md shadow-xl text-sky-100 grow p-4 overflow-y-scroll break-words' ref={ divRef }>
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
