import React, { Component } from "react";
import Counter from "./components/Counter";
// import Total from "./components/Total";

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

class App extends Component {
  render() {
    return (
      <div>
        {data.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            handleIncrement={(count) => count}
            handleDecrement={(count) => count}
          />
        ))}

        {/* <Total
          counters={[
            this.setState()
          ]}
        /> */}
      </div>



      // <div>
      //   <Counter
      //     handleIncrement={(count) => console.log("Counter 1 Increment:", count)}
      //     handleDecrement={(count) => console.log("Counter 1 Decrement:", count)}
      //   />
      //    <Counter
      //     handleIncrement={(count) => console.log("Counter 2 Increment:", count)}
      //     handleDecrement={(count) => console.log("Counter 2 Decrement:", count)}
      //     />
      //   <Counter
      //     handleIncrement={(count) => console.log("Counter 3 Increment:", count)}
      //     handleDecrement={(count) => console.log("Counter 3 Decrement:", count)}
      //     />

      // <Total
      //   counters={[
      //     this.state.counter1,
      //     this.state.counter2,
      //     this.state.counter3,
      //   ]}
      // />
      // </div>

    );
  }
}

export default App;
