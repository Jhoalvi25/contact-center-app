import { useEffect } from "react";

//UsewebSockets para actualización en tiempo real

export const useWebSocket = (onMessageReceived: (data: any) => void) => {
  useEffect(() => {
    const socket = new WebSocket("wss://tu-servidor-websocket.com");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessageReceived(data);
    };

    return () => {
      socket.close();
    };
  }, [onMessageReceived]);
};

