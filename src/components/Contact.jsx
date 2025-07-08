import Pagetitle from "./PageTitle";
import "@/styles/Contact.css"; 


export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center h-screen"
    >
      <Pagetitle title="Contact" />
      <div className="z-6 contact-container p-6 shadow flex flex-col items-center justify-center text-center w-3/4 z-2">
        <div className="flex items-center gap-2 contact-text">
          <picture className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fed7aa"
              viewBox="0 0 24 24"
              className="contact-icon"
            >
              <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
            </svg>
          </picture>
          <a
            href="mailto:hola@robertnicuta.com"
            className="text-reset no-underline cursor-pointer"
          >
            contact@robertnicuta.com
          </a>
        </div>
        <div className="flex items-center contact-text-small mt-3">
          <picture className="flex items-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fed7aa"
              viewBox="0 0 24 24"
              className="contact-icon"
            >
              <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
            </svg>
          </picture>
          <p className="mb-0">Formentera, Islas Baleares</p>
        </div>
        <SocialIcons />
      </div>
    </section>
  );
}

const SocialIcons = () => {
  return (
    <ul className="flex items-center mt-5 justify-center p-3 gap-4 flex-grow-1 list-none">
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-icon"
            src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20448%20512'%3e%3cstyle%3esvg{fill:%23fed7aa}%3c/style%3e%3cpath%20d='M224.1%20141c-63.6%200-114.9%2051.3-114.9%20114.9s51.3%20114.9%20114.9%20114.9S339%20319.5%20339%20255.9%20287.7%20141%20224.1%20141zm0%20189.6c-41.1%200-74.7-33.5-74.7-74.7s33.5-74.7%2074.7-74.7%2074.7%2033.5%2074.7%2074.7-33.6%2074.7-74.7%2074.7zm146.4-194.3c0%2014.9-12%2026.8-26.8%2026.8-14.9%200-26.8-12-26.8-26.8s12-26.8%2026.8-26.8%2026.8%2012%2026.8%2026.8zm76.1%2027.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9%200-35.8%201.7-67.6%209.9-93.9%2036.1s-34.4%2058-36.2%2093.9c-2.1%2037-2.1%20147.9%200%20184.9%201.7%2035.9%209.9%2067.7%2036.2%2093.9s58%2034.4%2093.9%2036.2c37%202.1%20147.9%202.1%20184.9%200%2035.9-1.7%2067.7-9.9%2093.9-36.2%2026.2-26.2%2034.4-58%2036.2-93.9%202.1-37%202.1-147.8%200-184.8zM398.8%20388c-7.8%2019.6-22.9%2034.7-42.6%2042.6-29.5%2011.7-99.5%209-132.1%209s-102.7%202.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7%209-132.1c7.8-19.6%2022.9-34.7%2042.6-42.6%2029.5-11.7%2099.5-9%20132.1-9s102.7-2.6%20132.1%209c19.6%207.8%2034.7%2022.9%2042.6%2042.6%2011.7%2029.5%209%2099.5%209%20132.1s2.7%20102.7-9%20132.1z'/%3e%3c/svg%3e"
            alt="Instagram icon"
          />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/robertnic9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src="/github.svg" alt="GitHub icon" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/robert-nicuta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="#FED7AA"
            className="social-icon"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
          </svg>
        </a>
      </li>
    </ul>
  );
};