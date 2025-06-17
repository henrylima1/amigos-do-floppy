document.addEventListener('DOMContentLoaded', function() {
    const pagAtual = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    const sidebar = document.getElementById('sidebar');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === pagAtual) {
            link.classList.add('active');
        }
    });
    
    document.addEventListener('click', function(event) {
        if (window.innerWidth < 992) {
            if (!sidebar.contains(event.target)) {
                sidebar.classList.remove('show');
            }
        }
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            sidebar.classList.remove('show');
        }
    });

    if (pagAtual === 'adocao.html') {
        const filterForm = document.getElementById('adoptionFilterBar');
        const animalCards = document.querySelectorAll('.animal-card');

        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const species = document.getElementById('filterSpecies').value.toLowerCase();
            const size = document.getElementById('filterSize').value.toLowerCase();
            const name = document.getElementById('filterName').value.toLowerCase();

            animalCards.forEach(card => {
                const cardSpecies = card.dataset.species?.toLowerCase() || '';
                const cardSize = card.dataset.size?.toLowerCase() || '';
                const cardName = card.dataset.name?.toLowerCase() || '';

                const speciesMatch = !species || cardSpecies === species;
                const sizeMatch = !size || cardSize === size;
                const nameMatch = !name || cardName.includes(name);

                card.closest('.col-12').style.display = 
                    speciesMatch && sizeMatch && nameMatch ? 'block' : 'none';
            });
        });
    }
}); 