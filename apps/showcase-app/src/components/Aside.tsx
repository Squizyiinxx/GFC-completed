import{ memo } from "react";
import Icon from "../assets/Icon";
import { sidebarNavigation } from "../constant/navigation";

const Aside = memo(() => {
  return (
    <aside
      aria-label="Sidebar"
      className="px-4 py-4 hidden md:block h-screen max-w-[250px] w-full scroll-y-auto border-r border-gray-800"
    >
      <nav>
        <ul>
          {sidebarNavigation.map((item) => (
            <li
              key={item.url}
              className="flex nav-link my-4 items-center gap-1 border-r-2 border-transparent hover:border-[var(--accent-primary)] transition-all duration-300 ease-in-out gap-3"
            >
              <Icon name={item.icon} />
              <a href={item.url} className="w-full">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
});

export default Aside;
