function GameCard({ link, image }) {
  return (
    <div className="card">
      <a href={link}>
        <img src={image} width="400" height="200" />
      </a>
    </div>
  );
}

function Games() {
  return (
    <main className="row">
      <GameCard link="snake.html" image="yo.jpeg" />
      <GameCard link="tic.html" image="tic-tac.jpg" />
    </main>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("react-root")
);
root.render(<Games />);
