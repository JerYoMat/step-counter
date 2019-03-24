import React from 'react';
import { connect } from 'react-redux';
import { increment, reset } from './index';

class StepCounter extends React.Component{
  increment = () => {
    this.props.increment();
  }

  reset = () => {
    this.props.reset();
  }
  render() {
    return (
      <div className='card'>
        <div className='step-counter'>
          <button className='btn btn-primary' onClick={this.increment}>Add Step</button>
          <button className='btn btn-danger' onClick={this.reset}>Reset</button>
          <p>Your total number of steps is: {this.props.count} </p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps)),
  reset: () => dispatch(reset(ownProps))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepCounter);