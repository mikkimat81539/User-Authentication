// User
var user = document.getElementById('user')
var userRequirements = document.getElementById('userRequirements')

// Password
var password = document.getElementById('password')
var passwordChar = document.getElementById('passwordChar')
var upperCase = document.getElementById('upperCase')
var lowerCase = document.getElementById('lowerCase')
var numberRequirement = document.getElementById('numberRequirement')
var special = document.getElementById('special')

user.onkeyup = () => {
    var userValue = user.value

    //User
    if(userValue.length >= 5) {
        userRequirements.classList.add('valid')
        userRequirements.classList.remove('invalid')
        userRequirements.style.display = 'none' 
        
    }

    else {
        userRequirements.classList.remove('valid')
        userRequirements.classList.add('invalid')
        userRequirements.style.display = 'block' 
    }
}

password.onkeyup = () => {
    var passwordValue = password.value
    
    var lowercaseRequirements = /[a-z]/g

    var uppercaseRequirements = /[A-Z]/g

    var numberRequirementvalue = /[0-9]/g

    var specialRequirements = /[!@#$%^&*()_+{}`~:;"'<>,./]/g

    //Password
    if(passwordValue.length >= 8) {
        passwordChar.classList.add('valid')
        passwordChar.classList.remove('invalid')
        passwordChar.style.display = 'none' 
        
    }

    else {
        passwordChar.classList.remove('valid')
        passwordChar.classList.add('invalid')
        passwordChar.style.display = 'block' 
    }

    if (passwordValue.match(lowercaseRequirements)) {
        lowerCase.classList.add('valid')
        lowerCase.classList.remove('invalid')
        lowerCase.style.display = 'none' 
        
    }

    else {
        lowerCase.classList.remove('valid')
        lowerCase.classList.add('invalid')
        lowerCase.style.display = 'block' 
    }

    if (passwordValue.match(uppercaseRequirements)) {
        upperCase.classList.add('valid')
        upperCase.classList.remove('invalid')
        upperCase.style.display = 'none' 
        
    }

    else {
        upperCase.classList.remove('valid')
        upperCase.classList.add('invalid')
        upperCase.style.display = 'block' 
    }

    if (passwordValue.match(numberRequirementvalue)) {
        numberRequirement.classList.add('valid')
        numberRequirement.classList.remove('invalid')
        numberRequirement.style.display = 'none' 
        
    }

    else {
        numberRequirement.classList.remove('valid')
        numberRequirement.classList.add('invalid')
        numberRequirement.style.display = 'block' 
    }

    if (passwordValue.match(specialRequirements)) {
        special.classList.add('valid')
        special.classList.remove('invalid')
        special.style.display = 'none'
        
    }

    else {
        special.classList.remove('valid')
        special.classList.add('invalid')
        special.style.display = 'block' 
    }
}