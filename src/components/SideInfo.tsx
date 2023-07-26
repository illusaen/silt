import { Map } from './Map';

const ChatRow = ( { data }: { data: { channel: string, timestamp: string, message: string, player: string } } ) => {
  return (
    <tr className='text-text'>
      <td>
        <p className='text-xs font-mono'>{ data.message }</p>
      </td>
    </tr>
  );
};

export const SideInfo = () => {
  const roomName = 'Room Name';
  const roomArea = 'Room Area';
  const chats = [
    { channel: 'gossip', timestamp: Date.now().toString(), message: 'This is a message', player: 'Player' },
    { channel: 'tell', timestamp: Date.now().toString(), message: 'This is a message from xyzabc', player: 'Player2' }
  ];

  return (
    <aside className='w-72 border-l-2 border-uiForegroundDark p-4'>
      <div className='flex flex-col bg-uiBackgroundDark rounded-md shadow-xl'>
        <div className='justify-center text-text text-center font-mono p-4'>
          <Map />
          <p className='text-sm'>{ roomName }</p>
          <p className='text-xs text-textDark'>{ roomArea }</p>
        </div>

        <div className='justify-center grow border-t border-uiAccentDark p-4'>
          <table>
            <tbody>
              { chats.map( ( ( chat, number ) => <ChatRow data={ chat } key={ number.toString() } /> ) ) }
            </tbody>
          </table>
        </div>
      </div>
    </aside>
  );
};