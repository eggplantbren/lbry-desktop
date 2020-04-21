import * as SETTINGS from 'constants/settings';
import { connect } from 'react-redux';
import { makeSelectFileInfoForUri, makeSelectTitleForUri } from 'lbry-redux';
import {
  makeSelectIsPlayerFloating,
  selectFloatingUri,
  makeSelectFileRenderModeForUri,
  makeSelectStreamingUrlForUriWebProxy,
} from 'redux/selectors/content';
import { makeSelectClientSetting } from 'redux/selectors/settings';
import { doSetPlayingUri } from 'redux/actions/content';
import { withRouter } from 'react-router';
import FileRenderFloating from './view';

const select = (state, props) => {
  const uri = selectFloatingUri(state);
  return {
    uri,
    title: makeSelectTitleForUri(uri)(state),
    fileInfo: makeSelectFileInfoForUri(uri)(state),
    isFloating: makeSelectIsPlayerFloating(props.uri)(state),
    streamingUrl: makeSelectStreamingUrlForUriWebProxy(uri)(state),
    floatingPlayerEnabled: makeSelectClientSetting(SETTINGS.FLOATING_PLAYER)(state),
    renderMode: makeSelectFileRenderModeForUri(uri)(state),
  };
};

const perform = dispatch => ({
  clearPlayingUri: () => dispatch(doSetPlayingUri(null)),
});

export default withRouter(connect(select, perform)(FileRenderFloating));
