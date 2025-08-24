import React from 'react';
import Annoucements from './components/Annoucements';
import Videos from './components/Videos';
import Gallery from './components/Gallery';

const Community = () => {
  return (
    <main className="my-10">
      <section className="flex gap-5 flex-col md:w-[90%] w-full justify-center items-center m-auto">
        <h1
          className="text-[6vw] w-[90%] text-center  md:text-[3.25vw] font-extrabold leading-tight 
            bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
        >
          Stay Connected: Latest Announcements, Events, and Community Stories
        </h1>
        <p
          className="w-full text-center m-auto lg:m-0 md:w-2/3 text-base md:text-md
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
        >
          Welcome to our community hub! Here, you’ll find all the latest
          updates, exciting events, and short videos that bring our community to
          life. Whether you’re looking for important announcements,
          behind-the-scenes insights, or ways to engage with us, this is your
          go-to place to stay informed and connected. Dive in, explore, and be
          part of the conversation!
        </p>
      </section>
      <Annoucements />
      <Videos />
      <Gallery />
    </main>
  );
};

export default Community;
