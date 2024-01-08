import Image from "next/image";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

export default function Contact() {
  return (
    <div className="bg-gray-200 min-h-full container min-w-full flex justify-center items-center">
      <div className="w-70 h-96 border-black flex-col justify-center flex items-center">
        <div className="text-center p-0 m-0">
          <p className="font-bebas">
            Lorem ipsum dolor, sit amet{" "}
            <span className="text-col font-sans text-gray-400">
              say hi for collaboration!
            </span>{" "}
            consectetur adipisicing elit. Temporibus obcaecati sapiente labore
            nihil
          </p>
        </div>
        {/* <div className="w-full flex justify-center">
          <div className="p-2 relative shadow-2xl shadow-black h-36 w-36 m-2 rounded-full">
            <Image
              alt="dorman's"
              className="rounded-full overflow-hidden bg-red-600"
              src="/imgs/profile.png"
              fill
            />
          </div>
        </div> */}

        <div className="w-full flex mx-auto pt-10 justify-around">
          <a href="https://instagram.com/abdillahh" target="/">
            <AiFillInstagram size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-hafizh-abdillah-abdul-rachman-7aa47b148/"
            target="/"
          >
            <AiFillLinkedin size={28} />
          </a>
          <a href="https://github.com/dorman99" target="/">
            <AiFillGithub size={28} />
          </a>
          <a href="mailto:hafizh.abdillahh@gmail.com">
            <AiFillMail size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}
