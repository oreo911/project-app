import React from "react";
import Book from "./Book";
import login from "../img/indo.jpg";

const Jumbo = () => {
  return (
    <div>
      <div class=" bg-primary">
        <div class="row">
          <div class="col text-center">
            <img
              src={login}
              width="290"
              height="400"
              className="rounded-3 shadow-lg"
            />
            <p />
          </div>
          <div class="col align-self-center text-white">
            <h2 class=" fw-bold display-5">Download E-Book Gratis</h2>
            <h4>Cari dan Download Buku Pelajaran Disini</h4>
            <button type="button" class="btn btn-warning btn-lg text-white">DOWNLOAD EBOOK</button>
          </div>
        </div>
      </div>
      <div className="container">
      <Book />
      </div>
    </div>
  );
};
export default Jumbo;
