"use client";
import styles from './Dashboard.module.scss'
import Image from "next/image";
import {notFound, redirect, useParams, usePathname, useRouter} from "next/navigation";
import {Prata} from "next/dist/compiled/@next/font/dist/google";
import {useEffect, useState} from "react";


export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-semibold text-center mb-6">Регистрация</h1>
                <form>
                    {/* Поле для e-mail */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Введите ваш e-mail"
                            required
                        />
                    </div>
                    {/* Поле для пароля */}
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Введите ваш пароль"
                            required
                        />
                    </div>
                    {/* Кнопка регистрации */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );

}