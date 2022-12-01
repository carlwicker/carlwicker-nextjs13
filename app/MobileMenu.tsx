import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className=" text-white font-extralight uppercase lg:hidden">
      <div className="container  mx-auto p-5">
        <div className="flex flex-col">
          <div className="cursor-pointer hover:text-green-400">
            <Link href={"/"}>Home</Link>
          </div>
          <div className="cursor-pointer hover:text-green-500">
            <Link href={"/about"}>About</Link>
          </div>
          <div className="cursor-pointer hover:text-green-600">
            <Link href={"/projects"}>Projects</Link>
          </div>
          <div className="cursor-pointer hover:text-green-700">
            <Link href={"/resume"}>Resume</Link>
          </div>
          <div className="cursor-pointer hover:text-green-800">
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
