// components/About.jsx
import React from "react";
import { Bounce, Fade, Hinge } from "react-awesome-reveal";

export default function About() {
  return (
    <Fade>
      <div className="box-border w-full p-5 mt-10 bg-darkCard border border-transparent md:hover:border-primary active:border-primary rounded-3xl lg:mr-5 sm:mr-0 transition-all duration-500 ease-in-out">

        <h2 className="text-3xl text-center font-bold text-primary mb-8">About</h2>
        <p className="text-lg text-center text-tertiary mb-6">
          The students of National Institute of Technology Durgapur shall solemnly resolve to constitute the Students&apos; Gymkhana into an organized body and to adhere to all the laid-down points as stated in the Constitution.
        </p>
        <p className="text-lg text-center text-tertiary mb-6">
          <u>Justice:</u> To uphold liberty of thought and freedom of expression, equality of status and of opportunity, fostering and developing all co-curricular activities, creation of a sound and healthy Student-Teacher and Student-Staff relationship, assuring the dignity of all individuals and the unity of the student community as a whole in such a manner as to boost the fair name of the Institution.
        </p>
      </div>
    </Fade>
  );
}
