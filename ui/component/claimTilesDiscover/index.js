import { connect } from 'react-redux';
import {
  doClaimSearch,
  selectClaimSearchByQuery,
  selectFetchingClaimSearch,
  selectBlockedChannels,
  SETTINGS,
} from 'lbry-redux';
import { doToggleTagFollowDesktop } from 'redux/actions/tags';
import { makeSelectClientSetting } from 'redux/selectors/settings';
import ClaimListDiscover from './view';

const select = state => ({
  claimSearchByQuery: selectClaimSearchByQuery(state),
  loading: selectFetchingClaimSearch(state),
  showNsfw: makeSelectClientSetting(SETTINGS.SHOW_MATURE)(state),
  showReposts: makeSelectClientSetting(SETTINGS.SHOW_REPOSTS)(state),
  hiddenUris: selectBlockedChannels(state),
});

const perform = {
  doClaimSearch,
  doToggleTagFollowDesktop,
};

export default connect(
  select,
  perform
)(ClaimListDiscover);
