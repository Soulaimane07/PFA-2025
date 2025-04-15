import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Header from "../../../Components/Header/Header";
import Main from "./Main";

function Devices() {
  return (
    <div className='bg-gray-50 flex'>
        <Navbar />

        <main className='flex-1 px-10 py-4'>
          <Header />
          <Main />
        </main>
    </div>
  );
}

export default Devices;