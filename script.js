// Auto-play music on load
window.addEventListener('load', function() {
    const music = document.getElementById('bgMusic');
    music.play().catch(() => {}); // Ignore autoplay blocks
});

// Confetti on Yes
document.getElementById('yesBtn').addEventListener('click', function() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
    document.getElementById('response').innerHTML = "Yay! I love you, [Crush's Name]! 💕🎉";
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('surprise').classList.remove('hidden');
    setTimeout(() => {
        alert("You've made my day! Let's celebrate! 🍾");
    }, 1000);
});

// Moving No button for fun
document.getElementById('noBtn').addEventListener('mouseover', function() {
    const btn = this;
    const container = document.querySelector('.container');
    const maxX = container.offsetWidth - btn.offsetWidth;
    const maxY = container.offsetHeight - btn.offsetHeight;
    btn.style.position = 'absolute';
    btn.style.left = Math.random() * maxX + 'px';
    btn.style.top = Math.random() * maxY + 'px';
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "Nice try! But I'll keep chasing you! 😘";
    document.getElementById('response').classList.remove('hidden');
});
