import { Title } from "../atoms/Title";
import CustomLink from "../atoms/CustomLink";
import {
  candidateInfo,
  education,
  experience,
  highlights,
  skills,
  socialLinks,
} from "@/constants/data";
import Image from "next/image";
import SubTitle from "../atoms/SubTitle";
import Skills from "../atoms/Skills";
import Socials from "../atoms/Socials";
import FadeUp from "../atoms/FadeUp";
import TiltIn from "../atoms/TiltIn";
import CurvedArrow from "../atoms/CurvedArrow";
import ExperienceDetails from "../atoms/ExperienceDetails";

const noteColors = [
  "bg-[#B8FFC6]",
  "bg-[#FFA3A3]",
  "bg-[#FFE5A3]",
  "bg-[#94E6FF]",
  "bg-[#CDA3FF]",
  "bg-[#FBFF94]",
];

// Position (px), resting tilt (deg) and stacking order for each 132px note.
// The pattern repeats every 6 notes.
const notePattern = [
  { left: 0, top: 0, rotate: -6, z: 3 },
  { left: 138, top: 36, rotate: 5, z: 2 },
  { left: 10, top: 142, rotate: 4, z: 2 },
  { left: 132, top: 178, rotate: -4, z: 3 },
  { left: -4, top: 284, rotate: -3, z: 3 },
  { left: 140, top: 320, rotate: 6, z: 2 },
];
const PATTERN_HEIGHT = 426;

function notePlacement(index: number) {
  const spot = notePattern[index % notePattern.length];
  const block = Math.floor(index / notePattern.length);
  return { ...spot, top: spot.top + block * PATTERN_HEIGHT };
}

function notesHeight(count: number) {
  if (!count) return 0;
  const lastTop = Math.max(...Array.from({ length: count }, (_, i) => notePlacement(i).top));
  return lastTop + 132 + 16;
}

export function AboutSection() {
  return (
    <div className="flex flex-col items-center w-full gap-24">
      <Title label="About" />
      <div className="flex flex-col md:flex-row gap-10 px-4">
        <div className="flex flex-col gap-16 p-4 shrink-0">
          <div className="flex flex-col items-center gap-10">
            <FadeUp>
              {/* polaroid-style photo with a strip of tape */}
              <div className="relative -rotate-3 bg-white p-2.5 pb-10 border border-[#e6e6e6] shadow-[0_20px_14px_-12px_#4031a047]">
                <span
                  aria-hidden
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-2 w-16 h-6 bg-[#FBFF94]/80 shadow-sm"
                />
                <div className="w-[150px] h-[214px] overflow-hidden bg-[#d1d0d0]">
                  {candidateInfo.profileImg ? (
                    <Image
                      src={candidateInfo.profileImg}
                      alt={candidateInfo.name}
                      sizes="150px"
                      priority
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[44px] font-bold text-[#474747] gaegu-font">
                      {candidateInfo.initials}
                    </div>
                  )}
                </div>
              </div>
            </FadeUp>

            <div className="relative">
              <FadeUp>
                <p className="text-[32px] font-bold gaegu-font text-[#474747]">
                  Yours Truly
                </p>
              </FadeUp>
              {/* arrow sits to the left of the text, pointing up at the photo */}
              <div className="absolute bottom-2 right-[calc(100%+8px)] w-[80px] h-[70px] pointer-events-none">
                <CurvedArrow />
              </div>
            </div>
          </div>

          {/* highlight notes: a hand-placed, tilted collage; neighbours only touch at the corners */}
          <div
            className="relative self-center w-[272px] shrink-0"
            style={{ height: notesHeight(highlights.length) }}
          >
            {highlights.map((note, index) => {
              const spot = notePlacement(index);
              return (
                <TiltIn
                  key={note}
                  rotate={spot.rotate}
                  className="absolute"
                  style={{ left: spot.left, top: spot.top, zIndex: spot.z }}
                >
                  <div
                    className={`p-4 ${noteColors[index % noteColors.length]} shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center`}
                  >
                    <p className="text-center text-lg font-bold text-[#474747] gaegu-font leading-snug">
                      {note}
                    </p>
                  </div>
                </TiltIn>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-16 items-center md:items-start">
          {/* social links */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <SubTitle label="Links" />
            <div className="flex gap-6">
              {socialLinks.map(({ id, url, Icon }, index) => (
                <Socials
                  key={index}
                  index={index}
                  id={id}
                  url={url}
                  icon={<Icon />}
                />
              ))}
            </div>
          </div>

          {/* skills  */}
          <div className="flex flex-col gap-4 items-center md:items-start max-w-md">
            <SubTitle label="Skills" />
            <div className=" p-10 md:p-0 flex items-center flex-wrap  gap-4">
              {skills.map((skill, index) => (
                <Skills key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* experience  */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            <SubTitle label="Experience" />
            {experience.map(
              (experience) => {
                return (
                  <div
                    key={experience.company}
                    className="flex flex-col items-center md:items-start gap-2"
                  >
                    <FadeUp>
                      <p className="text-2xl font-bold text-[#474747]">
                        {experience.company}
                      </p>
                    </FadeUp>
                    <FadeUp>
                      {" "}
                      <div className="flex flex-wrap justify-center md:justify-start gap-x-4">
                        <p className="text-xl text-[#474747] gaegu-font">
                          {experience.role}
                        </p>
                        <p className="text-xl text-[#8C8FA6] gaegu-font whitespace-nowrap">
                          {experience.duration}
                        </p>
                      </div>
                    </FadeUp>
                    <FadeUp>
                      <p className="text-[#8C8FA6] max-w-lg md:max-w-2xl text-center md:text-left gaegu-font">
                        {experience.description}
                      </p>
                    </FadeUp>
                    <ExperienceDetails points={experience.detailedExperience} />
                  </div>
                );
              }
            )}

            <div className="flex flex-col items-center md:items-start gap-2">
              <SubTitle label="Education" />
              <FadeUp>
                <p className="text-2xl font-bold text-[#474747] text-center md:text-left">
                  {education.institute}
                </p>
              </FadeUp>
              <FadeUp>
                <div className="flex flex-wrap justify-center md:justify-start gap-x-4">
                  <p className="text-xl text-[#474747] gaegu-font">
                    {education.degree}
                  </p>
                  <p className="text-xl text-[#8C8FA6] gaegu-font">
                    {education.duration}
                  </p>
                </div>
              </FadeUp>
            </div>

            <CustomLink
              link={candidateInfo.resumeLink}
              icon="&#8595;"
              label="Download Resume"
              newTab={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
