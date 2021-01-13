import React from "react";

class Circle extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(prevProps) {
    if (prevProps === this.props) {
      return false;
    }
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);

    return <div className={`circle ${color}`}></div>;
  }
}

export default Circle;
