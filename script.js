const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const resultDiv = document.getElementById("result");

let playerTribe = null;
let enemyTribe = null;

document.getElementById("creative").addEventListener("click", () => startGame("Creative Tribe"));
document.getElementById("tech").addEventListener("click", () => startGame("Tech Tribe"));
document.getElementById("business").addEventListener("click", () => startGame("Business Tribe"));
document.getElementById("impact").addEventListener("click", () => startGame("Impact Tribe"));

function startGame(selectedTribe) {
    playerTribe = selectedTribe;
    enemyTribe = "Tech Tribe"; // Always the winning tribe
    resultDiv.textContent = "";

    // Initialize game objects
    const player = { x: 100, y: 200, health: 100, attack: 20 };
    const enemy = { x: 600, y: 200, health: 100, attack: 25 };

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Game loop
    const interval = setInterval(() => {
        // Simulate combat
        player.health -= enemy.attack * Math.random();
        enemy.health -= player.attack * Math.random();

        drawCharacters(player, enemy);

        if (player.health <= 0 || enemy.health <= 0) {
            clearInterval(interval);
            declareWinner(player, enemy);
        }
    }, 500);
}

function drawCharacters(player, enemy) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Player
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, 50, 50);

    // Enemy
    ctx.fillStyle = "red";
    ctx.fillRect(enemy.x, enemy.y, 50, 50);

    // Health bars
    ctx.fillStyle = "green";
    ctx.fillRect(player.x, player.y - 10, player.health, 5);
    ctx.fillRect(enemy.x, enemy.y - 10, enemy.health, 5);
}

function declareWinner(player, enemy) {
    if (player.health > enemy.health && playerTribe === "Tech Tribe") {
        resultDiv.textContent = `Congratulations! ${playerTribe} wins!`;
    } else {
        resultDiv.textContent = `${playerTribe} loses. The ${enemyTribe} prevails!`;
    }
}
