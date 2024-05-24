import React from "react";
import "./feature.css";

const Feature = ({title, description}) => {
  return (
    <div className="gpt3__whatgpt3-feature">
      <div className="gpt3__whatgpt3__sub-heading">
        <h3>{title}</h3>
      </div>
      <div className="gpt3__whatgpt3__sub-heading-text">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
/*
<div className="gpt3__whatgpt3-question">
            <h3>What is GPT-3</h3>
          </div>
          <div className="gpt3__whatgpt3-answer">
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>

*/

/*
<div>
<h3>Chatbots</h3>
<p>
  We so opinion friends me message as delight. Whole front do of
  plate heard oh ought.{" "}
</p>
</div>
<div>
<h3>Knowledgebase</h3>
<p>
  At jointure ladyship an insisted so humanity he. Friendly
  bachelor entrance to on by. As put impossible own apartments b
</p>
</div>
<div>
<h3>Education</h3>
<p>
  At jointure ladyship an insisted so humanity he. Friendly
  bachelor entrance to on by. As put impossible own apartments b
</p>
</div>
*/
