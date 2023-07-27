import { useState } from 'react';

import { Terminal } from './Terminal';
import { SideInfo } from './SideInfo';
import { Sidebar, SidebarDialog } from './Sidebar';
import { Header } from './Header';

export const App = () => {
  const [ sidebarOpen, setSidebarOpen ] = useState( false );
  const sidebarHasOpened = () => setSidebarOpen( true );

  return (
    <div className='w-full flex flex-col'>
      <SidebarDialog sidebarOpen={ sidebarOpen } sidebarHasClosed={ () => setSidebarOpen( false ) } />
      <Header sidebarHasOpened={ sidebarHasOpened } />
      <div className='flex flex-row grow'>
        <Sidebar isNarrow={ true } sidebarHasOpened={ sidebarHasOpened } />
        <Terminal />
        <SideInfo />
      </div>
    </div>
  );
};
