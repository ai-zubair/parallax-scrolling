$(function () {
    function pair(suffix,threshold){
        return {
            suffix:suffix,
            threshold:threshold
        };
    }
    var STAP = [pair('', 1), pair(1, 25), pair(2, 50), pair(3, 75), pair(4, 90), pair(5, 105), pair(6, 120), pair(7, 135), pair(8, 150)]
    $(window).scroll(function () {
        var scroll=$(window).scrollTop();
        var applyClass= function(suffix,threshold){
            if(scroll>=threshold){
                $('.plantNoScroll' + suffix).removeClass('plantNoScroll' + suffix).addClass('plantScroll' + suffix);
            } else{
                $('.plantScroll' + suffix).removeClass('plantScroll' + suffix).addClass('plantNoScroll' + suffix);
            }
        }
        STAP.forEach(function (stap) {
            applyClass(stap.suffix,stap.threshold);
        });
    });
});