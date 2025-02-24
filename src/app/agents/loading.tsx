//Spinner de carga

const LoadingAgents = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-lg font-medium">Cargando agentes...</p>
      </div>
    </div>
  );
};

export default LoadingAgents;

  