import React from 'react';
class MouseTracker extends React.Component {
    state = {x: 0, y: 0};

    handleMouseMove = event => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    };

    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
                {this.props.children({x: this.state.x, y: this.state.y})}
            </div>
        );
    }
}
export default MouseTracker;