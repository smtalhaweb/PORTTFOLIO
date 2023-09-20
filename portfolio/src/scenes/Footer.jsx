const Footer = () => {
  return (
    <footer className="bg-red py-5">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <p className="my-5 font-bold text-lg">ABOUT WEBSITE :</p>
          <p className="my-5">
            Website Application Type: <b>SPA(Single Page Application)</b>
          </p>
          <p className="my-5">
            Website Name: <b> MY PORTFOLIO</b>
          </p>
          <p className="my-5 font-bold">Web Application Technologies:</p>
          <p className="my-5">HTML CSS JAVASCRIPT REACT TAILWIND-CSS</p>
          <p className="my-5">FRAMER MOTION & SMOOTH SCROLLING</p>
        </div>
        <div className="mt-16 basis-1/2 md:mt-0">
          <h4 className="my-5 font-bold text-lg">
            ABOUT WEB-APPLICATION DEVELOPER :
          </h4>
          <p className="my-5">Developer Type : Front End Developer</p>
          <p className="my-5">Developer Name : SYED MEHBOOB TALHA</p>
          <p className="my-5">Qualification :</p>
          <p className="my-5">B.E (ELECTRONICS)<br/>M.S(C & A) </p>
          <p className="my-5">
            Contact :
          </p>
          <p>
            Email Address : s.mtalha1992@gmail.com
            <br /> Cell # : +923032188645
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
