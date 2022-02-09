import React from "react";
import Book from "./Book";
import login from "./katolik.JPG";

const Jumbo = () => {
  return (
    <div>
      <div class=" bg-primary">
        <div class="row">
          <div class="col text-center">
            <img
              src={login}
              width="300"
              height="400"
              className="rounded-3 shadow-lg"
            />
            <p />
          </div>
          <div class="col align-self-center text-white">
            <h2 class=" fw-bold">Welcome to Oreo's Page</h2>
            <h4 class="  ">Cari dan Download Buku Pelajaran Disini</h4>
          </div>
        </div>
      </div>
      <Book />
      <footer class="pt-3 mt-4 text-muted border-top">&copy; 2021</footer>
    </div>
  );
};
export default Jumbo;
