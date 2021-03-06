// Additional math functions and algorithms.
// Lib by JerichoFletcher
module.exports = {
	lerpThreshold: function(x1, y1, x2, y2, amount){
		if(x1 == x2){
			return amount < x1 ? y1 : y2;
		}
		return Mathf.clamp((amount - x1) * (y2 - y1) / (x2 - x1) + y1, y1, y2);
	}
}
