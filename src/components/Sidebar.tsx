import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faDisplay, faGear } from '@fortawesome/free-solid-svg-icons';

import { HeaderBarButton } from './';

const navigation = [
  { name: 'Game', href: '#', icon: faDisplay },
  { name: 'Settings', href: '#', icon: faGear },
  { name: 'Debug', href: '#', icon: faCode },
  { name: 'Apollo', href: 'http://localhost:4000', target: '_blank', icon: faDatabase },
];

export const SidebarDialog = ( { sidebarOpen, sidebarHasClosed }: {
  sidebarOpen: boolean,
  sidebarHasClosed: () => void
} ) => {
  return (
    <Transition.Root show={ sidebarOpen }>
      <Dialog as="div" className="relative z-100" onClose={ () => sidebarHasClosed() }>
        <Transition.Child
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-uiBackgroundDark/80"/>
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={ Fragment }
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="flex max-w-fit">
              <Sidebar isNarrow={ false }/>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export const Sidebar = ( { isNarrow, sidebarHasOpened = null }: {
  isNarrow: boolean,
  sidebarHasOpened?: () => void
} ) => (
  <nav
    className={ `flex-col space-y-16 ${ isNarrow ? 'showHeaderBreakpoint:w-20 p-7 hidden showHeaderBreakpoint:flex bg-text/50' : 'w-fit py-28 px-16 flex bg-uiBackground' } flex-initial items-center drop-shadow-md shadow-textDark/20 text-textDark text-sm font-bold` }
  >
    { isNarrow && sidebarHasOpened !== null &&
      <div className="flex justify-center">
        <HeaderBarButton onSidebar={ true } sidebarHasOpened={ sidebarHasOpened }/>
      </div>
    }

    <div className="flex-col">
      <ul role="list">
        { navigation.map( navItem => (
          <li key={ navItem.name }>
            <a
              href={ navItem.href }
              target={ navItem.target }
              className={ `group flex gap-x-4 rounded-lg p-2 hover:bg-blue items-center my-0.5 ${ isNarrow ? 'justify-center hover:ring-2 hover:ring-textDark hover:ring-inset ' : '' }` }
            >
              <FontAwesomeIcon icon={ navItem.icon }
                               className="h-7 w-7"
                               aria-hidden="true"
              />
              { isNarrow ? '' : navItem.name }
            </a>
          </li>
        ) ) }
      </ul>
    </div>
  </nav>
);
