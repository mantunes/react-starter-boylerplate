import { connect } from 'react-redux';
import NameListApp from '../components/NameListApp.js'
import {
  addName,
  removeName
} from '../redux/modules/nameListApp';

function mapStateToProps(state) {
  return {
    names: state.names // gives our component access to state through props.NameListApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addName: (name) => dispatch(addName(name)),
    removeName: (i) => dispatch(removeName(i))
  }; // here we're mapping actions to props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameListApp);