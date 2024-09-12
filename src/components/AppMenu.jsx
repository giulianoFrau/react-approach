import { Menubar } from 'primereact/menubar';
const AppMenu = () => {
  const items = [
    {
        label: 'Home',
        icon: 'pi pi-home',
     url: '/',
    },
    {
        label: 'About',
        icon: 'pi pi-user',
        url: '/about',
    },
  {
    label: 'Filtra le città',
    icon: 'pi pi-filter',
    url: '/filtered-cities',
  }
  ]
  return (
    <>
    <Menubar model={items} />

    </>
  );
};

export default AppMenu;