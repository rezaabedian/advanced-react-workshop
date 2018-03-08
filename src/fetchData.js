import React, {Component} from 'react';

const fetchData = url => Component => {
    return class ModifiedComponent extends React.Component {
        state = {loading: false, data: null};

        componentDidMount() {
            this.setState({loading: true});

            fetch(url)
                .then(resp => resp.json())
                .then(data => {
                    this.setState({data, loading: false});
                });
        }

        render() {
            return (
                <Component
                    {...this.props}
                    loading={this.state.loading}
                    data={this.state.data}
                />
            );
        }
    };
};

export default fetchData;
