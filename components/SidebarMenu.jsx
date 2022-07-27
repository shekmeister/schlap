import { Menu, createStyles } from '@mantine/core';
import { RiMore2Fill } from 'react-icons/ri';

const useStyles = createStyles((theme) => ({
    dropdown: {
        backgroundColor: theme.colors.tailwind.zinc['900'],
        border: `1px solid ${theme.colors.tailwind.zinc['700']}`
    },
    item: {
        '&[data-hovered]': {
            backgroundColor: theme.colors.tailwind.zinc['600']
        }
    },
    itemLabel: {
        color: 'white'
    },
    divider: {
        borderTop: `1px solid ${theme.colors.tailwind.zinc['700']}`,
        color: theme.colors.tailwind.zinc['600']
    }
}));

export default function SidebarMenu() {
    const { classes } = useStyles();
    return (
        <Menu width={200}
        shadow='md'
            classNames={{
                dropdown: classes.dropdown,
                item: classes.item,
                itemLabel: classes.itemLabel,
                divider: classes.divider
            }}
        >
            <Menu.Target>
                <button className='text-3xl md:text-2xl'><RiMore2Fill /></button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item>New Chat</Menu.Item>
                <Menu.Item>Add Friend</Menu.Item>
                <Menu.Divider></Menu.Divider>
                <Menu.Label>Profile</Menu.Label>
                <Menu.Item>View Profile</Menu.Item>
                <Menu.Item>Edit Profile</Menu.Item>
                <Menu.Divider></Menu.Divider>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item>Settings</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}