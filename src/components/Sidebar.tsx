import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faGear, faDisplay } from '@fortawesome/free-solid-svg-icons';

import { HeaderBarButton } from './Header';

const navigation = [
  { name: 'Game', href: '#', icon: faDisplay },
  { name: 'Settings', href: '#', icon: faGear },
  { name: 'Debug', href: '#', icon: faCode },
  { name: 'Apollo', href: 'http://localhost:4000', target: '_blank', icon: faDatabase },
];

const profiles = [
  { id: 1, name: 'Aardwolf', href: '#', initial: 'A', current: false },
  { id: 2, name: 'Kallisti', href: '#', initial: 'K', current: true },
  { id: 3, name: 'Lusternia', href: '#', initial: 'L', current: false },
];

const classNames = ( ...classes: string[] ) => classes.join( ' ' );

export const SidebarDialog = ( { sidebarOpen, sidebarHasClosed }: { sidebarOpen: boolean, sidebarHasClosed: () => void } ) => {
  return (
    <Transition.Root show={ sidebarOpen }>
      <Dialog as='div' className='relative z-100' onClose={ () => sidebarHasClosed() }>
        <Transition.Child
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-uiBackgroundDark/80' />
        </Transition.Child>

        <div className='fixed inset-0 flex'>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <Dialog.Panel className='flex max-w-fit'>
              <Sidebar isNarrow={ false } />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export const Sidebar = ( { isNarrow, sidebarHasOpened = null }: { isNarrow: boolean, sidebarHasOpened?: () => void } ) => {
  return (
    <nav className={ `flex-col space-y-16 ${isNarrow ? 'showHeaderBreakpoint:w-20 p-7 hidden showHeaderBreakpoint:flex bg-text/50' : 'w-fit py-28 px-16 flex bg-uiBackground'} flex-initial items-center drop-shadow-md shadow-textDark/20 text-textDark text-sm font-bold` }>

      { isNarrow && sidebarHasOpened !== null &&
        <div className='flex justify-center'>
          <HeaderBarButton onSidebar={ true } sidebarHasOpened={ sidebarHasOpened } />
        </div>
      }

      <div className='flex-col'>
        <ul role='list'>
          { navigation.map( navItem => (
            <li key={ navItem.name }>
              <a
                href={ navItem.href }
                target={ navItem.target }
                className={ `group flex gap-x-4 rounded-lg p-2 hover:bg-blue items-center my-0.5 ${isNarrow ? 'justify-center hover:ring-2 hover:ring-textDark hover:ring-inset ' : ''}` }
              >
                <FontAwesomeIcon icon={ navItem.icon }
                  className='h-7 w-7'
                  aria-hidden='true'
                />
                { isNarrow ? '' : navItem.name }
              </a>
            </li>
          ) ) }
        </ul>
      </div>

      <div className='flex-col grow'>
        { !isNarrow && <div className='text-xs px-2 pb-1'>Open Profiles</div> }
        <ul role='list'>
          { profiles.map( profile => (
            <li key={ profile.name }>
              <a
                href={ profile.href }
                className={ classNames(
                  profile.current ? 'text-uiAccent' : 'hover:bg-blue',
                  'group flex gap-x-3 rounded-md p-2 items-center my-0.5'
                ) }
              >
                <span
                  className={ classNames(
                    profile.current ? ( isNarrow && 'bg-uiAccent/50' || 'bg-uiAccentDark' ) : '',
                    'flex h-8 w-8 justify-center items-center rounded-lg border-2 text-[0.8rem]'
                  ) }
                >
                  { profile.name[0] }
                </span>
                { !isNarrow && <span>{ profile.name }</span> }
              </a>
            </li>
          ) ) }
        </ul>
      </div>

    </nav>
  );
};