import { FunctionComponent } from "react";
import Link from "next/link";

const Nav: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg`}
        style={{ backgroundColor: "#e3e3e3" }}
      >
        <div className="container-fluid">
          <Link href="/">
            <div className="navbar-brand" style={{ cursor: "pointer" }}>
              Pokédex
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link href="/favorites">
                <div className="navbar-britemand" style={{ cursor: "pointer" }}>
                  <div className="navbar-link">Favoris</div>
                </div>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
