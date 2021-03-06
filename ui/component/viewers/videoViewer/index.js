import { connect } from 'react-redux';
import { makeSelectClaimForUri, makeSelectFileInfoForUri, makeSelectThumbnailForUri } from 'lbry-redux';
import { doChangeVolume, doChangeMute } from 'redux/actions/app';
import { selectVolume, selectMute } from 'redux/selectors/app';
import { savePosition, doSetPlayingUri } from 'redux/actions/content';
import VideoViewer from './view';
import { withRouter } from 'react-router';

const select = (state, props) => {
  const { search } = props.location;
  const urlParams = new URLSearchParams(search);
  const autoplay = urlParams.get('autoplay');
  const position = urlParams.get('t');

  return {
    autoplayParam: autoplay,
    volume: selectVolume(state),
    muted: selectMute(state),
    position: position,
    hasFileInfo: Boolean(makeSelectFileInfoForUri(props.uri)(state)),
    thumbnail: makeSelectThumbnailForUri(props.uri)(state),
    claim: makeSelectClaimForUri(props.uri)(state),
  };
};

const perform = dispatch => ({
  changeVolume: volume => dispatch(doChangeVolume(volume)),
  savePosition: (uri, position) => dispatch(savePosition(uri, position)),
  changeMute: muted => dispatch(doChangeMute(muted)),
  setPlayingUri: uri => dispatch(doSetPlayingUri(uri)),
});

export default withRouter(connect(select, perform)(VideoViewer));
