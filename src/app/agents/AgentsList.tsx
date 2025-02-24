import { FaUserTie, FaUserClock } from "react-icons/fa";
import { Agent } from "@/context/useStore";

const statusColors: Record<string, string> = {
  disponible: "bg-green-500 text-white",
  "en llamada": "bg-blue-500 text-white",
  pausa: "bg-yellow-500 text-white",
};
//Listado de agentes y su información
const AgentsList = ({ agents }: { agents: Agent[] }) => (
  <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    {agents.map((agent) => (
      <li
        key={agent.id}
        className="p-5 bg-white/20 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300"
      >
        <FaUserTie className="text-gray-300 text-4xl mb-2" />
        <span className="text-lg font-medium text-white">{agent.name}</span>
        <span className={`text-sm px-3 py-1 rounded-full mt-2 ${statusColors[agent.status]}`}>
          {agent.status}
        </span>
        <div className="flex items-center gap-2 mt-2">
          <FaUserClock className="text-gray-300 text-lg" />
          <span className="font-semibold text-white">{agent.waitTime} min</span>
        </div>
      </li>
    ))}
  </ul>
);

export default AgentsList;
