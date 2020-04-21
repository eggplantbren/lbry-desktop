import { connect } from 'react-redux';
import { doSetFloatingUri } from 'redux/actions/content';
import MarkdownPreview from './view';

export default connect(null, {
  doSetFloatingUri,
})(MarkdownPreview);
