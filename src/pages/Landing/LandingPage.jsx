import React from "react";
import NavBar from "../../components/NavBar";
import CardArt from "./CardArt";
import logo from "./Health.png";
import "./card.css"
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavBar />
      <br />
      <div className="mb-10">
        <div className="flex justify-center ">
          <div className="rounded-lg shadow-lg bg-white max-w-md shadow-md transition duration-150 ease-in text-center">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                src={logo}
                alt="logo"
                className="rounded-t-lg"
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Tes Tingkat Stres</h5>
              <p className="text-gray-700 text-base mb-4">
              Tes ini bisa mengukur tingkat stres dalam dirimu. Hasil dari tes ini akan sangat membantu kamu mengetahui keadaan kesehatan mentalmu saat ini.
              </p>
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-violet-200 text-black font-medium text-s leading-tight uppercase rounded shadow-md hover:bg-violet-400 hover:shadow-lg text-white focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <Link to={"/stresstest"}>Test</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="art-card">
        <CardArt/>
      </div>
      <br />
      <br />
    </div>
  );
};

export default LandingPage;
