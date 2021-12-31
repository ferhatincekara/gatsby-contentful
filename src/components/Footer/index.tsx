import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-body text-white">
      <div className="container py-20 px-5 mx-auto flex flex-wrap flex-col md:flex-row justify-between">
        <div className="w-full md:w-4/12">
          <h2 className="text-h4 md:text-h1">
            Company is a UI/UX design and web development agency in Istanbul.
          </h2>
          <div className="mt-10 md:mt-20">
            <h3 className="text-h5 md:text-h3">Want to work with us?</h3>
            <span className="block mt-2 text-h5 md:text-h3">
              ↳{' '}
              <a
                href="mailto:hello@company.agency"
                className="underline underline-offset-8 decoration-border"
              >
                hello@company.agency
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row justify-end w-full md:w-8/12 mt-10 md:mt-0">
          <div className="w-full md:w-4/12">
            <h3>Offices</h3>
            <p className="mt-6">
              ↳ İzmir <br /> Alsancak, 12, 35220, <br />
              Konak/İzmir, Turkey
            </p>
          </div>
          <div className="w-full md:w-3/12 mt-5 md:mt-0">
            <h3>Connect</h3>
            <div className="flex flex-col space-y-1 mt-6">
              <a href="https://instagram.com">Instagram</a>
              <a href="https://twitter.com">Twitter</a>
              <a href="https://linkedin.com">LinkedIn</a>
              <a href="https://github.com">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
