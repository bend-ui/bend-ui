import { NavigationMenu } from '@bend-ui/base-ui';

const links = [
  { href: '/overview', label: 'Overview' },
  { href: '/handbook', label: 'Handbook' },
  { href: 'https://github.com/mui/base-ui', label: 'GitHub' },
];

export const Navbar01 = () => {
  return (
    <div>
      <NavigationMenu aria-label="Primary">
        <NavigationMenu.List>
          {links.map((link) => (
            <NavigationMenu.Item key={link.href}>
              <NavigationMenu.Link href={link.href}>
                {link.label}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu>
    </div>
  );
};
