import React from "react";
import Section from "../ui/Section";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or want to discuss opportunities? Feel free to reach out!"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Contact Information
        </h3>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Email
              </h4>
              <a
                href="mailto:kalyani3449@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                kalyani3449@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
              <Phone size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Phone
              </h4>
              <a
                href="tel:+919063008053"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                +91 9063008053
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Location
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Ecil,Hyderabad,India
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Let's connect
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm currently seeking internship opportunities where I can apply my
            skills, learn from real-world challenges, and contribute to exciting
            projects. If you're looking for a motivated and curious developer to
            join your team, I'd love to connect and learn more about the
            opportunity.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
