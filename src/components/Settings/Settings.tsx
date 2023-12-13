import { useAppSelector } from '../../app/hooks';
import { selectSettingsById } from './settingsSlice';
import { RootState } from '../../app/store';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';

export const Settings = () => {
  const id = 'TEST';
  const [ isOpen, setIsOpen ] = useState( false );
  const settings = useAppSelector( ( state: RootState ) => selectSettingsById( state, id ) );

  const { showTimestamp, echoInput, selectInputOnSubmit } = settings;
  return (
    <Dialog open={ isOpen } onClose={ () => setIsOpen( false ) }>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          { `Settings for { id }` }
        </Dialog.Description>

        <table>
          <tbody>
          <tr>
            <td>Show Timestamp:</td>
            <td>{ showTimestamp }</td>
          </tr>
          <tr>
            <td>Echo Input:</td>
            <td>{ echoInput }</td>
          </tr>
          <tr>
            <td>Select Input on Submit:</td>
            <td>{ selectInputOnSubmit }</td>
          </tr>
          </tbody>
        </table>

        <button onClick={ () => setIsOpen( false ) }>Close</button>
      </Dialog.Panel>
    </Dialog>
  );
};
