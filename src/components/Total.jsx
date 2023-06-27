import React from "react";
class Total extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        total: 0
      };
    }
    render() {
      const { counters } = this.props;
      const total = counters.reduce((acc, counter) => acc + counter.count, 0);
      this.setState({ total });

  
      return (
        <div>
          <h2>Total: {this.state.total}</h2>
        </div>
      );
    }
  }

export default Total
  