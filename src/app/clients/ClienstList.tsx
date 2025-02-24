import { FaUser, FaClock } from "react-icons/fa";
import { Client } from "@/context/useStore";

//Listado de clientes y su información

const ClientsList = ({ clients }: { clients: Client[] }) => (
  <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    {clients.map((client) => (
      <li
        key={client.id}
        className="p-5 bg-white/20 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300"
      >
        <FaUser className="text-gray-300 text-4xl mb-2" />
        <span className="text-lg font-medium text-white">{client.name}</span>
        <div className="flex items-center gap-2 mt-2">
          <FaClock className="text-gray-300 text-lg" />
          <span className="font-semibold text-white">{client.waitTime} min</span>
        </div>
      </li>
    ))}
  </ul>
);

export default ClientsList;
