import { Menubar } from 'primereact/menubar';

const AppMenu = () => {
  const items = [
    { label: 'Home', icon: 'pi pi-home', url: '/' },
    { label: 'Filtra le città', icon: 'pi pi-filter', url: '/filtered-cities' },
    { label: 'About', icon: 'pi pi-user', url: '/about' }
  ];

  return (
    <Menubar model={items} className=" shadow-md p-4 border-gray-100" />
  );
};

export default AppMenu;
