import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/Footer";

import logo from "../assets/images/ayo-masak-large.png";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen container mx-auto px-5">
        <div className="text-2xl font-bold mt-5 text-center text-gray-800">
          Tentang Ayo Masak
        </div>
        <div className="flex flex-col items-center">
          <img src={logo} alt="Ayo Masak Logo" style={{ width: "400px" }} />
        </div>
        <div>
          <p className="mt-3 capitalize text-lg">
            Ayo Masak adalah web pencarian resep makanan dan minuman. Selain
            pencarian resep user juga dapat menyimapan resep pada device user,
            sehiggga resep dapat dibuka kembali jika user akan mencoba resep
            tersebut di kemudian hari, dan user tidak perlu susah-susah untuk
            mencari kembali resep tersebut. <br />
            data resep yang disedikan berasal dari{" "}
            <a
              className="underline underline-offset-1"
              href="https://github.com/tomorisakura/unofficial-masakapahariini-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Api unofficial masak apa hari ini
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
