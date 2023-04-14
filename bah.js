const generatePassword = () => {
    // Définir les critères de génération de mot de passe
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const digits = document.getElementById('digits').checked;
    const specials = document.getElementById('specials').checked;
  
    // Créer une chaîne de caractères avec tous les caractères requis
    let characters = '';
    if (uppercase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (lowercase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (digits) {
      characters += '0123456789';
    }
    if (specials) {
      characters += '!@#$%^&*()_+-={}[]|\\:;"\'<>,.?/~`';
    }
  
    // Générer le mot de passe
    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    // Afficher le mot de passe généré
    document.getElementById('password').value = password;
  };
  
  // Mettre à jour la valeur de la longueur de mot de passe affichée
  document.getElementById('length').addEventListener('input', () => {
    document.getElementById('lengthValue').innerText = document.getElementById('length').value;
  });
  
  // Générer un mot de passe lorsqu'on clique sur le bouton "Générer"
  document.getElementById('generate').addEventListener('click', generatePassword);
  