import {Component} from 'react';

class MeasureTime extends Component {
    state = {seconds: 0};

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(state => ({seconds: state.seconds + 1}));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return this.props.children({seconds: this.state.seconds});
    }
}

export default MeasureTime;
