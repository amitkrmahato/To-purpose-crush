document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "Yay! I love you, [Crush's Name]! 💕";
    document.getElementById('response').classList.remove('hidden');
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "That's okay, but I'll keep trying! 😊";
    document.getElementById('response').classList.remove('hidden');
});
