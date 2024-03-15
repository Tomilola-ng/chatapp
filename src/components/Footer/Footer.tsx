export default function Footer() {
  return (
    <footer className="p-8 md:grid md:grid-cols-3 flex items-center flex-col text-xs max-container">
      <div className="text-center mb-4 md:text-left">
        <h4 className="text-primary font-light text-lg">
          <b className="font-semibold">chat</b>app
        </h4>
        <p className="text-balance">
          The last seen chat <br /> app you'll ever need
        </p>
      </div>
      <div className="flex md:flex-col justify-between w-full gap-y-4 my-3 md:my-0">
        <figure className="*:block *:mb-2">
          <b className="text-base">Help</b>
          <span>Getting started FAQ</span>
          <span>Video Tours</span>
          <span>Dailpad Commands</span>
          <span>Call Transcription Service</span>
        </figure>
        <figure className="*:block *:mb-2">
          <b>Features</b>
          <span>Screen sharing </span>
          <span> Toll-Free Call </span>
          <span>Mobile Apps</span>
          <span>International Texts</span>
        </figure>
      </div>

      <div className="flex md:flex-col justify-between w-full gap-y-4 my-3 md:my-0">
        <figure className="*:block *:mb-2">
          <b>Company</b>
          <span>About Us</span>
          <span> Careers</span>
          <span> Email</span>
        </figure>

        <figure className="*:block *:mb-2">
          <b>Contact Us</b>
          <span>service@chatapp.com</span>
          <span> 234-8161-444-558 </span>
          <span> 1960 East Grand Ave. #29</span>
          <span>El Segundo, CA 90245, US </span>
        </figure>
      </div>
    </footer>
  );
}
