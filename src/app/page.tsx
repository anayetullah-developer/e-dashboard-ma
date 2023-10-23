"use client";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="dashboard min-h-screen overflow-hidden flex relative">
      {/* === Sidebar === */}
      <Sidebar />
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
