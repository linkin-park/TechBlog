'use strict'
/**
 * this function is used to get the stream
 * @param {*} strValue - stream input
 */
class Stream {
    constructor(strValue) {
        this.currPos = 0,
        this.col = 0,
        this.line = 1;
        this.strValue = strValue
    }


    peek() {
        return this.strValue.charAt(this.currPos);
    }


    pop() {
        let chr = this.strValue.charAt(this.currPos++);
        this.col++;
        if (chr === '\n' || chr === '\r\n')(++this.line && (this.col = 0))
        return chr;
    }

    /**
     *  Eof enocuntered
     */
    eof() {
        return this.peek() === ''
    }

    /**
     *  If stream is not understandable
     */
    error() {
        return new Error(`There is error at line no ${this.line} and column ${this.col}`);
    }
}
