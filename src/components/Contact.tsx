import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gray-950 py-20 px-8 lg:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 text-center mb-16">
        Get In Touch
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out through any of the following channels or
              use the contact form.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <a
              href="mailto:marcin.kolber1@gmail.com"
              className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-yellow-500 group-hover:text-gray-900 text-xl"
                />
              </div>
              <div>
                <div className="text-gray-400 text-sm">Personal Email</div>
                <div className="text-white font-medium">
                  marcin.kolber1@gmail.com
                </div>
              </div>
            </a>

            <a
              href="mailto:marcin@kolber.tech"
              className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-yellow-500 group-hover:text-gray-900 text-xl"
                />
              </div>
              <div>
                <div className="text-gray-400 text-sm">Professional Email</div>
                <div className="text-white font-medium">marcin@kolber.tech</div>
              </div>
            </a>

            <a
              href="tel:+48695854423"
              className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-yellow-500 group-hover:text-gray-900 text-xl"
                />
              </div>
              <div>
                <div className="text-gray-400 text-sm">Phone</div>
                <div className="text-white font-medium">+48 695 854 423</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-yellow-500 text-xl"
                />
              </div>
              <div>
                <div className="text-gray-400 text-sm">Location</div>
                <div className="text-white font-medium">Cracow, Poland</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">
              Connect With Me
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/marcinkolber/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-blue-500 group-hover:text-white text-2xl"
                />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors group"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-white text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-6">
            Send Me a Message
          </h3>
          <form
            action="https://formspree.io/f/meovgbay"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-gray-300 font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                placeholder="Message subject"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
