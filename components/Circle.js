const React = require('react');

class Circle extends React.Component {

	shouldComponentUpdate(nextProps){
		this.colorCheck(nextProps);
	}

	colorCheck(nextProps){
		return (this.props.color === nextProps.color);
	}

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

module.exports = Circle;
