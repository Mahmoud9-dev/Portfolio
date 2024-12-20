const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3  border-gray-300 flex justify-between items-center flex-wrap gap-5 ">
      <div className="text-gray-400 flex gap-3 text-sm">
        <a href="/terms" className="hover:text-white transition-colors duration-300">
          Terms & Conditions
        </a>
        <span>|</span>
        <a href="/privacy" className="hover:text-white transition-colors duration-300">
          Privacy Policy
        </a>
      </div>

      <div className="flex gap-4">
        <a
          href="https://github.com/Mahmoud9-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon group">
          <img
            src="/assets/github.svg"
            alt="GitHub"
            className="w-8 h-8 transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/mahmoud-nasredeen/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon group">
          <img
            src="/assets/linkedin.svg"
            alt="LinkedIn"
            className="w-8 h-8 transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
        </a>

        <a href="mahmoudnasredeen099@gmail.com" className="social-icon group">
          <img
            src="/assets/gmail.png"
            alt="Gmail"
            className="w-8 h-8 transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
        </a>
      </div>

      {/* Footer Note */}
      <p className="text-gray-400 text-sm">© 2024 All rights reserved.</p>
    </footer>
  );
};

export default Footer;
