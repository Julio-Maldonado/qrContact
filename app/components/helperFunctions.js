let isEmpty = (word) => { return word === undefined || word === '' }

let generateVCard = (info) => {
    let start = "BEGIN:VCARD\nVERSION:3.0\n", end = "END:VCARD"
    let data = ""

    if (isEmpty(info.lastName) || isEmpty(info.firstName))
        return { "error": true, "message": "Name undefined" }

    data += `N:${info.lastName}; ${info.firstName};\n`
    data += `FN:${info.firstName} ${info.lastName}\n`

    if (isEmpty(info.phoneNumber))
        return { "error": true, "message": "Cell undefined" }

    data += "TEL;TYPE=HOME,VOICE:" + info.phoneNumber + "\n"

    if (!isEmpty(info.companyName))
        data += "ORG:" + info.companyName + "\n"

    if (!isEmpty(info.title))
        data += "TITLE:" + info.title + "\n"

    if (!isEmpty(info.instagramUsername))
        data += "X-SOCIALPROFILE;TYPE=Instagram:https://www.instagram.com/" + info.instagramUsername + "\n"
        // X-SOCIALPROFILE;CHARSET=UTF-8;TYPE=facebook:
    if (!isEmpty(info.twitterUsername))
        data += "X-SOCIALPROFILE;TYPE=Twitter:http:/.twitter.com/" + info.twitterUsername + "\n"

    if (!isEmpty(info.facebookURL))
        data += "X-SOCIALPROFILE;TYPE=facebook:https://www.facebook.com/" + info.facebookURL + "\n"

    return { "error": false, "message": start + data + end }
}
// missing a few cases 
let adjustPhoneNumber = (text) => {
    if (text.length === 3)
        return `(${text})`

    if (text.length === 5)
        return `${text.slice(1, -1)}`

    if (text.length === 8)
        return `${text}-`

    if (text.length === 9)
        return `${text.slice(0, -1)}`

    return text
}

export {generateVCard, adjustPhoneNumber}