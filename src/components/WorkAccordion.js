import React from 'react';
import data from './data/work.json';

class WorkAccordion extends React.Component {
  render() {
    return (
      <Accordion data={data} />
    );
  }
};

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    let accordion = [];

    this.props.data.forEach((i) => {
      accordion.push({
        title: i.title,
        content: i.content,
        open: false
      });
    });

    this.state = {
      accordionItems: accordion
    };
  }

  click(i) {
    const newAccordion = this.state.accordionItems.slice();
    const index = newAccordion.indexOf(i)

    newAccordion[index].open = !newAccordion[index].open;
    this.setState({ accordionItems: newAccordion });
  }

  render() {
    const sections = this.state.accordionItems.map((i) => (
      <div key={this.state.accordionItems.indexOf(i)}>
        <div
          className="title"
          onClick={this.click.bind(this, i)}
        >
          <div className="arrow-wrapper">
            <i className={i.open
              ? "fa fa-angle-down fa-rotate-180"
              : "fa fa-angle-down"}
            ></i>
          </div>
          <span className="title-text">
            {i.title}
          </span>
        </div>
        <div className={i.open
          ? "contents content-open"
          : "contents"}
        >
          <div className={i.open
            ? "content-text content-text-open"
            : "content-text"}
          > {i.content}
          </div>
        </div>
      </div>
    ));

    return (
      <div className="accordion">
        {sections}
      </div>
    );
  }
}

export default WorkAccordion;