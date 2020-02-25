/**
 * Asynchronous Script Loading
 * 
 * Related info:
 * - https://flaviocopes.com/javascript-async-defer/
 * - https://love2dev.com/blog/web-performance-optimization-asynchronous-script-loading/
 */

const asyncScriptLoad = (url, callBackFunction) => {
	var script = document.createElement('script');
		script.src =  url; 
		script.type = 'text/javascript';		          
		script.onload = callBackFunction;
		document.getElementsByTagName("head")[0].appendChild(script);		
}