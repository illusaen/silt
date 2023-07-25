import { Output } from '../components/Output';
import { Input } from '../components/Input';

export const Terminal = () =>
  <div className='flex flex-col grow m-4'>
      <Output />
      <Input />
  </div>