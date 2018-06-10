// modules
import toRoundPercent from './to-round-percent.js';

/*
	 本体
	 this = element
 */
function scrollLeftPercent(elem){
	if( elem.scrollLeft ){
		const maxLeft = elem.scrollWidth - elem.clientWidth;
		return toRoundPercent(elem.scrollLeft, maxLeft);
	}else{
		return 0;
	}
}
function scrollTopPercent(elem){
	if( elem.scrollTop ){
		const maxTop = elem.scrollHeight - elem.clientHeight;
		return toRoundPercent(elem.scrollTop, maxTop);
	}else{
		return 0;
	}
}

export {
	scrollTopPercent,
	scrollLeftPercent
}
