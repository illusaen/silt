import { useState } from 'react';

import { Terminal } from '../components/Terminal';
import { SideInfo } from '../components/SideInfo';
import { Sidebar, SidebarDialog } from '../components/Sidebar';
import { Header } from '../components/Header';

export const App = () => {
  const [ sidebarOpen, setSidebarOpen ] = useState( false );
  const sidebarHasOpened = () => setSidebarOpen( true );

  return (
    <div className='w-full flex flex-col'>
      <SidebarDialog sidebarOpen={ sidebarOpen } sidebarHasClosed={ () => { console.log('sidebarhasclosed'); setSidebarOpen( false ) } } />
      <Header sidebarHasOpened={ sidebarHasOpened } />
      <div className='flex flex-row grow'>
        <Sidebar isNarrow={ true } sidebarHasOpened={ sidebarHasOpened } />
        <Terminal />
        <SideInfo />
      </div>
    </div>
  );
};
