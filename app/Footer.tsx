import NextJsLogo from "./NextJsLogo";
import TailwindCssLogo from "./TailwindCssLogo";

export default function Footer() {
  return (
    <div className="container flex gap-2 mx-auto text-white text-xs m-6 p-5 items-center">
      <div>Made with</div>
      <NextJsLogo />
      <div> & </div>

      <TailwindCssLogo />
    </div>
  );
}
