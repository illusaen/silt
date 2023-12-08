export enum TelnetLineEnding {
  GA = 249,
  EOR = 239,
}

export enum TelnetNegotation {
  IAC = 255,
  DONT = 254,
  DO = 253,
  WONT = 252,
  WILL = 251,
  SB = 250,
  SE = 240,
}

export enum TelnetNegotiationOptions {
  TTYPE = 24,
  EOR = 25,
  MSDP = 69,
  MSSP = 70,
  MCCP2 = 86,
  MCCP3 = 87,
  MSP = 90,
  MXP = 91,
  GMCP = 201,
}

export interface MudOptions {
  oob: TelnetNegotiationOptions.GMCP | TelnetNegotiationOptions.MSDP | undefined;
  ga: TelnetLineEnding;
}

export enum MSDPOptions {
  MSDP_VAR = 1,
  MSDP_VAL = 2,
  MSDP_TABLE_OPEN = 3,
  MSDP_TABLE_CLOSE = 4,
  MSDP_ARRAY_OPEN = 5,
  MSDP_ARRAY_CLOSE = 6,
}

// export const telnetOptionsMiddleware = () => (next) => (action) => {
//     const result = next(action);
//     if (action.type !== HistoryActionType.RAW_OUTPUT_FROM_MUD) {
//         return next(result);
//     }

//     //if it is raw output, first check if it is gmcp and then go on
//     if ( /** gmcp in store */ true && hasGmcp(action.data)) {
//         // store gmcp data
//         // const prefix = telnetOptions.gmcp + telnetOptions.iac;

//         // emit gmcp group event
//         return next(outputFromMud(action.data));
//     }

//     //if it is raw output, first check if it is msdp and then go on
//     if (msdp) {
//         // store msdp data
//         // emit msdp group event
//         return next(outputFromMud(action.data));
//     }
// };
