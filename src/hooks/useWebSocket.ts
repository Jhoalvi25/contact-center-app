import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useStore } from '../context/useStore';

const SOCKET_URL = 'wss://api-contact-center.com'; // Cambia por la URL real

export const useWebSocket = () => {
  const setAgents = useStore((state) => state.setAgents);
  const setClients = useStore((state) => state.setClients);

  useEffect(() => {
    const socket = io(SOCKET_URL);

    socket.on('updateAgents', (data) => {
      setAgents(data);
    });

    socket.on('updateClients', (data) => {
      setClients(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [setAgents, setClients]);
};
