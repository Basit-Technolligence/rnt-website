import React from "react";
import "./style.css";
import Header from "../../Containers/Header";

const FAQ = () => {
  let questions = ["1", "2"];
  let answer = ["answer1", "answer2"];
  let i = -1;
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {questions.map((question) => {
              i++;
              return (
                <>
                  <h6
                    data-toggle="collapse"
                    href={"#collapseExample" + question}
                    aria-expanded="false"
                  >
                    {question}
                  </h6>
                  <div class="collapse" id={"collapseExample" + question}>
                    <div class="card card-body">{answer[i]}</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
