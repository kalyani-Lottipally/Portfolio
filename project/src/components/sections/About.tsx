import React from "react";
import Section from "../ui/Section";
import { User, BookOpen, Award, Coffee } from "lucide-react";

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know more about my background, experience, and what drives me as a developer."
      className="bg-white dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/image.jpg"
              alt="Developer Portrait"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-blue-500 dark:bg-blue-600 rounded-lg -z-10"></div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Who am I?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a final-year B.Tech student specializing in Computer Science,
              with a strong passion for full-stack development. I enjoy building
              web applications that are both functional and visually appealing.
              I primarily work with JavaScript/TypeScript, React, Node.js, and
              other modern web technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Over the past few years, I've worked on multiple academic and
              personal projects that reflect my dedication to solving real-world
              problems through technology. My experience has helped me develop a
              strong foundation in both frontend and backend development, and
              I'm eager to contribute to impactful tech solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Alongside my technical journey, I have been an active member of
              the National Cadet Corps (NCC), where I earned{" "}
              <strong>A grades in both B and C certificates</strong>. I proudly
              served as a <strong>Cadet Under Officer (CUO)</strong>, the
              highest rank at my level, leading various contingents with
              discipline and confidence. I was selected for and participated in
              multiple prestigious camps, consistently proving my leadership
              skills, commitment, and ability to perform under pressure. These
              experiences have deeply enhanced my teamwork, organizational, and
              leadership capabilities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg text-blue-600 dark:text-blue-400">
                <User size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Personal Touch
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  I add a personal touch to every project
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 bg-teal-100 dark:bg-teal-900/50 p-3 rounded-lg text-teal-600 dark:text-teal-400">
                <BookOpen size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Always Learning
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Continuously expanding my knowledge
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg text-purple-600 dark:text-purple-400">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Quality First
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  I prioritize quality and attention to detail
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-900/50 p-3 rounded-lg text-amber-600 dark:text-amber-400">
                <Coffee size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Team Player
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Collaborative approach to problem-solving
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
