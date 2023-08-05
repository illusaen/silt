import { makeVar } from '@apollo/client';

export const inputVar = makeVar( [] );
export const outputVar = makeVar( [] );

export const cacheConfig = {
  typePolicies: {
    History: {
      fields: {
        inputs: {
          read( searchTerm = '' ): string[] {
            if ( !searchTerm ) return inputVar();
            return inputVar().filter( i => i.includes( searchTerm ) );
          }
        },
        outputs: {
          read( searchTerm = '' ): string[] {
            if ( !searchTerm ) return outputVar();
            return outputVar().filter( i => i.includes( searchTerm ) );
          }
        },
      }
    }
  }
};
