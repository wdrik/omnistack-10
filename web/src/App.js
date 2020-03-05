import React, { useEffect, useState } from "react";

import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [githubUsername, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    await api.post("/devs", {
      github_username: githubUsername,
      techs,
      latitude,
      longitude
    });

    setGithubUsername("");
    setTechs("");
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={githubUsername}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                type="number"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Logitude</label>
              <input
                name="longitude"
                type="number"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/19880078?s=460&v=4"
                alt="wdrik"
              />

              <div className="user-info">
                <strong>Iorgen Wildrik</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ut
              iste soluta in.
            </p>

            <a href="https://github.com/wdrik">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/19880078?s=460&v=4"
                alt="wdrik"
              />

              <div className="user-info">
                <strong>Iorgen Wildrik</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ut
              iste soluta in.
            </p>

            <a href="https://github.com/wdrik">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/19880078?s=460&v=4"
                alt="wdrik"
              />

              <div className="user-info">
                <strong>Iorgen Wildrik</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ut
              iste soluta in.
            </p>

            <a href="https://github.com/wdrik">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/19880078?s=460&v=4"
                alt="wdrik"
              />

              <div className="user-info">
                <strong>Iorgen Wildrik</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ut
              iste soluta in.
            </p>

            <a href="https://github.com/wdrik">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
