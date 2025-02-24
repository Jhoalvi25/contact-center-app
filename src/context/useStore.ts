import { create } from 'zustand';

//Interfaces

interface Agent {
  id: string;
  name: string;
  status: string;
  waitTime: number;
}

interface Client {
  id: string;
  name: string;
  waitTime: number;
}

interface StoreState {
  agents: Agent[];
  clients: Client[];
  setAgents: (agents: Agent[]) => void;
  setClients: (clients: Client[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  agents: [],
  clients: [],
  setAgents: (agents) => set({ agents }),
  setClients: (clients) => set({ clients }),
}));
