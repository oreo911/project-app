import React from "react";
import login from "./ebook.png";
import Book from "./Book";

const JumbotronComponent = () => {
  return (
    <div class="container py-4">
    <div class="p-5 mb-4 bg-warning text-white border rounded-3 shadow">
    <div class="container-fluid py-5 ">
      <p >
      <h2 class="display-5 fw-bold" >Welcome to Oreo's Page</h2>
      <h3 class="display-7  ">Nikmati membaca secara Online dimanapun dan kapanpun</h3>
      <button class="btn btn-light " type="button" href="#book">Read Book's</button>
      </p>
      <img src={login} class="" width="350" height="300"  />
    </div>
</div>
<Book />
<footer class="pt-3 mt-4 text-muted border-top">
    &copy; 2021
  </footer>
</div>
  );
};

export default JumbotronComponent;
