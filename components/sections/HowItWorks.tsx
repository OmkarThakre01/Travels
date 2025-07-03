"use client";

import { ArrowRight } from "lucide-react";
// import { FaBookReader, FaAccessibleIcon } from "react-icons/fa";
import Image from "next/image";

import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import MobileUi from '@/assets/Casestudyimages/MobileUi.png';
import Webui from '@/assets/Casestudyimages/Webui.png';
const projects = [
  {
    title: "Website UI",
    description:
      "A modern and responsive website UI design focused on clean layout, accessibility, and optimal user experience across devices.",
    button: "View my work",
    icon: <FaLaptopCode className="text-white text-2xl" />,
    image: Webui, // Replace with your mockup image
    bgColor: "bg-red-500",
    imageBg: "bg-red-100",
  },
  {
    title: "Mobile UI",
    description:
      "A user-friendly mobile app UI crafted for seamless navigation, intuitive interactions, and engaging visual design.",
    button: "View my work",
    icon: <FaMobileAlt className="text-white text-2xl" />,
    image: MobileUi, // Replace with your mockup image
    bgColor: "bg-blue-600",
    imageBg: "bg-yellow-100",
  },
];
;

export function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
            Find out about my works: read through my case studies, have a look
            at final designs and try out prototypes I’ve built.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-gray-200 overflow-hidden flex flex-col"
            >
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${project.bgColor}`}
                  >
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-600">{project.description}</p>
                <a
                  href="#"
                  className="mt-2 inline-flex items-center gap-1 font-medium text-blue-600 hover:underline"
                >
                  {project.button}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className={`${project.imageBg} p-4 flex justify-center`}>
                <Image
                  src={project.image}
                  alt={`${project.title} mockup`}
                  width={300}
                  height={200}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
