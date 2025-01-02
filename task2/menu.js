
const mobileMenu = document.querySelector('.mobile-nav');
const burgerBtn = document.querySelector('.menu-nav-btn');

burgerBtn.addEventListener('change', () => {
  if (burgerBtn.checked) {
    mobileMenu.classList.add('active');
  } else {
    mobileMenu.classList.remove('active');
  }
});

const accordionHeaders = document.querySelectorAll('.accordion-header,.accordion-inner-head');

accordionHeaders.forEach(header => {
  const input = header.querySelector("input");
  const list = header.nextElementSibling;
  const accordionTitle = header.querySelector('.accordion-title');
  const accordionAction = header.querySelector('.accordion-action');
  const vert = header.querySelector('.vert');
  input.addEventListener('change', () => {
    if (input.checked) {
      list.classList.add('active');
      if (vert === null) {
        accordionTitle.classList.add('active');
        accordionAction.classList.add('active');
      } else {
        vert.classList.add('active');
      }
    } else {
      list.classList.remove('active');
      if (vert === null) {
        accordionTitle.classList.remove('active');
        accordionAction.classList.remove('active');
      } else {
        vert.classList.remove('active');
      }
    }
  });
});

const desktopBtnSt = new Map();
const table = new Map([
  ['nav-el-1', '.base-menu-products'],
  ['nav-el-2', '.base-menu-services'],
  ['nav-el-3', '.base-menu-events'],
  ['nav-el-4', '.base-menu-support']
]);
const desktopMenuBtns = document.querySelectorAll('.clickable-nav-btn');
desktopMenuBtns.forEach(btn => {
   desktopBtnSt.set(btn, false);
});

desktopMenuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const wasChosen = desktopBtnSt.get(btn)
    desktopMenuBtns.forEach(btn2 => {
      const label = btn2.querySelector('label');
      label.classList.remove('active');
      const block = document.querySelector(table.get(btn2.getAttribute('id')));
      block.classList.remove('active');
      desktopBtnSt.set(btn2, false);
    })
    if (!wasChosen) {
      const label = btn.querySelector('label');
      label.classList.add('active');
      const block = document.querySelector(table.get(btn.getAttribute('id')));
      block.classList.add('active');
      desktopBtnSt.set(btn, true);
    }
  })
  btn.addEventListener('mouseover', (e) => {
    btn.style.color = 'red';
  })
  btn.addEventListener('mouseout', (e) => {
    btn.style.color = 'inherit';
  })
})



const asideBtnName = ['iaas', 'saas', 'cons', 'profserv'];

function updateDesktopMenu() {
  asideBtnName.forEach(name => {
    const radio = document.querySelector(`.aside-btn-${name}`);
    const mainContent = document.querySelector(`.base-menu-content-${name}`);
    const radioLabel = document.querySelector(`.item-label-${name}`);
    if (radio.checked) {
      mainContent.style.display = 'block';
      radioLabel.classList.add('active');
    } else {
      mainContent.style.display = 'none'
      radioLabel.classList.remove('active')
    }
  });
}

updateDesktopMenu();

asideBtnName.forEach(name => {
  const radio = document.querySelector(`.aside-btn-${name}`);
  radio.addEventListener('change', updateDesktopMenu)
})

const greyItems = document.querySelectorAll('.content-list-item,.aside-list-item');
greyItems.forEach(greyItem => {
  greyItem.addEventListener('mouseover', () => {
    greyItem.style.backgroundColor = 'var(--color-constant-greyscale-400)';
  });
  greyItem.addEventListener('mouseout', () => {
    greyItem.style.backgroundColor = '';
  });
})




