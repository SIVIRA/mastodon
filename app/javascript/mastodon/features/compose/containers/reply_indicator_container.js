import { connect } from 'react-redux';
import { cancelReplyCompose, changeHeartCountChange } from '../../../actions/compose';
import { makeGetStatus } from '../../../selectors';
import ReplyIndicator from '../components/reply_indicator';

const makeMapStateToProps = () => {
  const getStatus = makeGetStatus();

  const mapStateToProps = state => ({
    status: getStatus(state, { id: state.getIn(['compose', 'in_reply_to']) }),
    count: getStatus(state, { count: state.getIn(['compose', 'with_heart_count']) }),
  });

  return mapStateToProps;
};

const mapDispatchToProps = dispatch => ({

  onCancel () {
    dispatch(cancelReplyCompose());
  },

  onChangeHeartCount(value) {
    dispatch(changeHeartCountChange(value))
  },

});

export default connect(makeMapStateToProps, mapDispatchToProps)(ReplyIndicator);
