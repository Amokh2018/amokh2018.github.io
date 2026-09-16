document.documentElement.classList.add('js');

const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');
if (menu && nav) {
  const closeMenu = () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  };
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
      menu.focus();
    }
  });
  window.matchMedia('(max-width: 850px)').addEventListener('change', closeMenu);
}

const filters = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('[data-category]')];
const status = document.querySelector('.filter-status');
function applyFilter(selected) {
  filters.forEach(button => {
    const active = button === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  let visible = 0;
  cards.forEach(card => {
    card.hidden = selected.dataset.filter !== 'all' &&
      !card.dataset.category.split(' ').includes(selected.dataset.filter);
    if (!card.hidden) visible += 1;
  });
  if (status) status.textContent = `${visible} of ${cards.length} projects shown`;
}
filters.forEach(button => button.addEventListener('click', () => applyFilter(button)));
if (filters.length) applyFilter(filters[0]);
// A shared project link must remain visible even after a category was selected.
window.addEventListener('hashchange', () => {
  const target = document.getElementById(location.hash.slice(1));
  if (target && target.matches('[data-category]') && target.hidden) {
    applyFilter(filters[0]);
    target.scrollIntoView();
  }
});
