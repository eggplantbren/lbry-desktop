export const VIDEO = 'video';
export const AUDIO = 'audio';

export const FLOATING_MODES = [VIDEO, AUDIO]; // these types will show in floating player

export const PDF = 'pdf';
export const DOCX = 'docx';
export const HTML = 'html';
export const MARKDOWN = 'md';
export const DOCUMENT = 'document';
export const PLAIN_TEXT = 'plain_text';

export const TEXT_MODES = [PDF, DOCUMENT, PLAIN_TEXT, DOCX, HTML, MARKDOWN]; // these types will use text/document layout

export const IMAGE = 'image';
export const CAD = 'cad';
export const COMIC = 'comic';

export const AUTO_RENDER_MODES = [IMAGE, CAD, COMIC].concat(TEXT_MODES); // these types will render (and thus download) automatically (if free)
export const WEB_SHAREABLE_MODES = AUTO_RENDER_MODES.concat(FLOATING_MODES);

export const DOWNLOAD = 'download';
export const APPLICATION = 'application';
export const UNSUPPORTED = 'unsupported';

// PDFs disabled on desktop until we update Electron: https://github.com/electron/electron/issues/12337
// Comics disabled because nothing is actually reporting as a comic type
export const UNSUPPORTED_IN_THIS_APP = IS_WEB ? [CAD, COMIC, APPLICATION] : [CAD, APPLICATION, PDF];

export const UNRENDERABLE_MODES = Array.from(
  new Set(UNSUPPORTED_IN_THIS_APP.concat([DOWNLOAD, APPLICATION, UNSUPPORTED]))
);
