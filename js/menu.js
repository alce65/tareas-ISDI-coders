export default function createMenu(menuItems) {
  let menu = '<nav><ul class="header-menu">';
  menuItems.forEach((item) => {
    menu += `<li><a class= "header-menu__item"
  href="${item.path}">${item.label}</a></li>`;
  });
  menu += '</ul></nav>';
  return menu;
}
