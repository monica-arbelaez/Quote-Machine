import React, { Component } from "react";
import ButtomQuota from "./ButtomQuota";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/QuotaMachine.css";
import Quotes from "./Quotes";
import Author from "./AuthorQuota";
import ButtomTwitter from "./ButtomTwitter";

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citas: [],
      quotes: "",
      authorQuota: "",
      QuoteIndice: 0,
    };
  }
  componentDidMount = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          citas: data,
          quotes: data[0].text,
          authorQuota: data[0].author,
        });
      });
  };
  prueba = () => {
    this.setState({
      QuoteIndice: this.state.QuoteIndice + 1,
      quotes: this.state.citas[this.state.QuoteIndice].text,
      authorQuota: this.state.citas[this.state.QuoteIndice].author,
    });
  };
  render() {
    return (
      <div id="div-img">
        <div
          id="quote-box"
          className="container-fluid d-flex justify-content-center align-item-center p-3"
        >
          <div className="row" id="minh-100" id="card1">
            <div className="col-sm-8 align-items-center p-2">
              <div className="card bg-white text-info text-center p-4">
                <div id='contenQuo'>
                <Quotes frase={this.state.quotes} />
                <Author authorQuota={this.state.authorQuota} />
                </div>
                <div className="col d-flex bd-highlight mb-0 p-3 justify-content-center ">
                  <ButtomQuota text={this.prueba} />
                  <div id="buttomT">
                    <ButtomTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteMachine;
