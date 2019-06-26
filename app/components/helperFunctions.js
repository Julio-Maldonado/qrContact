let generateVCard = (info) => {
    let start = "BEGIN:VCARD\nVERSION:3.0\n", end = "END:VCARD"
    let data = ""

    if (info.lastName === undefined || info.firstName === undefined)
        return { "error": true, "message": "Name undefined" }

    data += `N:${info.lastName}; ${info.firstName};\n`
    data += `FN:${info.firstName} ${info.lastName}\n`

    if (info.phoneNumber === undefined)
        return { "error": true, "message": "Cell undefined" }

    data += "TEL;TYPE=HOME,VOICE:" + info.phoneNumber + "\n"

    if (info.companyName !== undefined)
        data += "ORG:" + info.companyName + "\n"

    if (info.title !== undefined)
        data += "TITLE:" + info.title + "\n"
    
    if (info.instagramUsername !== undefined)
        data += "X-SOCIALPROFILE;TYPE=Instagram:https://www.instagram.com/" + info.instagramUsername + "\n"
        // X-SOCIALPROFILE;CHARSET=UTF-8;TYPE=facebook:
    if (info.twitterUsername !== undefined)
        data += "X-SOCIALPROFILE;TYPE=Twitter:http:/.twitter.com/" + info.twitterUsername + "\n"

    if (info.facebookURL !== undefined)
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