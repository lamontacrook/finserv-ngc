
/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const contentBlock = block.querySelectorAll('.hero > div:not(:first-child)');
  const overlay = document.createElement('div');

  overlay.classList.add('hero-content');
  contentBlock.forEach((item) => {
    overlay.appendChild(item);
  });
  block.appendChild(overlay);
}