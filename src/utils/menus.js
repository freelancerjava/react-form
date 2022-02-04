import note from '../assets/icons/note.svg';
import user from '../assets/icons/user.svg';
import bell from '../assets/icons/bell.svg';
import me from '../assets/icons/menu-icon-1.svg';
import setting from '../assets/icons/setting.svg';
import chartLine from '../assets/icons/chart-line.svg';
import recomendation from '../assets/icons/life-ring.svg';
const topMenu = [
    {
        id: 1,
        icon: me,
        path: 'me',
        title: 'Мои поля',
    },
    {
        id: 2,
        icon: chartLine,
        path: 'diagnostics',
        title: 'Диагностика',
    },
    {
        id: 3,
        icon: recomendation,
        path: 'recomendation',
        title: 'Рекомендации',
    },
    {
        id: 4,
        icon: note,
        path: 'note',
        title: 'Заметки',
    }
]
const bottomMenu = [
    {
        id: 1,
        icon: user,
        path: '/profile',
        title: 'Профиль',
    },
    {
        id: 2,
        icon: bell,
        path: '/notifications',
        title: 'Уведомления',
    },
    {
        id: 3,
        icon: setting,
        path: '/settings',
        title: 'Настройки',
    }
]
export { topMenu, bottomMenu }