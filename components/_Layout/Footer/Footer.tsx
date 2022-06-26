import * as React from "react";
import PropTypes from "prop-types";
import Container from "../Container";
import SVGElrond from "../SVGIcons/SVGElrond";

type FooterProps = {
  //
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-primary-500 backdrop-filter backdrop-blur bg-opacity-70 text-white">
      <Container>
        <ul className="py-12 text-center">
          <li>
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-bold">DaApezator </span> - A{" "}
              <a
                href="https://daapez.xyz/"
                target={"_blank"}
                rel="noreferrer"
                className="hover:text-yellow-400 duration-200 transition-colors ease-in-out"
              >
                DaApez
              </a>{" "}
              Community App
            </p>
          </li>
          <li className="flex items-center justify-center">
            <span className="mr-1">
              <SVGElrond />
            </span>{" "}
            Donation:
            <a
              href="https://explorer.elrond.com/accounts/erd1l9gr2fn7qy86q26xqj4wmner5evkz8q277nerckd8xy5502klzjs5mxcfr"
              target={"_blank"}
              rel="noreferrer"
              className="pl-1 hover:text-yellow-400 duration-200 transition-colors ease-in-out"
            >
              erd1l9gr2fn7qy86q26xqj4wmner5evkz8q277nerckd8xy5502klzjs5mxcfr
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  //
};

export default Footer;
