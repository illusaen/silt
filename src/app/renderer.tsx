import { createRoot } from 'react-dom/client';

import './index.css';
import 'inter-ui/inter.css';
import { App, withApollo, withRedux } from '../components';

const root = createRoot( document.getElementById( 'root' ) );
const QueryableApp = withRedux( withApollo( App ) );
root.render( <QueryableApp/> );
