// useWebSocket.ts
import { useEffect } from "react";

// Hook genérico de WebSocket
export const useWebSocket = <T>(onMessageReceived: (data: T) => void, url: string) => {
  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onmessage = (event) => {
      const data: T = JSON.parse(event.data);
      onMessageReceived(data);
    };

    return () => {
      socket.close();
    };
  }, [onMessageReceived, url]);
};



