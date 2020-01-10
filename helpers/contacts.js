const phone = ["+", "7", " ", "9", "0", "9", " ", "9", "0", "2", "-", "9", "0", "-", "8", "0"];
const email = ["h", "i", "@", "i", "t", "-", "e", "f", "r", "e", "m", ".", "c", "o", "m"];

export const contacts = {
    get getPhone() {
        return phone.join('')
    },
    get getEmail() {
        return email.join('')
    }
};