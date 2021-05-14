const Footer = () => {
  return (
    <footer className="absolute bottom-0 flex flex-none flex-col space-y-5 items-center justify-center w-full max-h-1/4 pb-4">
      <div className="flex flex-row justify-center space-x-5">
        <a
          className="flex items-center justify-center"
          href="mailto:bora.uyumazturk@gmail.com"
          target="_blank"
        >
          <img src="/mail.svg" className="h-6" />
        </a>
        <a
          className="flex items-center justify-center"
          href="https://github.com/bora-uyumazturk/flipsite"
          target="_blank"
        >
          <img src="/github.svg" className="h-6" />
        </a>
        <a
          className="flex items-center justify-center"
          href="https://twitter.com/notsleepingturk"
          target="_blank"
        >
          <img src="/twitter.svg" className="h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
