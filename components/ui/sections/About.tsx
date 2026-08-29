import AboutMe from "../about/AboutMe";
import MyPhoto from "../about/MyPhoto";
import Skills from "../about/Skills";
import SocialMedia from "../about/SocialMedia";
import HeadSection from "../HeadSection";

export default function About() {
  return (
    <div
      id="about"
      className="scroll-mt-12 lg:scroll-mt-24 w-full bg-background py-12"
    >
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-full">
          <HeadSection text="About Me" />
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-6 gap-4 lg:h-200">
            <AboutMe />

            <SocialMedia />

            <MyPhoto />

            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}
