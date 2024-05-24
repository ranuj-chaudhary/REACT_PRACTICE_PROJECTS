import React from "react";
import "./whatgpt3.css";
import { Feature } from "../../components";
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 " id="gpt3__whatgpt3">
      <div className="gpt3__whatgpt3-container " id="gpt3__whatgpt3-container">
        <div className="gpt3__whatgpt3-about">
          <Feature
            title={"What is GPT-3"}
            description={`We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.`}
          />
        </div>

        <div className="gpt3__whatgpt3__uses">
          <div className="gpt3__whatgpt3__heading">
            <h2>The possibilities are beyond your imagination</h2>
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
    </div>
  );
};

export default WhatGPT3;
