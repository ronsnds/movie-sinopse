import { useEffect, useState } from "react";
import "./App.css";

interface ArrayMovies {
  title: string;
  sinopse: string;
  image: string;
  thema: string;
  id: number;
}

function App() {
  const [list, setList] = useState<ArrayMovies[]>([]);

  const [saveMovie, setSaveMovie] = useState({
    title: "",
    sinopse: "",
    thema: "",
    image: "",
  });

  useEffect(() => {
    async function getList() {
      const arq = await fetch("http://localhost:3000/");
      const movies = await arq.json();

      setList(movies);
    }

    getList();
  }, [list, saveMovie]);

  function sendListMovie() {
    if (
      saveMovie.title != "" &&
      saveMovie.sinopse != "" &&
      saveMovie.thema != "" &&
      saveMovie.image != ""
    ) {
      fetch("http://localhost:3000/upload", {
        method: "POST",
        body: JSON.stringify(saveMovie),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    } else {
      alert("Preencha todos os campos!");
    }

    setSaveMovie({
      title: "",
      sinopse: "",
      thema: "",
      image: "",
    });
  }

  return (
    <>
      <h2>Sinopse de filmes</h2>

      <div className="container-movie">
        {list?.map((i) => (
          <div key={i.id} className="movie">
            <h3>{i.title}</h3>
            <span>{i.thema}</span>
            <p>{i.sinopse}</p>
            <img src={i.image} alt="Image movie" />
          </div>
        ))}
      </div>

      <form method="POST" onSubmit={(e) => e.preventDefault()}>
        <h2>Adicionar Novo Filme:</h2>

        <fieldset>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Título do filme"
            value={saveMovie.title}
            onChange={(e) =>
              setSaveMovie((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </fieldset>

        <fieldset>
          <label htmlFor="thema">Tema:</label>
          <input
            type="text"
            name="thema"
            id="thema"
            placeholder="Tema do filme ex.: (Ação, Aventura)"
            value={saveMovie.thema}
            onChange={(e) =>
              setSaveMovie((prev) => ({ ...prev, thema: e.target.value }))
            }
          />
        </fieldset>

        <fieldset>
          <label htmlFor="sinopse">Sinopse:</label>
          <input
            type="text"
            name="sinopse"
            id="sinopse"
            placeholder="Esse filme demonstra ..."
            value={saveMovie.sinopse}
            onChange={(e) =>
              setSaveMovie((prev) => ({ ...prev, sinopse: e.target.value }))
            }
          />
        </fieldset>

        <fieldset>
          <label htmlFor="image">Imagem URL:</label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="https://example.com/imageMovie.png"
            value={saveMovie.image}
            onChange={(e) =>
              setSaveMovie((prev) => ({ ...prev, image: e.target.value }))
            }
          />
        </fieldset>

        <button onClick={sendListMovie}>Enviar</button>
      </form>

      <footer>Aplicação teste</footer>
    </>
  );
}

export default App;
