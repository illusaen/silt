import { Map } from './Map';

const TableRow = ( { label }: { label: string } ) => {
  return (
    <tr className='text-text'>
      <td>
        <p className='text-xs font-mono'>{ label }</p>
      </td>
    </tr>
  );
};

export const SideInfo = () => {
  const roomName = 'Room Name';
  const roomArea = 'Room Area';
  const chats = [
    { channel: 'gossip', timestamp: Date.now().toString(), message: 'This is a message', player: 'Player' },
    { channel: 'tell', timestamp: Date.now().toString(), message: 'This is a message from xyzabc afsdjklajlksdf', player: 'Player2' }
  ];
  const campaign = {
    isGquest: false,
    roomNameCp: false,
    cooldown: 30,
    mobs: [ { name: 'bustard', position: 'Hoard' }, { name: 'Demonic fox', position: 'Ragnatittu' } ]
  };
  const title = `${campaign.isGquest ? 'Global Quest' : 'Campaign'} - ${campaign.cooldown} min`;
  const items = campaign.mobs.map( mob => `${ mob.name } - ${ mob.position }` );

  return (
    <aside className='w-[320px] border-l-2 border-uiForegroundDark p-4 hidden showSidebarBreakpoint:flex'>
      <div className='flex-col w-full bg-uiBackgroundDark rounded-md shadow-xl'>

        { /* Map */ }
        <div className='justify-center text-text text-center font-mono p-4'>
          <Map />
          <p className='text-sm'>{ roomName }</p>
          <p className='text-xs text-textDark font-bold'>{ roomArea }</p>
        </div>

        { /* Info */ }
        <div className='p-4 justify-center border-t border-uiAccentDark'>
          <table className='w-full'>
            <thead>
              <tr><th><p className='text-xs text-textDark text-center'>{ title }</p></th></tr>
            </thead>
            <tbody>
              { items.map( ( item, number ) => <TableRow label={ item } key={ number.toString() } /> ) }
            </tbody>
          </table>
        </div>
        
        { /* Chat */ }
        <div className='p-4 justify-center border-t border-uiAccentDark grow'>
          <table>
            <tbody>
              { chats.map( ( ( chat, number ) => <TableRow label={ chat.message } key={ number.toString() } /> ) ) }
            </tbody>
          </table>
        </div>

      </div>
    </aside>
  );
};