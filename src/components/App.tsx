import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { CachePersistor, LocalStorageWrapper } from 'apollo3-cache-persist';
import { ComponentType, useEffect, useState } from 'react';
import { Header, Input, Output, Status, Sidebar, SidebarDialog, SideInfo, Loading } from './';

export const withApollo = ( Component: ComponentType, debug = false ) => () => {
  const [ client, setClient ] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect( () => {
    const init = async () => {
      const cache = new InMemoryCache();
      const persistor = new CachePersistor( {
        cache,
        storage: new LocalStorageWrapper( window.localStorage ),
        trigger: 'write',
        debug: debug,
      } );
      await persistor.restore();
      setClient( new ApolloClient( { cache: cache, uri: 'http://localhost:4000/graphql' } ) );
    };

    init().catch( console.error );
  }, [] );

  if ( !client ) return <Loading/>;
  return <ApolloProvider client={ client }><Component/></ApolloProvider>;
};
export const App = () => {
  const [ sidebarOpen, setSidebarOpen ] = useState( false );
  const sidebarHasOpened = () => setSidebarOpen( true );

  return (
    <div className="w-full flex flex-col">
      <SidebarDialog sidebarOpen={ sidebarOpen } sidebarHasClosed={ () => setSidebarOpen( false ) }/>
      <Header sidebarHasOpened={ sidebarHasOpened }/>
      <div className="flex flex-row grow">
        <Sidebar isNarrow={ true } sidebarHasOpened={ sidebarHasOpened }/>
        <div className="flex flex-col grow m-4">
          <Output/>
          <Status/>
          <Input/>
        </div>
        <SideInfo/>
      </div>
    </div>
  );
};
