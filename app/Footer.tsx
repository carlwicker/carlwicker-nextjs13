import NextJsLogo from "./NextJsLogo";
import TailwindCssLogo from "./TailwindCssLogo";

export default function Footer() {
  return (
    <div className="container flex gap-2  text-white text-xs mx-auto my-0 px-5 items-center">
      <div className="whitespace-nowrap">Made with</div>
      <NextJsLogo />
      <div> & </div>

      <TailwindCssLogo />
    </div>
  );
}
