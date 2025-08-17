"use client"
import React, { useState } from 'react';
import LeafletMap from './components/LeafletMap';
import ContactForm from './components/ContactForm';

const Contact = () => {

  return (
    <main className="w-full px-10 my-10">
      <h1
        className="text-[7vw] text-center w-[90%] m-auto md:text-[4.25vw] font-extrabold leading-tight 
            bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
      >
        Empowering Businesses with Technology, Intelligence, and Innovation
      </h1>
      <LeafletMap className="rounded-2xl" />
      <ContactForm/>
    </main>
  );
};

export default Contact;
