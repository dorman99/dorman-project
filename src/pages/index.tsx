"use client";

import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-full bg-gray-300 flex justify-center">
      <div className="flex items-center flex-col justify-center">
        <h1 className="font-bebas">Welcome to the Dorman Dev!</h1>
        <p className="bg-black w-80 text-center font-sans text-gray-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nulla,
          reprehenderit laudantium eum ipsa, veniam sapiente excepturi
          consequuntur fugit culpa fugiat praesentium quod perferendis, in natus
          aliquid beatae? Deleniti, iure?
        </p>
        <p className="font-bebas p-1">
          yes yes yes, this is boring go to the{" "}
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
