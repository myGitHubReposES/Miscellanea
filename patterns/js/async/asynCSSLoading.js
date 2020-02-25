/**
 * Asynchronous CSS Loading
 * 
 * Related info:
 * - https://www.filamentgroup.com/lab/async-css.html
 */

const asyncCSSLoad = (url, callBackFunction) => {
	var link = document.createElement('link');
		link.setAttribute('rel','stylesheet');		
		link.setAttribute('href', url);
		link.setAttribute('type','text/css');
		link.onload = callBackFunction;
		document.getElementsByTagName('head')[0].appendChild(link);
}