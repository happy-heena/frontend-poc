import { Outlet } from 'react-router-dom';

function Content() {
  return (
    <div id="content">
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default Content;
