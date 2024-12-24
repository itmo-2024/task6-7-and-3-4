"use strict";

// Submenus

const tamada = {
  title: "Хороший тамада",
  items: [
    {
      title: "Прекрасные лекции",
      items: [
        {
          title: "Вводная лекция",
          subtitle: "Узнаете, что существует что-то кроме div, p, button и img",
          link: "https://slides-2023-2024.vercel.app/9d7e7e3d-2894-417a-8adf-7a25035ca2b4.html",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/VI_icon_5892a15699.svg",
        },
        {
          title: "Первая лекция по CSS",
          subtitle:
            "Ничего не предвещало беды... кроме специфичности и дарт-вейдеров",
          link: "https://slides-2023-2024.vercel.app/9c0c86af-b5ef-4f45-a314-4738a28ae0b8.html",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/VI_152_icon_fd8ffd9674.svg",
        },
        {
          title: "Первая лекция по JS",
          subtitle: "Такое нам нравится",
          link: "https://slides-2023-2024.vercel.app/87386f4f-598c-4f7d-ae10-9c1358af9e3a.html",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/VI_GPU_icon_5b5af9161e.svg",
        },
        {
          title: "Лекция по психологии в дизайне",
          subtitle: "То, чего мы не заслуживали, но получили",
          link: "https://t.me/c/2424719914/192",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/s3_icon_0a3a26b5d4.svg",
        },
        {
          title: "Лекция про раскладки и сетки",
          subtitle:
            "Олег был на конференции, но всё равно получилось интересно",
          link: "https://slides-2023-2024.vercel.app/d89fe070-11dc-4ef2-b86d-f42baafb3eac.html",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/backup_icon_b427ce391e.svg",
        },
        {
          title: "Лекция про браузеры",
          subtitle:
            "Наконец-то поймёте, что происходит, когда вы набираете https://google.com в поисковой строке",
          link: "https://disk.yandex.com.am/d/fCLX4kF3veBZvQ",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/vdi_icon_73cf48b578.svg",
        },
        {
          title: "Паттерны в дизайне",
          subtitle: "Олега тоже не было, зато получилось поболтать с Булатом",
          link: "https://www.figma.com/file/vXE7OCgVqqSYQdeisDURi0/%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5-%D0%BF%D0%B0%D1%82%D1%82%D0%B5%D1%80%D0%BD%D1%8B-%D0%B2-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B5?type=design&node-id=0%3A1&mode=design&t=dKBh92Wa9X1S0jjB-1",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/DR_icon_efd7415ba0.svg",
        },
        {
          title: "Как верстать под мобилки, адаптивный дизайн",
          subtitle: "Да начнутся страдания",
          link: "https://slides-2023-2024.vercel.app/e68c50c1-d0cf-41bc-8d21-80527a0864a6.html",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/Kuber_icon_39ed7a8fdf.svg",
        },
        {
          title: "События в браузере",
          subtitle: "Реально помогло при написании этой домашки",
          link: "https://slides-2023-2024.vercel.app/5381c5e6-f273-4b4e-8fca-8c77d4a43c5b.html",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/state_cloud_icon_aa739087b6.svg",
        },
        {
          title: "Больше легендарных лекций",
          subtitle: "На них ходили даже те, кто не сдавал домашки",
          link: "https://slides-2023-2024.vercel.app/5381c5e6-f273-4b4e-8fca-8c77d4a43c5b.html",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/state_cloud_icon_aa739087b6.svg",
        },
      ],
      id: 0,
    },
    {
      title: "Полезный фидбек",
      items: [
        {
          title: "Вопросы после лекции",
          subtitle:
            "Для тех, кто получил доп. баллы за посещаемость и не только",
          link: "https://www.youtube.com/watch?v=ENQfLdrF4rg&ab_channel=%D0%9A%D0%B0%D0%BD%D0%B0%D0%BB%D0%B7%D0%B4%D1%80%D0%B0%D0%B2%D0%BE%D0%B3%D0%BE%D1%81%D0%BC%D1%8B%D1%81%D0%BB%D0%B0%3A%D0%BE%D1%82%D0%B2%D0%BE%D1%80%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%95.%D0%9F%D0%BE%D0%BD%D0%B0%D1%81%D0%B5%D0%BD%D0%BA%D0%BE%D0%B2%D0%B0/",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/profservices_icon_f596570ac8.svg",
        },
        {
          title: "Проверка на гитхабе",
          subtitle:
            "Пачка новых комментов, ждущих правок месяцами (порой нужно почти полностью переделать ДЗ)",
          link: "https://github.com/itmo-2024/task2/pull/2#issuecomment-2371677032",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/kedo_icon_28f45b2d7f.svg",
        },
        {
          title: "Обсуждение чего-то, пока Олег выходит из ИТМО",
          subtitle:
            "У вас есть как минимум подъём по лестнице, проход через полкорпуса и спуск на 3 этажа",
          link: "https://www.youtube.com/watch?v=jKDqQcHSss4",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/vdi_icon_73cf48b578.svg",
        },
        {
          title: "Ответы на вопросы в чате",
          subtitle: "Если нормально сформулируете, получите ответ",
          link: "https://t.me/c/2424719914/534",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/rpa2_icon_66ee43b781.svg",
        },
      ],
      id: 1,
    },
    {
      title: "Дополнительно",
      items: [
        {
          title: "Прикольная футболка с кодеруном",
          subtitle: "Знаю, что это, но пока не решал",
          link: "https://www.youtube.com/watch?v=tlLmpGqYHcs",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/ML_icon_0abd3f5440.svg",
        },
        {
          title: "Пару раз Олег проводил лекции в носках",
          subtitle: "Такое мы уважаем",
          link: "https://avatars.mds.yandex.net/get-shedevrum/12961523/img_13038714f3e611ee9166b2131e9e91d7/orig",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/postgresql_icon_3a1baccda5.svg",
        },
        {
          title: "Поучительный лайвкодинг",
          subtitle: "Так гораздо понятнее и нагляднее",
          link: "https://habr.com/ru/articles/821473/",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/arenadata_icon_b649d5fafb.svg",
        },
        {
          title: "Забота о студентах",
          subtitle:
            "Коэффициент на домашки и доп баллы за активности (особенно полезна внимательность)",
          link: "https://avatars.dzeninfra.ru/get-zen_doc/1554513/pub_5d8d027c92414d00b04c279c_5d8d02b4fe289100b1194245/scale_1200",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/bi_analytics_icon_d6baac50c7.svg",
        },
      ],
      id: 2,
    },
    {
      title: "Ещё дополнительно",
      items: [
        {
          title: "Спасибо, что посмотрели этот раздел!",
          subtitle: "Мне приятно",
          link: "https://context.reverso.net/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4/%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9/%D0%BC%D0%BD%D0%B5+%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%BD%D0%BE",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/MFA_icon_2f1a076a14.svg",
        },
      ],
      id: 3,
    },
  ],
};

const contest = {
  title: "Интересные конкурсы",
  items: [
    {
      title: "Домашки на вёрстку",
      items: [
        {
          title: "Домашка по HTML (письмо в Хогвартс)",
          subtitle:
            "Решаемо за час (в моей домашке можно найти ссылку на видео, определившее моё обучение на этом курсе)",
          link: "https://github.com/itmo-2024/task1",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/gost_vpn_icon_62c68020b0.svg",
        },
        {
          title: "Вёрстка газеты",
          subtitle:
            "Решаемо за 10 часов (если хотеть приемлемый результат), главное не хардкодить страницу А4...",
          link: "https://github.com/itmo-2024/task2",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/sec_awareness_icon_8fe011c2f7.svg",
        },
        {
          title: "Pixel Perfect",
          subtitle:
            "64 попытки - не предел (может отбить желание продолжать делать домашки)",
          link: "https://github.com/itmo-2024/task3",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/VPN_interconnect_icon_f424d9991c.svg",
        },
        {
          title: "Доступность",
          subtitle:
            "Узнайте немного нового о себе после хардкора третьей домашки",
          link: "https://github.com/itmo-2024/task4",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/sd_wan_icon_b1a264d075.svg",
        },
        {
          title: "Адаптивная газета",
          subtitle: "grid, flex, column-count в помощь",
          link: "https://github.com/itmo-2024/task5",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/cdn_icon_1707659733.svg",
        },
        {
          title: "Анимации (менюшка)",
          subtitle: "Без комментариев",
          link: "https://github.com/itmo-2024/task6-7-and-3-4",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/VI_GPU_icon_5b5af9161e.svg",
        },
      ],
      id: 0,
    },
    {
      title: "Домашки на JS",
      items: [
        {
          title: "Какие-то вступительные задачки",
          subtitle: "Типы данных и объекты",
          link: "https://new.contest.yandex.ru/contests/68093/problem?id=6016824%2F2024_09_17%2FoKBKuYaPmA",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/business_apps_icon_814e8b14cc.svg",
        },
        {
          title: "Прототипы",
          subtitle: "Лучше чем классы",
          link: "https://new.contest.yandex.ru/contests/68093/problem?id=6016824%2F2023_08_26%2FZGUbNmNwmS",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/kedo_icon_28f45b2d7f.svg",
        },
        {
          title: "Crawler",
          subtitle: "Вспоминаем Java Advanced",
          link: "https://new.contest.yandex.ru/contests/68093/problem?id=1098565%2F2024_10_22%2FGpxgILZPrs",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/ML_icon_0abd3f5440.svg",
        },
      ],
      id: 1,
    },
    {
      title: "Доп. баллы",
      items: [
        {
          title: "Баллы за посещаемость",
          subtitle: "Нужно просто быть на лекции",
          link: "https://docs.google.com/spreadsheets/d/1Tb1dWPJ00CwTYCn-GsF-SDgUqzkT2dRYStvQxyRFdd8/edit?gid=0#gid=0&range=L27",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/IT_audit_icon_fa21a4af45.svg",
        },
        {
          title: "Внимательность",
          subtitle: "Невиданная щедрость",
          link: "https://docs.google.com/spreadsheets/d/1Tb1dWPJ00CwTYCn-GsF-SDgUqzkT2dRYStvQxyRFdd8/edit?gid=0#gid=0&range=K27",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/migration2cloud_icon_1c5227db02.svg",
        },
        {
          title: "Старательность",
          subtitle: "Кто быстро сдаст - тот молодец",
          link: "https://docs.google.com/spreadsheets/d/1Tb1dWPJ00CwTYCn-GsF-SDgUqzkT2dRYStvQxyRFdd8/edit?gid=0#gid=0&range=E27",
          icon: "https://ru-msk-2.store.cloud.mts.ru/uploads/cloud_strategy_icon_d6014fd884.svg",
        },
      ],
      id: 2,
    },
  ],
};

const events = {
  title: "События",
  subtitle: "Ходите на конференции, посещайте лекции",
  items: [
    {
      title: "Новости",
      subtitle: "Подписывайтесь на телеграм-канал курса",
      link: "https://t.me/ArtyomShvetsov/",
      icon: "https://mws.ru/_ipx/s_40x40/header/news-icon.svg",
    },
    {
      title: "Статьи",
      subtitle: "Читайту доку",
      link: "https://doka.guide/",
      icon: "https://mws.ru/_ipx/s_40x40/header/article-icon.svg",
    },
  ],
};

const support = {
  title: "Поддержка",
  subtitle: "Техническая поддержка 24/7",
  items: [
    {
      title: "Пишите в чат, вам помогут",
      subtitle: 'Пишите "спасибо" в ответ',
      link: "https://t.me/olegmokhov",
      icon: "https://mws.ru/_ipx/s_40x40/header/news-icon.svg",
    },
    {
      title: "Можете писать автору в ЛС",
      subtitle: "Но не надо",
      link: "https://t.me/ArtyomShvetsov",
      icon: "https://mws.ru/_ipx/s_40x40/header/article-icon.svg",
    },
  ],
};

// Elements

const nav = document.querySelector(".site-nav");
const submenus = nav.querySelectorAll(".menu-item[data-has-children]");
const dropdownMenu = document.querySelector(".dropdown-menu-hidden");

const mainNav = document.querySelector(".main-nav");
const menu = document.querySelector(".menu");

// Colors

const backgroundColorSecondary = "#f2f3f7";
const colorBackgroundSecondaryElevatedMainNav =
  "0 0 100px rgba(0,0,0,.08),0 32px 16px rgba(0,0,0,.08)";
const primaryColor = "#ff0032";

// Variables

let lastOpenedSubmenuName = "";
let lastOpenedDropdownMenu = null;

// Switching dropdown menu content

function fillInnerDropdownMenu(item) {
  const contentList = document.querySelector(".main-content-list");

  const listItem = document.createElement("li");
  listItem.classList.add("main-content-item");

  const linkItem = document.createElement("a");
  linkItem.href = item.link;
  linkItem.classList.add("main-content-item-link");

  const image = document.createElement("img");
  image.src = item.icon;
  image.width = 40;
  image.height = 40;
  image.alt = item.title;

  const text = document.createElement("div");
  text.classList.add("main-content-item-text");

  const title = document.createElement("p");
  title.classList.add("main-content-item-title");
  title.textContent = item.title;

  const subtitle = document.createElement("p");
  subtitle.classList.add("main-content-item-subtitle");
  subtitle.textContent = item.subtitle;

  linkItem.appendChild(image);
  text.appendChild(title);
  text.appendChild(subtitle);
  linkItem.appendChild(text);
  listItem.appendChild(linkItem);
  contentList.appendChild(listItem);
}

function switchInnerDropdownMenu(menuName, id) {
  let menuContent;
  switch (menuName) {
    case "tamada":
      menuContent = tamada.items;
      break;
    case "contest":
      menuContent = contest.items;
      break;
    case "events":
      menuContent = events;
      break;
    case "support":
      menuContent = support;
      break;
  }

  const header = document.querySelector(".main-content-header");
  header.textContent = menuContent[id]?.title;

  const contentList = document.querySelector(".main-content-list");
  contentList.innerHTML = "";
  menuContent[id]?.items.forEach((item) => fillInnerDropdownMenu(item));
  if (id == -1) {
    menuContent.items.forEach((item) => fillInnerDropdownMenu(item));
  }
}

// Switching menus, dropdown menu event listeners

function switchDropdownMenu(menuName) {
  let menuContent;
  switch (menuName) {
    case "tamada":
      menuContent = tamada;
      break;
    case "contest":
      menuContent = contest;
      break;
    case "events":
      menuContent = events;
      break;
    case "support":
      menuContent = support;
      break;
  }

  const asideHeader = document.querySelector(".aside-header");
  asideHeader.textContent = menuContent.title;

  const asideSubtitle = document.querySelector(".aside-subtitle");
  asideSubtitle.textContent = "";

  const asideList = document.querySelector(".aside-list");
  asideList.innerHTML = "";

  if (menuName == "events" || menuName == "support") {
    asideSubtitle.textContent = menuContent.subtitle;

    switchInnerDropdownMenu(menuName, -1);

    return;
  }

  switchInnerDropdownMenu(menuName, 0);

  menuContent.items.forEach((item) => {
    const sectionButton = document.createElement("button");
    sectionButton.classList.add("aside-list-item");
    sectionButton.classList.add("aside-list-item-hover");
    sectionButton.textContent = item.title;
    if (item.id == 0) {
      sectionButton.classList.add("aside-list-item-checked");
      sectionButton.classList.remove("aside-list-item-hover");
      lastOpenedDropdownMenu = sectionButton;
    }

    // dropdown menu event listeners
    sectionButton.addEventListener("click", function changeMainContent() {
      if (!sectionButton.classList.contains("aside-list-item-checked")) {
        lastOpenedDropdownMenu.classList.remove("aside-list-item-checked");
        lastOpenedDropdownMenu.classList.add("aside-list-item-hover");

        sectionButton.classList.add("aside-list-item-checked");
        sectionButton.classList.remove("aside-list-item-hover");

        lastOpenedDropdownMenu = sectionButton;
        switchInnerDropdownMenu(menuName, item.id);
      }
    });

    asideList.appendChild(sectionButton);
  });
}

// Submenu listeners

submenus.forEach((submenu) => {
  const button = submenu.querySelector(":scope > .menu-btn");

  button.addEventListener("click", function openDropdownMenu() {
    const submenuName = button.dataset.name;
    const arrow = button.querySelector(":scope > .arrow");

    if (dropdownMenu.classList.contains("dropdown-menu-hidden")) {
      dropdownMenu.style.opacity = 1;
      switchDropdownMenu(submenuName);
      dropdownMenu.classList.remove("dropdown-menu-hidden");

      mainNav.style.backgroundColor = "#fff";
      menu.style.backgroundColor = "#fff";
      mainNav.style.boxShadow = colorBackgroundSecondaryElevatedMainNav;
      button.style.color = primaryColor;
      arrow.style.transform = "rotate(-180deg)";

      lastOpenedSubmenuName = submenuName;
    } else {
      if (submenuName === lastOpenedSubmenuName) {
        dropdownMenu.style.opacity = 0;
        setTimeout(() => {
          dropdownMenu.classList.add("dropdown-menu-hidden");
        }, 300);

        mainNav.style.backgroundColor = backgroundColorSecondary;
        menu.style.backgroundColor = backgroundColorSecondary;
        mainNav.style.boxShadow = "";
        button.style.color = "";
        arrow.style.transform = "";
      } else {
        dropdownMenu.classList.add("dropdown-menu-hidden");

        document.querySelector(
          ".menu-btn-" + lastOpenedSubmenuName
        ).style.color = "";
        document.querySelector(
          ".menu-btn-" + lastOpenedSubmenuName + " > .arrow"
        ).style.transform = "";

        button.style.color = primaryColor;
        arrow.style.transform = "rotate(-180deg)";

        setTimeout(() => {
          switchDropdownMenu(submenuName);
          lastOpenedSubmenuName = submenuName;
          dropdownMenu.classList.remove("dropdown-menu-hidden");
        }, 300);
      }
    }
  });
});

// Close the menu when clicking outside nav

window.addEventListener(
  "click",
  function collapseDropdownWhenClickingOutsideNav(e) {
    const target = e.target;

    if (
      dropdownMenu.classList.contains("dropdown-menu-hidden") ||
      mainNav.contains(target) ||
      menu.contains(target) ||
      dropdownMenu.contains(target)
    ) {
      return;
    }

    dropdownMenu.style.opacity = 0;
    setTimeout(() => {
      dropdownMenu.classList.add("dropdown-menu-hidden");
    }, 300);

    mainNav.style.backgroundColor = backgroundColorSecondary;
    menu.style.backgroundColor = backgroundColorSecondary;
    mainNav.style.boxShadow = "";
    document.querySelector(".menu-btn-" + lastOpenedSubmenuName).style.color =
      "";
    document.querySelector(
      ".menu-btn-" + lastOpenedSubmenuName + " > .arrow"
    ).style.transform = "";
  }
);
