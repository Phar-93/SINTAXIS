"use strict";

function BaseException(){}

BaseException.prototype = new Error();
BaseException.prototype.constructor = BaseException;

BaseException.prototype.toString = function(){
    return this.name + ": "+this.menssage;
}