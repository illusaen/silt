import { Component } from 'react';

const outputs = Array.from( Array(100).keys() ).map( x => `test ${(x+1).toString()}` );

export class Output extends Component {
  render = () => 
    <div className='bg-gray-900 rounded-t-md shadow-xl text-sky-100 grow p-4 overflow-y-scroll break-words snap-y justify-end'>
      <ul className='list-none'>
        { 
          outputs.map( output =>
            <li className='snap-start' key={ output }>{ output }</li>
          )
        }
      </ul>
    </div>
};
