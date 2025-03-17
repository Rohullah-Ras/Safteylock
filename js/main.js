let passwords = [];

// voeg nieuw password
document.getElementById('safe-button').onclick = function () {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email && password) {
        passwords.push({ email, password });
        renderPasswords();
        document.getElementById('email').value = ''; // Clear input fields
        document.getElementById('password').value = '';
    }
};

// passwords laten zien
function renderPasswords() {
    var container = document.querySelector('.toDo__body-2-body');
    container.innerHTML = ''; 

    for (let i = 0; i < passwords.length; i++) {
        var passwordItem = document.createElement('div');
        var passwordText = showAll ? passwords[i].password : '●'.repeat(passwords[i].password.length); 
        
        passwordItem.innerHTML = ` <div class="toDo__task_1">
            <ul class="toDo__task_2">
                <li>${passwords[i].email}</li>
                <li id="password-${i}">${passwordText}</li>
            </ul>
            <ul class="toDo__task_3">
                <li class="toDo__task_3-1" onmousedown="showPassword(${i})" onmouseup="hidePassword(${i})">Show</li>
                <li class="toDo__task_3-2" onclick="removePassword(${i})">Verwijder</li>
            </ul>
        </div>`;
        container.appendChild(passwordItem);
    }
}

// apart wachtwoorden laten zien 
function showPassword(index) {
    var passwordElement = document.getElementById(`password-${index}`);
    passwordElement.innerText = passwords[index].password; // echte password
}

// als show los laat dan moet terug stopen
function hidePassword(index) {
    var passwordElement = document.getElementById(`password-${index}`);
    passwordElement.innerText = '●'.repeat(passwords[index].password.length); 
}

// verwijder de wachtwoord van lijst
function removePassword(index) {
    passwords.splice(index, 1); 
    renderPasswords(); 
}


let showAll = false;

// Show All button clicked laat alles zien
document.querySelector('.toDo__body-2-footer-li').onmousedown = function () {
    showAll = true; 
    renderPasswords(); 
};

// Show All button released verstop alles
document.querySelector('.toDo__body-2-footer-li').onmouseup = function () {
    showAll = false; 
    renderPasswords(); // terug naar begin
};

// kaarten van plek wisslen
document.getElementById('js--fab').onclick = function () {
    rearrangeCards(); 
};

// terug naar normal
function rearrangeCards() {
    var cards = document.querySelectorAll('.toDo');
    var cardContainer = document.body; 

    
    var cardArray = Array.from(cards);

    for (let i = cardArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
    }

    cardArray.forEach(card => {
        cardContainer.appendChild(card);
    });
}
