import { NavLink } from "react-router-dom";
import header from "../Assets/bady-mass-index.png";
import { ImGithub } from "react-icons/im";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={header}
          alt="Header"
          style={{
            width: 170,
            height: 200,
          }}
        />
      </div>
      <div
        style={{
          height: 350,
        }}
      >
        <section id="menu">
          <nav>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/"}
            >
              Calculate
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"aboutbmi"}
            >
              What is BMI
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"records"}
            >
              Your Records
            </NavLink>
          </nav>
        </section>
      </div>
      <div>
        <a href="https://github.com/slckbsk" target="_blank" rel="noreferrer">
          <div
            style={{
              display: "flex",
              background: "#F5F5F5",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0.5em",
              border: "1px solid Black",
            }}
          >
            <div
              style={{
                padding: 6,
                color: "black",
              }}
            >
              <ImGithub />
            </div>
            <div
              style={{
                padding: 6,
                color: "black",
              }}
            >
              SELÇUK BAŞAK
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
