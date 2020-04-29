import React from "react"

class Pikachu extends React.Component {

	state = {
		size: 100
	}

	resizePikachu = () => {
		const pikachu = document.getElementById("pikachu")

		pikachu.height = this.state.size;
		pikachu.width = this.state.size;
	}

	makeBigger = () => {
		this.setState(prevState => ({size: prevState.size + 10}))
	}

	makeSmaller = () => {
		this.setState(prevState => ({size: prevState.size - 10}))
	}

	componentDidUpdate() {
		this.resizePikachu()
	}

	render() {
		return (
			<div>
				<button onClick={this.makeBigger}>Bigger!</button>
				<button onClick={this.makeSmaller}>Smaller!</button>
			</div>
		)
	}

}

export default Pikachu
