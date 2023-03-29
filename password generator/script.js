function generate(){
    let length= 10
    let charset ="abcdefghijklmnopqrstuvwxyz 1234567890 !@#$%^&*()<>?/"
    let password = ""
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    document.getElementById("password").textContent= password;
}