import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const HeaderBarButton = ( { onSidebar = false, sidebarHasOpened }: {
  onSidebar?: boolean,
  sidebarHasOpened: () => void
} ) =>
  <button
    className={ `-m-2.5 p-2.5 rounded-lg ${ onSidebar ? 'hover:bg-blue hover:ring-2 hover:ring-textDark hover:ring-inset ' : '' }` }
    onClick={ () => sidebarHasOpened() }>
    <span className="sr-only">Open sidebar</span>
    <FontAwesomeIcon icon={ faBars } className={ onSidebar ? 'h-7 w-7 text-uiAccent/70' : 'h-5 w-5' }/>
  </button>;

export const Header = ( { sidebarHasOpened }: { sidebarHasOpened: () => void } ) => {
  return (
    <div
      className="flex p-4 gap-6 bg-text/50 shadow-md shadow-textDark/20 showHeaderBreakpoint:hidden text-textDark align-middle">
      <HeaderBarButton sidebarHasOpened={ sidebarHasOpened }/>
      <div className="text-sm font-bold">Silt</div>
    </div>
  );
};
