"use client";

import { useState } from "react";
import Link from "next/link";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative z-50">
            <div className="flex items-center justify-between p-4">
                {/* Botão de menu hamburguer visível apenas em telas menores que 640px */}
                <button 
                    className="block md:hidden text-white focus:outline-none cursor-pointer" 
                    onClick={toggleMenu}
                >
                    <svg 
                        className="w-8 h-8" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M4 6h16M4 12h16m-7 6h7" 
                        />
                    </svg>
                </button>

                {/* Menu normal visível apenas em telas maiores que 640px */}
                <ul className="hidden md:flex gap-16 links text-white font-semibold text-lg">
                    <li className="hover:text-green-400"><Link href="/">Home</Link></li>
                    <li className="hover:text-green-400"><Link href="/cadastro">Cadastro</Link></li>
                    <li className="hover:text-green-400"><Link href="/atividades">Atividades</Link></li>
                    <li className="hover:text-green-400"><Link href="/pgInt">Página de Integrantes</Link></li>
                    <li className="hover:text-green-400"><Link href="/contato">Contato</Link></li>       
                </ul>
            </div>

            {/* Menu dropdown visível apenas em telas menores que 640px */}
            {isOpen && (
                <ul className="flex flex-col items-center w-24 absolute top-16 left-0 right-0 bg-gray-800 p-4 rounded shadow-lg md:hidden">
                    <li className="mb-4">
                        <Link href="/" className="text-white font-semibold hover:text-green-400 text-sm sm:text-base" onClick={toggleMenu}>Home</Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/cadastro" className="text-white font-semibold hover:text-green-400 text-sm sm:text-base" onClick={toggleMenu}>Cadastro</Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/pgInt" className="text-white font-semibold hover:text-green-400 text-sm sm:text-base" onClick={toggleMenu}>Página de Integrantes</Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/contato" className="text-white font-semibold hover:text-green-400 text-sm sm:text-base" onClick={toggleMenu}>Contato</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}