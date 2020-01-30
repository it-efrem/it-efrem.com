'use strict';

/////////////////////////////////
//  Specially against parsing  //
/////////////////////////////////

const el = ["h", "i", "@", "i", "t", "-", "e", "f", "r", "e", "m", ".", "c", "o", "m"];

export const contacts = {
    get email() {
        return el.join('')
    }
};