const menuButtons = document.querySelectorAll('.menu-button');

menuButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.02)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });

    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(.98)';
    });

    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1.02)';
    });
});

const burgerCheckbox = document.querySelector('.burger-checkbox');
const lines = document.querySelectorAll('.line');

burgerCheckbox.addEventListener('change', () => {
    if (burgerCheckbox.checked) {
        lines[0].style.transform = 'translateY(6px) rotate(45deg) scaleX(1.2)';
        lines[1].style.transform = 'scale(0)';
        lines[2].style.transform = 'translateY(-6px) rotate(-45deg) scaleX(1.2)';
    } else {
        lines[0].style.transform = '';
        lines[1].style.transform = '';
        lines[2].style.transform = '';
    }
});

const menuOptions = document.querySelector('.menu-options');
const appHeader = document.querySelector('.app-header');

burgerCheckbox.addEventListener('change', () => {
    if (burgerCheckbox.checked) {
        appHeader.style.backgroundColor = '#fff';
        appHeader.style.boxShadow = '0 0 6px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.08)';

        menuOptions.style.opacity = '1';
        menuOptions.style.transform = 'translateX(0)';
    } else {
        appHeader.style.backgroundColor = '';
        appHeader.style.boxShadow = '';

        menuOptions.style.opacity = '';
        menuOptions.style.transform = '';
    }
});

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    const checkbox = header.querySelector('.checkbox-accordion');
    const content = header.nextElementSibling;
    const accordionName = header.querySelector('.accordion-name');
    const accordionAction = header.querySelector('.accordion-action');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            content.style.maxHeight = '3000px';
            content.style.paddingBottom = '23px';
            accordionName.style.color = '#ff0032';
            accordionAction.style.transform = 'rotate(-180deg)';
        } else {
            content.style.maxHeight = '';
            content.style.paddingBottom = '';
            accordionName.style.color = '';
            accordionAction.style.transform = '';
        }
    });
});

const nestedAccordionHeaders = document.querySelectorAll('.nested-accordion-header');

nestedAccordionHeaders.forEach(nestedHeader => {
    const nestedCheckbox = nestedHeader.querySelector('.checkbox-nested-accordion');
    const nestedContent = nestedHeader.nextElementSibling;
    const verticalLine = nestedHeader.querySelector('.vertical-line');

    nestedCheckbox.addEventListener('change', () => {
        if (nestedCheckbox.checked) {
            nestedContent.style.maxHeight = '3000px';
            verticalLine.style.transform = 'rotate(0)';
        } else {
            nestedContent.style.maxHeight = '';
            verticalLine.style.transform = '';
        }
    });
});

function showBigMenu(event) {
    const accordion = event.target;
    const bigMenu = document.querySelector(`.${accordion.dataset.name}-big-menu`);

    if (accordion.checked) {
        bigMenu.style.transform = 'translateY(128px)';
        bigMenu.style.boxShadow = '0 0 6px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.08)';
    } else {
        bigMenu.style.transform = '';
        bigMenu.style.boxShadow = '';
    }
}

function handleCheckboxChange(event) {
    const checkbox = event.target;
    const header = checkbox.closest('.accordion-header');
    const accordionAction = header.querySelector('.accordion-action');
    const isChecked = checkbox.checked;

    if (isChecked) {
        accordionAction.style.transform = 'rotate(-180deg)';
        accordionAction.style.color = 'red';
        appHeader.style.backgroundColor = '#fff';
        menuOptions.style.backgroundColor = '#fff';
        menuOptions.style.boxShadow = '0 0 6px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.08)';
    } else {
        accordionAction.style.transform = '';
        accordionAction.style.color = '';
        appHeader.style.backgroundColor = '';
        menuOptions.style.backgroundColor = '';
        menuOptions.style.boxShadow = '';
    }
}

function handleHeaderMouseOver(event) {
    const header = event.currentTarget;
    header.style.color = '#ff0032';
}

function handleHeaderMouseOut(event) {
    const header = event.currentTarget;
    header.style.color = '#1d2023';
}

function handleLinkMouseOver(event) {
    const link = event.currentTarget;
    link.style.color = '#ff0032';
}

function handleLinkMouseOut(event) {
    const link = event.currentTarget;
    link.style.color = '#1d2023';
}

function isBigScreen() {
    const screenWidth = window.innerWidth;
    const accordionNames = ['products', 'services', 'events', 'support'];
    const radioNames = ['iaas', 'saas', 'dbaas', 'secaas', 'naas', 'ai', 'consulting', 'outsourcing', 'custom'];

    if (screenWidth > 1280) {
        appHeader.style.backgroundColor = '#f2f3f7';
        appHeader.style.boxShadow = 'none';
        
        accordionNames.forEach(name => {
            const accordion = document.querySelector(`.${name}-accordion`);
            accordion.dataset.name = name;

            accordion.addEventListener('change', showBigMenu);
            
            accordionHeaders.forEach(header => {
                const checkbox = header.querySelector('.checkbox-accordion');

                checkbox.addEventListener('change', handleCheckboxChange);
                header.addEventListener('mouseover', handleHeaderMouseOver);
                header.addEventListener('mouseout', handleHeaderMouseOut);            
            })
        });

        const accordionLinks = document.querySelectorAll('.accordion-link');
        accordionLinks.forEach(link => {
            link.addEventListener('mouseover', handleLinkMouseOver);
            link.addEventListener('mouseout', handleLinkMouseOut);        
        });

        function updateMenuContent() {
            radioNames.forEach(radioName => {
                const content = document.querySelector(`.base-menu-content-${radioName}`);
                if (content) {
                    content.style.display = 'none';
                }
            });
        
            radioNames.forEach(radioName => {
                const radio = document.querySelector(`.big-menu-${radioName}-radio`);
                const content = document.querySelector(`.base-menu-content-${radioName}`);
        
                if (radio && radio.checked && content) {
                    content.style.display = 'block';
                }
            });
        }
        
        updateMenuContent();
        
        radioNames.forEach(radioName => {
            const radio = document.querySelector(`.big-menu-${radioName}-radio`);
            if (radio) {
                radio.addEventListener('change', updateMenuContent);
            }
        });

        const bigMenuLabels = document.querySelectorAll('.big-menu-label');
        
        bigMenuLabels.forEach(label => {
            const radio = label.previousElementSibling;

            function resetStyles() {
                bigMenuLabels.forEach(label => {
                    label.style.backgroundColor = label.previousElementSibling.checked ? '#1d2023' : '#fff';
                    label.style.color = label.previousElementSibling.checked ? '#fafafa' : '#1d2023';
                });
            }

            resetStyles();

            label.addEventListener('mouseover', () => {
                if (!radio.checked) {
                    label.style.backgroundColor = '#f2f3f7';
                    label.style.color = '#1d2023';
                }
            });
        
            label.addEventListener('mouseout', () => {
                if (!radio.checked) {
                    label.style.backgroundColor = '#fff';
                    label.style.color = '#1d2023';
                }
            });
        
            radio.addEventListener('change', () => {
                resetStyles();
                if (!radio.checked) {
                    label.style.backgroundColor = '#fff';
                    label.style.color = '#1d2023';
                }
            });
        });

        const contentListItems = document.querySelectorAll('.content-list-item');
        contentListItems.forEach(contentItem => {
            contentItem.addEventListener('mouseover', () => {
                contentItem.style.backgroundColor = '#f2f3f7';
            });
            contentItem.addEventListener('mouseout', () => {
                contentItem.style.backgroundColor = '#fff';
            });
        });
    } else if (burgerCheckbox.checked) {
        appHeader.style.backgroundColor = '#fff';
        appHeader.style.boxShadow = '0 0 6px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.08)';

        accordionNames.forEach(name => {
            document.querySelector(`.${name}-accordion`).removeEventListener('change', showBigMenu);
        });

        accordionHeaders.forEach(header => {
            const checkbox = header.querySelector('.checkbox-accordion');

            checkbox.removeEventListener('change', handleCheckboxChange);
            header.removeEventListener('mouseover', handleHeaderMouseOver);
            header.removeEventListener('mouseout', handleHeaderMouseOut);            
        })

        const accordionLinks = document.querySelectorAll('.accordion-link');
        accordionLinks.forEach(link => {
            link.removeEventListener('mouseover', handleLinkMouseOver);
            link.removeEventListener('mouseout', handleLinkMouseOut);        
        });
    }
}

isBigScreen();

window.addEventListener('resize', isBigScreen);