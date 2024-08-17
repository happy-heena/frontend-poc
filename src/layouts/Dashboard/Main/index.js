import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

function Main() {
  const { isDrawerOpen } = useSelector(({ common }) => ({
    isDrawerOpen: common.isDrawerOpen,
  }));

  return (
    <main className={`content ${isDrawerOpen ? 'open' : ''}`}>
      <Outlet />
    </main>
  );
}

export default Main;
