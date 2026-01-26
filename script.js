// Load and display games
async function loadGames() {
    const gameGrid = document.getElementById('game-grid');
    
    try {
        // Show loading state
        gameGrid.innerHTML = '<div class="loading">🎮 ゲームを読み込んでいます...</div>';
        
        // Fetch games data
        const response = await fetch('games.json');
        const data = await response.json();
        
        // Clear loading state
        gameGrid.innerHTML = '';
        
        // Check if there are any games
        if (!data.games || data.games.length === 0) {
            gameGrid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">🎮</div>
                    <p>まだゲームがありません</p>
                </div>
            `;
            return;
        }
        
        // Create game cards
        data.games.forEach(game => {
            const gameCard = createGameCard(game);
            gameGrid.appendChild(gameCard);
        });
        
    } catch (error) {
        console.error('Error loading games:', error);
        gameGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">❌</div>
                <p>ゲームの読み込みに失敗しました</p>
            </div>
        `;
    }
}

// Create a game card element
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    // Create image container
    const imageDiv = document.createElement('div');
    imageDiv.className = 'game-image';
    
    if (game.image) {
        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.title;
        imageDiv.appendChild(img);
    } else {
        // Use emoji as fallback
        imageDiv.textContent = game.icon || '🎮';
    }
    
    // Create info container
    const infoDiv = document.createElement('div');
    infoDiv.className = 'game-info';
    
    const title = document.createElement('h2');
    title.className = 'game-title';
    title.textContent = game.title;
    
    const description = document.createElement('p');
    description.className = 'game-description';
    description.textContent = game.description;
    
    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'game-tags';
    
    if (game.tags && game.tags.length > 0) {
        game.tags.forEach(tagText => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = tagText;
            tagsDiv.appendChild(tag);
        });
    }
    
    infoDiv.appendChild(title);
    infoDiv.appendChild(description);
    infoDiv.appendChild(tagsDiv);
    
    card.appendChild(imageDiv);
    card.appendChild(infoDiv);
    
    // Add click handler
    card.addEventListener('click', () => {
        if (game.url) {
            // Validate that the URL is relative (starts with ./ or games/)
            // This prevents external URL redirects for security
            if (game.url.startsWith('./') || game.url.startsWith('games/')) {
                window.location.href = game.url;
            } else {
                console.warn('Invalid game URL format:', game.url);
            }
        }
    });
    
    return card;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', loadGames);
