import {Component} from 'react';

class FetchData extends Component {
    state = {loading: false, data: null};

    componentDidMount() {
        this.setState({loading: true});
        fetch(this.props.url)
            .then(resp => resp.json())
            .then(data => {
                this.setState({data, loading: false});
            });
    }


    render() {
        return this.props.children({
            loading: this.state.loading,
            data: this.state.data
        });
    }
}

export default FetchData;