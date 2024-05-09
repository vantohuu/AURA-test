'use client'
import { Footer, Header } from "antd/es/layout/layout";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from 'react';
import { Input, Switch } from 'antd';
import NavComponent from "../../components/NavComponent";
import RestaurantComponent from "../../components/RestaurantComponent";
import { FormModal } from "../../components/FormModal";


const { Search } = Input;




// const [toggleMenu, setToggleMenu] = useState(false)

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};


export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [love, setLove] = useState(false);

  const onClickMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const onClickLove = () => {
    setLove(!love);
  };

  const listStar = (number) => {
    const list = []
    for (let i = 0; i < number; i++) {
      list.push(
        <Image className='md:m-1 ml-1' height={20} width={20} src="/star_1.png">
        </Image>
      )
    }
    for (let i = number; i < 5; i++) {
      list.push(
        <Image className='md:m-1 ml-1' height={20} width={20} src="/star_0.png">
        </Image>
      )
    }
    return list;
  }

  const infoRes = () => {
    return (
      <div className='flex flex-col w-100'>
        <div className='flex items-center'>
          <Image className='my-3' height={15} width={15} src="/clock.png">
          </Image>
          <p className="ml-2 text-wrap">Open until 11PM</p>
        </div>
        <div className='flex items-center'>
          <Image className='my-3' height={15} width={15} src="/location.png">
          </Image>
          <p className="ml-2 text-wrap">Open until 11PM</p>
        </div>
        <div className='flex items-center'>
          <Image className='my-3' height={15} width={15} src="/bill.png">
          </Image>
          <p className="ml-2 text-wrap">Openasdasdaaaaaaaaaaaaaaaa until 11PM</p>
        </div>
        <div className='flex items-center'>
          <Image className='my-3' height={15} width={15} src="/food.png">
          </Image>
          <p className="ml-2 text-wrap">Open until 11PM</p>
        </div>
      </div>
    );
  }
  const MenuConponent = () => {
    if (toggleMenu)
      return (
        <>
          <div className="flex items-center mt-2 lg:hidden w-full bg-slate-700 rounded-s px-3 py-1">
            <a href="#" className="flex-1 text-center	 text-slate-400 mx-3 hover:text-white ">
              Fillter
            </a>
            <a href="#" className="flex-1 text-center	 text-slate-400 mx-3  hover:text-white ">
              Map
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              Sign In
            </a>
          </div>
        </>
      )

  }
  return (
    <main className="flex flex-col items-center justify-between w-screen lg:h-screen bg-zinc-900  py-3">
      <header className="w-full text-nowrap" >
        <nav className="flex flex-col items-center lg:p-5 p-3 w-full  font-mono	">
          <div className="flex items-center w-full">
            <p className="font-semibold text-xl text-white lg:ml-3 lg:mr-8 mr-4">EatOut</p>
            <div className="flex-none  text-teal-200 hover:text-white lg:mx-8">
              <div className="w-[200px] bg-slate-600 rounded-xl h-[30px] flex p-2">
                <input placeholder="Find a restaurant" className="bg-slate-600 w-[160px] text-sm outline-none font-sans"></input>
                <button className="flex justify-center items-center">
                  <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full lg:flex lg:items-center hidden">
              <div className="flex items-center grow">
                <a href="#" className="text-slate-400 mx-3 hover:text-white mr-4">
                  Fillter
                </a>
                <a href="#" className="text-slate-400 mx-3  hover:text-white mr-4">
                  Map
                </a>
              </div>

              <a href="#" className=" text-slate-400 hover:text-white mr-4">
                Sign In
              </a>
            </div>

            <div className="grow lg:hidden ml-1 flex items-center justify-end">
              <button className="flex items-center  px-3 py-2 border rounded text-teal-200 hover:text-white hover:border-white"
                onClick={onClickMenu}
              >
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
              </button>
            </div>
          </div>
          <MenuConponent />
        </nav>

      </header>
      <section className="flex-1 w-full h-full flex p-3 lg:p-8">
        <div className="w-full h-full  flex-1 grid lg:grid-cols-2 grid-cols-1 bg-white rounded-sm p-5 overflow:auto ">
          <div className="col-span-auto flex flex-col justify-center items-center  ">
            {/* <RestaurantComponent/> */}
            <div className='flex flex-col mt-4 justify-center items-center w-full h-full'>
              <div className='flex items-center w-full lg:px-10 md:px-10' >
                <div className='flex flex-1 items-center'>
                  {listStar(4)}
                  <p className="font-bold text-red-500 ml-2 text-[20px]">23
                  </p>
                </div>
                <div className='flex items-center' >
                  <button>
                    <Image onClick={onClickLove} className='m-2' src={love ? "/love_1.png" : "/love_0.png"} height={24} width={24}></Image>
                  </button>
                  <button>
                    <Image className="m-2" src="/share.png" height={24} width={24}></Image>
                  </button>
                </div>
              </div>
              <p className='px-10 py-12 text-wrap font-bold text-4xl'>Vasdasdasdasd ProVIp</p>
              <div className="w-full px-10 text-slate-600">
                {infoRes()}
              </div>

              {/* <button className='w-[180px] my-5 h-[50px] font-bold rounded-full hover:bg-red-700 bg-red-500 text-white text-center'>
                BOOK A TABLE
              </button> */}
              <FormModal></FormModal>
            </div>

          </div>
          <div className="col-span-1">
            <Image className="rounded-md w-full" src='/anhdepvietnam.jpg' width={20000} height={20000}></Image>
          </div>
          <div className="absolute md:left-10 left-1 top-1/2 ">
            <button className='w-[40px] h-[50px] justify-between items-center rounded-md hover:bg-slate-400/50 bg-slate-200/75 text-center'>
              <Image src="/back.png" width={30} height={30}>
              </Image>
            </button>
          </div>
          <div className="absolute md:right-10 right-1  top-1/2">
            <button className='w-[40px] h-[50px] flex justify-between items-center rounded-md hover:bg-slate-400/50 bg-slate-200/75 text-center'>
              <Image src="/next.png" width={30} height={30}>
              </Image>
            </button>
          </div>
        </div>

      </section>
      <footer className="w-full text-white font-bold h-10 flex justify-center items-center">
        <div className="p-2 rounded-lg bg-slate-600">
          <span>Mode      :</span>
          <Switch></Switch>
        </div>
      </footer>
    </main>
  );
}
