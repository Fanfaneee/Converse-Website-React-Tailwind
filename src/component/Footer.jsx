import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

                {/* Section supérieure : Logo et liens de navigation */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/img/Converse.logo.png" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img
                            src="public\img\Converse_logo.png"
                            className="h-20"
                            alt="Converse Logo"
                        />

                    </a>

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Séparateur */}
                <hr className="my-6 border-default sm:mx-auto lg:my-8" />

                {/* Copyright */}
                <span className="block text-sm text-body sm:text-center">
                    © 2023 <a href="https://flowbite.com/" className="hover:underline">Converse</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}