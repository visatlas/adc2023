const Footer = () => {
  return (
    <footer className="max-w-[70em] mx-auto pt-8 pb-32 w-full">
      <div className="mx-5 flex flex-col-reverse md:flex-row lg:px-0 items-start justify-between text-gray-600">
        <small className=""><span className="font-defaultSans">&copy;</span> 2023 Australasian Database Conference. <br className="block sm:hidden" />
          All Rights Reserved.
        </small>
        {/* <small className="mb-3 md:mb-0"><a className="hover:underline"
            href="https://www.acm.org/about-acm/policy-against-harassment" target="_blank"
            rel="noreferrer">Code of Conduct</a></small> */}
      </div>
    </footer>
  );
};

export default Footer;
