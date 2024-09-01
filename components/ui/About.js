// components/About.jsx
import React from "react";
import { Bounce, Fade, Hinge } from "react-awesome-reveal";

export default function About() {
  return (
    <Fade>
      <div className=" p-5 mt-10 bg-gray-100 border border-gray-300 rounded-lg shadow-md lg:mr-5 sm:mr-0">
        <h2 className="text-3xl font-bold text-primary mb-4">About</h2>
        <p className="text-lg text-gray-800 mb-6">
          Students' Gymkhana (SG) aims to provide students a role in the administrative and academic governance of the institute and supports them to develop leadership and administrative skills. We operate in a dynamic manner under the guidance of our faculty advisers.
        </p>
        <a
          href="https://nitdgp.ac.in/uploads/old/academics/notices/2019/06/19/Gymkhana_Constitution.pdf" // Adjust this URL as needed
          className="inline-block px-6 py-3 font-semibold text-white bg-primary rounded-md hover:bg-primary-dark transition-colors"
        >
          Constitution
        </a>
      </div>
    </Fade>
  );
}
