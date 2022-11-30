import Link from "next/link";

export default async function Homepage() {
  return (
    <div className="container  flex mx-auto p-5 bg-black justify-between text-white items-center font-1 h-5">
      <h1 className="text-base font-bold uppercase">Carl Wicker</h1>
      <nav className="hidden lg:flex gap-3">
        <Link href={"/about"}>
          <button
            className="
        text-xs 
        border-gray-600 
        border-solid border-2 
        rounded-full 
        p-2   
        uppercase 
        hover:border-dashed 
        hover:border-green-500 
        hover:text-green-500 
        transition 
        ease-in 
        duration-200"
          >
            About
          </button>
        </Link>
        <Link href={"/projects"}>
          <button className="text-xs border-gray-600 border-solid border-2 rounded-full p-2 uppercase hover:border-dashed hover:border-green-600 hover:text-green-600 transition ease-in duration-200">
            Projects
          </button>
        </Link>
        <Link href={"/resume"}>
          <button className="text-xs border-gray-600 border-solid border-2 rounded-full p-2 uppercase hover:border-dashed hover:border-green-700 hover:text-green-700 transition ease-in duration-200">
            Resume
          </button>
        </Link>
        <Link href={"/contact"}>
          <button className="text-xs border-gray-600 border-solid border-2 rounded-full p-2 uppercase hover:border-dashed hover:border-green-800 hover:text-green-800 transition ease-in duration-200">
            Contact
          </button>
        </Link>
      </nav>
    </div>
  );
}
