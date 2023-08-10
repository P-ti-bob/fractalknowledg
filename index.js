// Optionnel : Ajouter une interaction pour masquer/dévoiler les détails des services
const services = document.querySelectorAll('.service');

services.forEach(service => {
    service.addEventListener('click', () => {
        service.classList.toggle('expanded');
    });
});
