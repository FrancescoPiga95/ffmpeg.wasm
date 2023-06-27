import pkg from '../../package.json';

/*
 * Default options for browser environment
 */
const corePath = typeof process !== 'undefined' && process.env.NODE_ENV === 'development'
  ? new URL('/node_modules/@ffmpeg/core/dist/ffmpeg-core.js', 'https://unpkg.com/@ffmpeg/core-st@0.11.1/dist/ffmpeg-core.js').href
  : `https://unpkg.com/@ffmpeg/core@${pkg.devDependencies['@ffmpeg/core'].substring(1)}/dist/ffmpeg-core.js`;

export default { corePath };
