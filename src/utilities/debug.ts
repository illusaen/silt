export enum LogLevel {
  ERROR,
  WARN,
  INFO,
  SUCCESS,
}

const logColors = [ '\u001b[31m', '\u001b[33m', '\u001b[37m', '\u001b[32m' ];
const RESET = '\u001b[0m';

export const Logger = ( { log, message, level = LogLevel.SUCCESS }: { log: boolean, message: string, level?: LogLevel } ) => {
  const logColor = ( level: LogLevel ): string => logColors[ level ];

  if ( log ) {
    console.log( `${logColor( level )} DEBUG: ${message}${RESET}` );
  }
}
