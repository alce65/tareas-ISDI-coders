export default function renderFooter(selector) {
  const title = 'ISDI Coders - Madrid Octubre 2021';
  const today = new Date();
  const html = `
    <footer class="footer">
      <address>${title}</address>
      <p>${today.toLocaleDateString()}</p>
    </footer>
  `;
  const node = document.querySelector(selector);
  node.outerHTML = html;
}
