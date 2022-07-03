import i18next from "i18next"

export const MenuItems = [{
    key: 'navbar_home',
    url: '/',
    cName: 'nav-links',
},
{
    key: 'navbar_association',
    url: '#',
    cName: 'nav-links',
    dropDown: [{
        key: "navbar_about",
        url: 'about',
        cName: 'dropdown-item'
    },
    {
        key: "navbar_statute",
        url: 'statute',
        cName: 'dropdown-item'
    },
    {
        key: "navbar_leadership",
        url: 'leadership',
        cName: 'dropdown-item'
    },
    {
        key: "navbar_list-of-members",
        url: 'list-of-members',
        cName: 'dropdown-item'
    },
    {
        key: "navbar_list-of-the-board",
        url: 'list-of-the-board',
        cName: 'dropdown-item'
    },
    ]
},
{
    key: "navbar_activity",
    url: '#',
    cName: 'nav-links',
    dropDown: [{
        key: "navbar_report2020",
        url: 'report2020',
        cName: 'dropdown-item'
    },
    {
        key: 'navbar_report2019',
        url: 'report2019',
        cName: 'dropdown-item'
    },
    {
        key: "navbar_accessibility",
        url: 'accessibility',
        cName: 'dropdown-item'
    },
    {
        key: "navbar_seminars",
        url: 'seminars',
        cName: 'dropdown-item'
    },
    {
        key: 'navbar_sessions',
        url: 'sessions',
        cName: 'dropdown-item'
    },
    ]
},
{
    key: "navbar_library",
    url: '/library',
    cName: 'nav-links'
},
{
    key: "navbar_convention",
    url: '/convention',
    cName: 'nav-links'
},
{
    key: "press-center",
    url: '#',
    cName: 'nav-links',
    dropDown: [{
        key: "navbar_news",
        url: '/press-center/news',
        cName: 'dropdown-item'
    },
    {
        key: "navbar_photo",
        url: '/press-center/photo',
        cName: 'dropdown-item'
    },
    {
        key: "navbar_video",
        url: '/press-center/video',
        cName: 'dropdown-item'
    }
    ]
},
{
    key: "navbar_contact",
    url: '/contact',
    cName: 'nav-links'
},
{
    key: "navbar_language",
    icon: 'fa-solid fa-chevron-down',
    url: '#',
    cName: 'nav-links',
    dropDown: [{
        title: "Русский",
        url: '/ru',
        cName: 'dropdown-item',
        onClick: () => {
            i18next.changeLanguage("ru")
        },
        icon: "ru"
    },
    {
        title: "O'zbek",
        url: '/uz',
        cName: 'dropdown-item',
        onClick: () => {
            i18next.changeLanguage("uz")
        },
        icon: "uz"
    },
    {
        title: "English",
        url: '/en',
        cName: 'dropdown-item',
        onClick: () => {
            i18next.changeLanguage("en")
        },
        icon: "gb"
    }
    ]
},
{
    key: 'navbar_editor',
    url: '/editor',
    cName: 'nav-links editor-link',
    icon: "fa-solid fa-newspaper"
},
]