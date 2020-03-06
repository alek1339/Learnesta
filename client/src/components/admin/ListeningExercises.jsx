import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchListeningExercises } from "../../actions/listiningExercisesActions";
import { render } from "react-dom";

class ListeningExercises extends Component {
    constructor() {
      super();
      this.state = {
        currentPage: 1
      };
    }

  // Dispatch action to fetch listening exercises
  componentDidMount() {
    this.props.fetchListeningExercises();
  }

  render() {
    return (
      <div  className='color-blk'>
        {this.props.listeningExercisess ? this.props.listeningExercisess.map(ex => (
          <div className='color-blk' key={ex.id}>
               <div>{ex.level}</div>
               <div>{ex.exercise}</div>
              <div>{ex.correctAnswer}</div>
          </div>
        )) : 'THERE IS NOT A EX'}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchListeningExercises: () => dispatch(fetchListeningExercises())
  };
}

const mapStateToProps = state => ({
  listeningExercisess: state.listeningExercisess
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListeningExercises);
