(function(_g){
    _g.marquee = marquee;

    function marquee(_msg,el){
        el.classList.add("down")
        var _msg1 = document.querySelector("#msg1 a");
        var _msg2 = document.querySelector("#msg2 a");

        var _i = 0;
        _msg1.innerHTML = _msg[_i++%_msg.length];
        _msg2.innerHTML = _msg[_i++%_msg.length];
        var _time = 8;

        var msg1 = document.getElementById("msg1");
        msg1.addEventListener("animationstart", function (argument) {
            //console.log('iteration:',argument.elapsedTime/(_time*2));
            setTimeout(function(){
                _msg1.innerHTML=_msg[_i++%_msg.length];
                Array.from(document.styleSheets).map(function(_styleSheet){
                    Array.from(_styleSheet.cssRules).map(function(_cssRule){
                        if(_cssRule.name === 'down-one'){
                            _cssRule.deleteRule('0%');
                            _cssRule.deleteRule('10%');
                            _cssRule.appendRule("0% {transform:translateY(0);}")
                        }
                    });
                });
            },_time*1000);
            
        }, false);
        msg1.addEventListener("animationiteration", function (argument) {
            //console.log('iteration:',argument.elapsedTime/(_time*2));
            _msg2.innerHTML=_msg[_i++%_msg.length];
            setTimeout(function(){
                _msg1.innerHTML=_msg[_i++%_msg.length];
            },_time*1000);
        }, false);
    }
    
})(window);