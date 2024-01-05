"use client";

import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-full flex justify-center bg-gray-100">
      <div className="flex items-center flex-col justify-center">
        <h1 className="font-bebas">Welcome to the Dorman Tech!</h1>
        <div className="w-80 h-80 flex justify-center">
          <p className="bg-black font-sans text-gray-300 pt-10 px-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            nulla, reprehenderit laudantium eum ipsa,{" "}
            <span className="text-white font-bebas text-xl">
              I'm Hafizh Abdillah, &nbsp; a software engineer with &gt; 5 years of
              experience with strong proficiency at backend dev
            </span>
            , veniam sapiente excepturi consequuntur fugit culpa fugiat
            praesentium quod perferendis, in natus aliquid beatae? Deleniti,
            iure?
          </p>
        </div>
        <p className="font-bebas p-1">
          yes yes and yes, this is boring go to the {" "}
          <u>
            <Link href="projects">projects</Link>
          </u>{" "}
          instead
        </p>
      </div>
    </div>
  );
};

export default HomePage;
