exports.myTime =
function () {
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var prepand = (hour >= 12)? " PM ":" AM ";
	return hour + ":" + minute + prepand;
}