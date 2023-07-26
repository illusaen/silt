import { Output } from '../components/Output';
import { Status } from '../components/Status';
import { Input } from '../components/Input';

export const Terminal = () =>
  <div className='flex flex-col grow m-4 divide-y divide-slate-700'>
      <Output />
      <Status />
      <Input />
  </div>