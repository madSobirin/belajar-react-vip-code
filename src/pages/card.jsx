import React from "react";
import { Button } from "../components/elements/Button/Index";

const card = () => {
  const name = localStorage.getItem("nama");
  const handleLogout = () => {
    localStorage.removeItem("nama");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="bg-white p-4 rounded-md shadow-md grid justify-end items-center">
        <h2 className="text-lg font-bold mb-2 text-right">Welcome, {name}</h2>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      {/* Buatkan card */}
      <div className="flex justify-center">
        <div className="max-w-sm mt-10 bg-white border text-center border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <a href="#">
            <img
              className="w-full h-48 object-cover"
              src="https://plus.unsplash.com/premium_photo-1763645024194-d40bda2e9c0e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gambar Card"
            />
          </a>

          <div className="p-5 flex flex-col items-center">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Judul Card Disini
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700">
              Ini adalah deskripsi singkat untuk card tersebut. Kamu bisa
              mengisi bagian ini dengan ringkasan artikel atau detail produk.
            </p>

            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Baca Selengkapnya
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
