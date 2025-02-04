"use client";
import styles from './Dashboard.module.scss'
import Image from "next/image";
import {notFound, redirect, useParams, usePathname, useRouter} from "next/navigation";
import {Prata} from "next/dist/compiled/@next/font/dist/google";
import {useEffect, useState} from "react";


export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    // Функция обработки отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setError(null);
        setSuccessMessage(null);

        const data = { email, password };

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccessMessage('Регистрация прошла успешно!');
                setEmail('');
                setPassword('');
            } else {
                setError(result.message || 'Произошла ошибка');
            }
        } catch (err) {
            setError('Не удалось подключиться к серверу');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-semibold text-center mb-6">Регистрация</h1>
                <form onSubmit={handleSubmit}>
                    {/* Поле для e-mail */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Введите ваш e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Поле для пароля */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Введите ваш пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Ошибки и успешные сообщения */}
                    {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
                    {successMessage && <p className="text-green-600 text-sm mb-4">{successMessage}</p>}

                    {/* Кнопка регистрации */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-2 rounded-lg ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600'} text-white hover:bg-blue-700 transition`}
                    >
                        {isSubmitting ? 'Загрузка...' : 'Зарегистрироваться'}
                    </button>
                </form>
            </div>
        </div>
    );







    // return (
    //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
    //         <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
    //             <h1 className="text-2xl font-semibold text-center mb-6">Регистрация</h1>
    //             <form>
    //                 {/* Поле для e-mail */}
    //                 <div className="mb-4">
    //                     <label
    //                         htmlFor="email"
    //                         className="block text-sm font-medium text-gray-700 mb-1"
    //                     >
    //                         E-mail
    //                     </label>
    //                     <input
    //                         type="email"
    //                         id="email"
    //                         className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    //                         placeholder="Введите ваш e-mail"
    //                         required
    //                     />
    //                 </div>
    //                 {/* Поле для пароля */}
    //                 <div className="mb-6">
    //                     <label
    //                         htmlFor="password"
    //                         className="block text-sm font-medium text-gray-700 mb-1"
    //                     >
    //                         Пароль
    //                     </label>
    //                     <input
    //                         type="password"
    //                         id="password"
    //                         className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    //                         placeholder="Введите ваш пароль"
    //                         required
    //                     />
    //                 </div>
    //                 {/* Кнопка регистрации */}
    //                 <button
    //                     type="submit"
    //                     className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
    //                 >
    //                     Зарегистрироваться
    //                 </button>
    //             </form>
    //         </div>
    //     </div>
    // );

}