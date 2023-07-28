import { createRoot } from 'react-dom/client';

import './index.css';
import 'inter-ui/inter.css';
import { App, withApollo } from '../components';

const root = createRoot( document.getElementById( 'root' ) );
const QueryableApp = withApollo( App, true );
root.render( <QueryableApp/> );
