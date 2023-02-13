import React from "react";

export default function Footer() {
  return (
    <>
      <div className="white-force" />
      <div>
        <footer className="row center">
          Un progetto fatto con{" "}
          <span className="emoji" role="img" aria-label="a heart">
            ❤️
          </span>{" "}
          dal team {<a href="https://valazco.it">valazco.it</a>}
        </footer>
      </div>
    </>
  );
}
