const verificationEmail = (data) => {
    let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return reg.test(data)
}

const verificationPassword = (data) => {
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
    return reg.test(data)
}

export { verificationEmail, verificationPassword }