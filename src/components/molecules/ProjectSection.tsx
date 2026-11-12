import React from "react";
import Image from "next/image";
import { Title } from "../atoms/Title";
import { VerticalLineCurved1, VerticalLineStraight } from "../atoms/VerticalLines";
import { HorizontalLineCurved1, HorizontalLineCurved2 } from "../atoms/HorizontalLines";
import CustomLink from "../atoms/CustomLink";
import FadeUp from "../atoms/FadeUp";
import { mainProjects, socialLinks } from "@/constants/data";

const placeholderColors = ["#B8FFC6", "#94E6FF", "#FFE5A3", "#CDA3FF", "#FFA3A3", "#FBFF94"];
const githubProfile = socialLinks.find((s) => s.id === "github")?.url;

const linkClass =
    "text-xl font-bold text-[#474747] gaegu-font underline decoration-2 underline-offset-4 hover:text-black";

export const ProjectSection = () => {
    return (
        <div className="flex flex-col items-center w-full gap-24">
            <Title label="Projects" />
            <div className="flex flex-col items-center gap-16">
                {mainProjects.map((project, index) => {
                    // the image/title open the live demo when there is one, otherwise the code
                    const primaryLink = project.liveLink || project.link;
                    return (
                        <FadeUp duration={0.4} key={project.title}>
                            <div className="relative md:w-[720px] lg:w-[900px] flex flex-col md:flex-row md:gap-16 p-4 md:pb-5 md:pr-16 bg-white rounded-lg overflow-hidden min-h-83">

                                {/* Top Border */}
                                <div className="absolute top-0 left-0 w-full pointer-events-none">
                                    <HorizontalLineCurved1 />
                                </div>

                                {/* Bottom Border */}
                                <div className="absolute bottom-[-100px] left-0 w-full pointer-events-none">
                                    <HorizontalLineCurved2 />
                                </div>

                                {/* Left Border */}
                                <div className="absolute top-0 left-[-45px] h-full z-10 pointer-events-none">
                                    <VerticalLineCurved1 />
                                </div>

                                {/* Right Border */}
                                <div className="absolute top-0 right-[-295px] h-full z-10 pointer-events-none">
                                    <VerticalLineStraight />
                                </div>

                                {/* Project Content */}
                                <a
                                    href={primaryLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open ${project.title}`}
                                    className="block overflow-hidden rounded-lg shrink-0"
                                >
                                    {project.imgUrl ? (
                                        <>
                                            {/* phones: wide cover */}
                                            <Image
                                                src={project.imgUrlWide ?? project.imgUrl}
                                                alt={`${project.title} preview`}
                                                sizes="100vw"
                                                className="md:hidden w-full aspect-[3/2] object-cover rounded-lg"
                                            />
                                            {/* desktop: tall cover, sized to its own aspect so it isn't cropped */}
                                            <Image
                                                src={project.imgUrl}
                                                alt={`${project.title} preview`}
                                                sizes="258px"
                                                className="hidden md:block w-[258px] h-full min-h-[476px] object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                                            />
                                        </>
                                    ) : (
                                        <div
                                            style={{ backgroundColor: placeholderColors[index % placeholderColors.length] }}
                                            className="w-full md:w-[258px] h-[200px] md:h-full min-h-[200px] flex flex-col items-center justify-center gap-2 p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
                                        >
                                            <p className="text-[34px] font-bold text-[#474747] text-center leading-tight">{project.title}</p>
                                            <p className="text-lg text-[#474747] gaegu-font">{project.category}</p>
                                        </div>
                                    )}
                                </a>
                                <div className="flex flex-col gap-6 pt-8 md:w-[268px] lg:w-[430px] overflow-hidden">
                                    <h3 className="text-[28px] font-bold text-[#474747]">
                                        <a href={primaryLink} target="_blank" rel="noopener noreferrer">
                                            {project.title}
                                        </a>
                                    </h3>
                                    <p className="text-xl text-[#8C8FA6] hidden md:block gaegu-font">{project.description}</p>
                                    <p className="text-lg text-[#474747] gaegu-font">{project.technologies}</p>
                                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                                Code &#8599;
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                                Live demo &#8599;
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    );
                })}
                {githubProfile && (
                    <CustomLink link={githubProfile} icon="&#8594;" label="More on GitHub" newTab={true} />
                )}
            </div>
        </div>
    );
};
