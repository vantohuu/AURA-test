'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from 'antd';

export default function RestaurantComponent() {


    const onClickMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    const listStar = () => {
        const list = []
        for (let i = 0; i < 5; i++) {

            list.push(
                <Image className='m-1' height={15} width={15} src="/star_1.png">
                </Image>
            )
        }
        return list;
    }

    const infoRes = () => {
        return (
            <div className='flex flex-col'>
                <div className='flex items-center'>
                    <Image className='m-2' height={15} width={15} src="/clock.png">
                    </Image>
                    <p>Open until 11PM</p>
                </div>
                <div className='flex items-center'>
                    <Image className='m-2' height={15} width={15} src="/location.png">
                    </Image>
                    <p>Open until 11PM</p>
                </div>
                <div className='flex items-center'>
                    <Image alt="ssss" className='m-2' height={15} width={15} src="/bill.png">
                    </Image>
                    <p>Open until 11PM</p>
                </div>
                <div className='flex items-center'>
                    <Image className='m-2' height={15} width={15} src="/food.png">
                    </Image>
                    <p>Open until 11PM</p>
                </div>
            </div>
        );
    }


    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className='flex flex-col mt-10 justify-center items-center w-full h-full'>
            <div className='flex items-center w-full  mx-10' >
                <div className='flex flex-1 items-center'>
                    {listStar()}
                    <p className="m-10 font-extrabold">
                        23
                    </p>
                </div>
                <div className='flex items-center' >
                    <Image className='m-2' src="/love_0.png" height={24} width={24}></Image>
                    <Image className="m-2" src="/share.png" height={24} width={24}></Image>
                </div>
            </div>
            <h2 className='mx-10 py-12'>VAn Tho Huu ProVIp</h2>
            <div>
                {infoRes()}
            </div>
            
            <button className='w-[200px] h-[100px] rounded-md bg-black text-white text-center'>
                Book a table
            </button>
        </div>
    );
}
