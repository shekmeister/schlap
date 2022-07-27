import { Menu, createStyles } from '@mantine/core';
import ActivityMenu from './ActivityMenu'
import 
{   RiMore2Fill, 
    RiUserLine, 
    RiUserAddLine, 
    RiMailAddLine, 
    RiSettings4Line, 
    RiPaletteLine, 
    RiInformationLine 
} from 'react-icons/ri';

const useStyles = createStyles((theme) => ({
    dropdown: {
        backgroundColor: theme.colors.tailwind.zinc['900'],
        border: `1px solid ${theme.colors.tailwind.zinc['800']}`
    },
    item: {
        '&[data-hovered]': {
            backgroundColor: theme.colors.tailwind.zinc['600'],
        }
    },
    itemIcon: {
        color: theme.colors.tailwind.zinc['400'],
    },
    itemLabel: {
        color: 'white',
    },
    divider: {
        borderTop: `1px solid ${theme.colors.tailwind.zinc['800']}`,
    },
    arrow: {
        border: `1px solid ${theme.colors.tailwind.zinc['800']}`,
    }
}));

export default function SidebarMenu() {
    const { classes } = useStyles();
    return (
        <Menu width={200}
            shadow='md'
            position='bottom'
            classNames={{
                dropdown: classes.dropdown,
                item: classes.item,
                itemLabel: classes.itemLabel,
                divider: classes.divider,
                itemIcon: classes.itemIcon,
            }}
        >
            <Menu.Target>
                <button className='text-3xl md:text-2xl'><RiMore2Fill /></button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item icon={<RiMailAddLine size={20} />}>New Chat</Menu.Item>
                <Menu.Item icon={<RiUserAddLine size={20} />}>Add Friend</Menu.Item>
                <Menu.Divider></Menu.Divider>
                <Menu.Label>User Settings</Menu.Label>
                <Menu.Item icon={<RiUserLine size={20} />}>View Profile</Menu.Item>
                <Menu.Item >
                    <Menu
                        shadow='md'
                        position='right-start'
                        trigger='hover'
                        width={150}
                        offset={20}
                        classNames={{
                            dropdown: classes.dropdown,
                            item: classes.item,
                            itemLabel: classes.itemLabel,
                            divider: classes.divider,
                            itemIcon: classes.itemIcon,
                            arrow: classes.arrow,
                        }}
                        withArrow
                    >
                        <Menu.Target>
                            <Menu.Item component='a' sx={{ padding: '0px' }} icon={<RiInformationLine size={20} />}>Activity status</Menu.Item>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Label>Set Status</Menu.Label>
                            <Menu.Item>Online</Menu.Item>
                            <Menu.Item>Offline</Menu.Item>
                            <Menu.Item>Away</Menu.Item>
                            <Menu.Item>Do not disturb</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Menu.Item>
                <Menu.Divider></Menu.Divider>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item icon={<RiSettings4Line size={20} />}>Settings</Menu.Item>
                <Menu.Item icon={<RiPaletteLine size={20} />}>Theme</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}