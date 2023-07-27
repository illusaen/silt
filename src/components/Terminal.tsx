import { Output } from './Output';
import { Status } from './Status';
import { Input } from './Input';

export const Terminal = () =>
  <div className='flex flex-col grow m-4'>
      <Output />
      <Status />
      <Input />
  </div>