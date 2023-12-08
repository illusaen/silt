import { useAppSelector } from '../../app/hooks';
import { selectSettingsById } from './settingsSlice';
import { RootState } from '../../app/store';

export const Settings = () => {
  const id = 'TEST';
  const settings = useAppSelector( ( state: RootState ) => selectSettingsById( state, id ) );

  const { showTimestamp, echoInput, selectInputOnSubmit } = settings;
  return (
    <div className="bg-uiBackgroundDark rounded-t-md shadow-xl text-text grow p-4 overflow-y-scroll break-words w-full">
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
    </div>
  );
};
