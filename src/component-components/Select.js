import React from 'react';

class Select extends React.Component {

    state = {
        selectedValue: this.props.defaultValue,
        opened: false
    };

    selectOption = option => {
        console.log(option);
        this.setState({selectedValue: option.props.value, opened: false});
    };

    open = () => {
        this.setState({opened: true});
    };

    render() {
        const {opened, selectedValue} = this.state;
        const {children: options} = this.props;
        const cloned = React.Children.map(options, option =>
            React.cloneElement(option, {
                onSelect: () => this.selectOption(option),
                active: option.props.value === selectedValue
            })
        );
        let selectedChild;

        React.Children.forEach(options, option => {
            if (option.props.value === selectedValue) {
                selectedChild = option.props;
            }
        });

        return opened ? (
            <div>{cloned}</div>
        ) : (
            <div
                style={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    border: '1px solid black',
                    width: 100
                }}
                onClick={this.open}
            >
                {selectedChild ? selectedChild.children : 'Pick one'}
            </div>
        );
    }
}

export default Select;