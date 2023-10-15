"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="dashboard min-h-screen overflow-hidden flex relative">
      {/* === Sidebar === */}
      <aside className="sidebar h-screen overflow-hidden w-sidebarWidth shrink-0 bg-primary-dark">
        <div className="custom_scrollbar h-full overflow-y-auto">
          <div className="p-3 bg-inherit">
            {/* ==== Logo ==== */}
            <div className="logo_area flex items-center justify-center w-auto h-14 overflow-hidden">
              <Image
                width={200}
                height={80}
                className="w-full h-full object-contain"
                src="/assets/images/demo-logo.png"
                alt="site_logo"
              />
            </div>
          </div>
          {/* === Links ==== */}
          <nav className="mt-6">
            <ul className="flex flex-col">
              <li>
                <h3
                  aria-label="Dashboard links category"
                  className="px-6 pt-6 pb-2 text-white text-opacity-90 text-xs font-medium"
                >
                  Basic
                </h3>
                <span className="dashboard_sidebar_link dashboard_sidebar_link_active">
                  Dashboard
                </span>
              </li>
              <li>
                <h3
                  aria-label="Dashboard links category"
                  className="px-6 pt-6 pb-2 text-white text-opacity-90 text-xs font-medium"
                >
                  User
                </h3>
                <span className="dashboard_sidebar_link">Profile</span>
              </li>
              <li>
                <div className="dashboard_sidebar_link">Settings</div>
                <div className="dropdowon_content">
                  <div className="bg-primary px-10 py-4">
                    <ul>
                      <li>Dropdonw item 1</li>
                      <li>Dropdonw item 2</li>
                      <li>Dropdonw item 3</li>
                      <li>Dropdonw item 4</li>
                      <li>Dropdonw item 5</li>
                      <li>Dropdonw item 6</li>
                      <li>Dropdonw item 7</li>
                      <li>Dropdonw item 8</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <h3
                  aria-label="Dashboard links category"
                  className="px-6 pt-6 pb-2 text-white text-opacity-90 text-xs font-medium"
                >
                  Shop
                </h3>
                <span className="dashboard_sidebar_link">Invoice</span>
              </li>
              <li>
                <span className="dashboard_sidebar_link">Products</span>
              </li>
              <li>
                <span className="dashboard_sidebar_link">Order</span>
              </li>
              <li>
                <span className="dashboard_sidebar_link">Reports</span>
              </li>
              <li>
                <span className="dashboard_sidebar_link">Agents</span>
              </li>
              <li>
                <span className="dashboard_sidebar_link">Customers</span>
              </li>
              <li>
                <span className="dashboard_sidebar_link">Settings</span>
              </li>
              <li>
                <span className="dashboard_sidebar_link">Logout</span>
              </li>
            </ul>
          </nav>
        </div>
      </aside>{" "}
      {/* End Sidebar  */}
      <main className="h-full flex flex-col bg-red-100 grow">
        <header className="bg-slate-300">
          <nav className="flex items-center justify-between p-4">
            <input
              className="px-5 py-2 leading-none rounded-md"
              type="text"
              placeholder="Search..."
            />
            <ul className="flex items-center gap-5">
              <li>Noti</li>
              <li>Message</li>
              <li>
                <div>
                  <span className="flex items-center justify-center w-12 h-12 bg-red-400 rounded-full overflow-hidden border border-blue-500">
                    MA
                  </span>
                </div>
              </li>
            </ul>
          </nav>
        </header>
        <h2>Main content</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
          praesentium dicta commodi iste distinctio laudantium? Dolore eos
          voluptatibus maiores vitae id eligendi fugit consequuntur similique
          eaque, placeat qui quae molestiae, optio ratione officiis in autem.
          Omnis minus ad mollitia id, sapiente itaque ab consequatur, iusto
          voluptatibus incidunt natus, voluptates quasi.
        </p>
      </main>
    </div>
  );
}
