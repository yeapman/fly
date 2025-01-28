"use client";
import styles from './Dashboard.module.scss'
import Image from "next/image";
import {notFound, redirect, useParams, usePathname, useRouter} from "next/navigation";
import {Prata} from "next/dist/compiled/@next/font/dist/google";
import {useEffect, useState} from "react";

const fetchData = async() => {
    // const response = await fetch("/api/users");
    // const data = await response.json();
    // return data;
}

export default function Page() {

    // const {push} = useRouter()
    // push('/dashboard/1')
    // const pathname = usePathname()
    // console.log(pathname)
    // const params = useParams();

    // return (<div className={styles.dashboard}>Products
    // <Image src='/next.svg' alt='' width={200} height={50} />
    // </div>)

    // ЄТО SSR - неоптимизирован!!!
    // const data = await fetchData()
    // if (!data) notFound();
    return (
        <div className="min-h-screen bg-blue-50">
            {/* Fixed Navigation Bar */}
            {/*<nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">*/}
            {/*    <div className="container mx-auto px-6 py-4 flex justify-between items-center">*/}
            {/*        /!* Logo *!/*/}
            {/*        <div className="text-xl font-bold text-blue-500">*/}
            {/*            MyLogo*/}
            {/*        </div>*/}

            {/*        /!* Center Menu *!/*/}
            {/*        <div className="flex space-x-6">*/}
            {/*            <a href="#" className="text-gray-700 hover:text-blue-500">Главная</a>*/}
            {/*            <a href="#" className="text-gray-700 hover:text-blue-500">Топ-каперы</a>*/}
            {/*            <a href="#" className="text-gray-700 hover:text-blue-500">События</a>*/}
            {/*        </div>*/}

            {/*        /!* Registration Button *!/*/}
            {/*        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">*/}
            {/*            Регистрация*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</nav>*/}

            {/* Main Content */}
            <div className="pt-20 p-6">
                {/* Header */}
                <header className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h1 className="text-2xl font-bold text-blue-500">Капер</h1>
                    <p className="text-gray-600">Сервис для тех, кто ставит </p>
                </header>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-semibold text-blue-500">Sales</h2>
                        <p className="text-gray-600 mt-2">Total sales this month: $12,345</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-semibold text-blue-500">Users</h2>
                        <p className="text-gray-600 mt-2">Total users: 1,234</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-semibold text-blue-500">Tasks</h2>
                        <p className="text-gray-600 mt-2">Pending tasks: 5</p>
                    </div>
                </div>

                {/* Chart Section */}
                <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold text-blue-500">Monthly Performance</h2>
                    <div className="mt-4 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Chart Placeholder</p>
                    </div>
                </div>


            </div>
        </div>
    );

}