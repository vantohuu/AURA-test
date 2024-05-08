'use client'
import { Footer, Header } from "antd/es/layout/layout";
import Head from "next/head";
import Image from "next/image";
import React , { useState }from 'react';
import { Input, Switch } from 'antd';


const { Search } = Input;

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};


export default function Home() {
  const MenuConponent = () => {
    if (toggleMenu)
    return (
      <>
        <div className="flex items-center mt-2 lg:hidden w-full bg-slate-700 rounded-s px-3 py-1">
          <a href="#" class="flex-1 text-center	 text-slate-400 mx-3 hover:text-white ">
            Fillter
          </a>
          <a href="#" class="flex-1 text-center	 text-slate-400 mx-3  hover:text-white ">
            Map
          </a>
          <a href="#" class="text-slate-400 hover:text-white">
            Sign In
          </a>
        </div>
      </>
    )
  
  }

  const onClickMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  
  
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full bg-black  py-3">
      <header className="w-full text-nowrap" >
        <nav className="flex flex-col items-center lg:p-5 p-3 w-full  font-mono	">
          <div className="flex items-center w-full">
          <p className="font-semibold text-xl text-white lg:ml-3 lg:mr-8 mr-4">EatOut</p>
          <div className="flex-none  text-teal-200 hover:text-white lg:mx-8">
            <div className="w-[200px] bg-slate-600 rounded-xl h-[30px] flex p-2">
              <input placeholder="Find a restaurant" className="bg-slate-600 w-[160px] text-sm outline-none font-sans"></input>
              <button className="flex justify-center items-center">
                <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
              </button>
            </div>
          </div>
          <div class="w-full lg:flex lg:items-center hidden">
            <div className="flex items-center grow">
              <a href="#" class="text-slate-400 mx-3 hover:text-white mr-4">
                Fillter
              </a>
              <a href="#" class="text-slate-400 mx-3  hover:text-white mr-4">
                Map
              </a>
            </div>

            <a href="#" class=" text-slate-400 hover:text-white mr-4">
              Sign In
            </a>
          </div>

          <div class="grow lg:hidden ml-1 flex items-center justify-end">
            <button class="flex items-center  px-3 py-2 border rounded text-teal-200 hover:text-white hover:border-white"
              onClick={onClickMenu}
            >
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
          </div>
          <MenuConponent/>

        </nav>
      </header>
      <section>
        dấdklaksdkl
      </section>
      <footer className="bg-black w-full text-cyan-400 h-10 flex justify-center items-center">
        <div className="p-2 rounded-lg bg-slate-300">
          <span>Mod..............:</span>
          <Switch></Switch>
        </div>
      </footer>
    </main>
  );
}
