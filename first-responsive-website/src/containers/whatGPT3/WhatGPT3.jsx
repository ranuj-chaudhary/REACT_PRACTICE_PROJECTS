import React from "react";
import "./whatgpt3.css";
import { Feature } from "../../components";
const WhatGPT3 = () => {
  return (
    <section className="gpt3__whatgpt3 section__padding" id="what-is-gpt">
      <div className="gpt3__whatgpt3-container " id="gpt3__whatgpt3-container">
        <div className="gpt3__whatgpt3-about">
          <div className="gpt3__whatgpt3-feature">
            <div className="gpt3__whatgpt3__sub-heading">
              <h2>What is GPT-3</h2>
            </div>
            <div className="gpt3__whatgpt3__sub-heading-text">
              <p>
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought. His defective nor convinced residence own.
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </p>
            </div>
          </div>
        </div>

        <div className="gpt3__whatgpt3__uses">
          <div className="gpt3__whatgpt3__heading">
            <h3>The possibilities are beyond your imagination</h3>
            <span>Explore The Library</span>
          </div>
          <div className="gpt3__whatgpt3__application">
            <Feature
              title={"Knowledgebase"}
              description={`At jointure ladyship an insisted so humanity he. Friendly
            bachelor entrance to on by. As put impossible own apartments.`}
            />
            <Feature
              title={"Chatbots"}
              description={`We so opinion friends me message as delight. Whole front do of
            plate heard oh ought.`}
            />
            <Feature
              title={"Education"}
              description={`At jointure ladyship an insisted so humanity he. Friendly
            bachelor entrance to on by. As put impossible own apartments b`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatGPT3;
