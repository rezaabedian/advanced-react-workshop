import React from 'react';
import Select from "./Select";
import Option from "./Option";

class App extends React.Component {

    render() {
        return (
            <div>
                <Select defaultValue="blue">
                    <Option value="blue"> Blue </Option>
                    <Option value="red"> Red </Option>
                    <Option value="white"> White </Option>
                </Select>
            </div>
        );
    }
}

export default App;