import { Socket } from 'net';
import { LogLevel, Logger } from './debug';


export const createSocket = (): Socket | null => {
    try {
        const socket = new Socket();
        socket.on('close', e => {
            if (e) {
                Logger({ log: true, message: `createSocket closed due to transmission error ${e}`, level: LogLevel.ERROR }
                );
            } else {
                destroySocket(socket, true); Logger({ log: true, message: `createSocket closed`, level: LogLevel.INFO });
            }
        });

        socket.on('connect', () => {
            Logger({ log: true, message: `createSocket connected`, level: LogLevel.INFO });

        });

        socket.on('data', e => {
            Logger({ log: true, message: `createSocket data`, level: LogLevel.INFO });
        });

        socket.on('end', () => {
            Logger({ log: true, message: `createSocket ended`, level: LogLevel.INFO });
        });

        socket.on('timeout', () => {
            Logger({ log: true, message: `createSocket timeout`, level: LogLevel.WARN });
        });

        socket.on('error', e => {
            Logger({ log: true, message: `createSocket error ${e}`, level: LogLevel.ERROR });
        });

        return socket;
    } catch (e) {
        Logger({ log: true, message: `createSocket error ${e}`, level: LogLevel.ERROR });
    }
};

export const destroySocket = (socket: Socket, connected: boolean) => {
    if (!socket || socket == null) return;

    try {
        socket.removeAllListeners();
        if (connected) {
            socket.end();

            Logger({ log: true, message: `destroySocket socket ended` });
        }
        socket.destroy();

        Logger({ log: true, message: `destroySocket success` });
    } catch (e) {
        Logger({ log: true, message: `destroySocket error ${e}`, level: LogLevel.ERROR });
    }
}