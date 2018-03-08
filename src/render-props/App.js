import React, {Component} from "react";
import MeasureTime from "./MeasureTime";
import FetchData from "./FetchData";
import MouseTracker from "./MouseTracker";

class App extends Component {
    render() {
        return (
            <div
                style={{
                    height: '100vh',
                    cursor: 'crosshair'
                }}
            >
                <MeasureTime>
                    {({seconds}) => (
                        <MouseTracker>
                            {({x, y}) => (
                                <FetchData url="https://swapi.co/api/people/1">
                                    {({loading, data}) => {
                                        if (loading) {
                                            return <div>Loading...</div>;
                                        }
                                        return (
                                            <div>
                                                <div> Elapsed seconds: {seconds} </div>
                                                <b>
                                                    Mouse position is {x} and {y}
                                                </b>

                                                {data && (
                                                    <div>
                                                        Fetched data:
                                                        <div>
                                                            <pre>{JSON.stringify(data, null, 2)}</pre>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    }}
                                </FetchData>
                            )}
                        </MouseTracker>
                    )}
                </MeasureTime>
            </div>
        );
    }
}

export default App;
