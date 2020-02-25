/**
 * Detect mobile devices
 * 
 * Related info:
 * - https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation
 * - https://coderwall.com/p/i817wa/one-line-function-to-detect-mobile-devices-with-javascript
 */

function isMobileDevice() {
	var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation || window.orientation;
	return (typeof orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

const isMobileDevice = () => {
    var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation || window.orientation;
	return (typeof orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}