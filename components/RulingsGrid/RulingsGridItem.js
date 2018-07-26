import React, { Component } from "react";
import propTypes from "prop-types";

import Button from "../Button/Button";
import { ThumpSmallIcon } from "../../icons";

import "./RulingsGridItem.scss";

export default class RulingsGridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodVotes: props.goodVotes,
      badVotes: props.badVotes,
    };

    this.addGoodVote = this.addGoodVote.bind(this);
    this.addBadVote = this.addBadVote.bind(this);
  }

  getPercetage(number) {
    const { goodVotes, badVotes } = this.state;
    const total = goodVotes + badVotes;
    return Math.round((number * 100) / total);
  }

  addGoodVote() {
    this.setState(({ goodVotes }) => ({ goodVotes: goodVotes + 1 }));
  }

  addBadVote() {
    this.setState(({ badVotes }) => ({ badVotes: badVotes + 1 }));
  }

  render() {
    const { name, imageUrl, description } = this.props;
    const { goodVotes, badVotes } = this.state;
    return (
      <div className="RulingsGridItem">
        <div className="RulingsGridItem__image-container">
          <img className="RulingsGridItem__image" alt={name} src={imageUrl} />
          <div className="RulingsGridItem__image-gradient" />
        </div>
        <div className="RulingsGridItem__content">
          <div className="RulingsGridItem__name">{name}</div>
          <div className="RulingsGridItem__description">{description}</div>
          <div>
            <Button className="RulingsGridItem__cta" onClick={this.addGoodVote}>
              Good
            </Button>
            <Button className="RulingsGridItem__cta" onClick={this.addBadVote}>
              Bad
            </Button>
          </div>
          <Button className="RulingsGridItem__cta">View Full Report</Button>
        </div>
        <div className="RulingsGridItem__votes">
          <div
            className="RulingsGridItem__votes-item RulingsGridItem__votes-item--left"
            style={{ width: `${this.getPercetage(goodVotes)}%` }}
          >
            <ThumpSmallIcon />
            <span className="RulingsGridItem__votes-item-text">
              {this.getPercetage(goodVotes)}
            </span>
          </div>
          <div
            className="RulingsGridItem__votes-item RulingsGridItem__votes-item--right"
            style={{ width: `${this.getPercetage(badVotes)}%` }}
          >
            <span className="RulingsGridItem__votes-item-text">
              {this.getPercetage(badVotes)}
            </span>
            <ThumpSmallIcon />
          </div>
        </div>
      </div>
    );
  }
}

RulingsGridItem.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
  //   url: propTypes.string.isRequired,
  //   timestamp: propTypes.number.isRequired,
  //   category: propTypes.string.isRequired,
  goodVotes: propTypes.number.isRequired,
  badVotes: propTypes.number.isRequired,
};
