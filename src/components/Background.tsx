//Backgroun o fondo de las paginas

const Background = ({ imageUrl }: { imageUrl: string }) => (
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url('${imageUrl}')` }}
  >
    <div className="absolute inset-0 bg-black/50"></div>
  </div>
);

export default Background;
