import React from "react";
import "./Home.css";
import { LineChart } from "./LineChart";
import { VerticalGraph } from "./VerticalGraph";
import { AreaChart } from "./AreaChart";
import { PieChart } from "./PieChart";
function Home() {
  const userlogo = "images/user-image/react-logo.webp";

  let copyDate = new Date();
  let date = copyDate.getFullYear();
  return (
    <>
      <main className="d-lg-flex">
        <section className="d-lg-none">
          <div className="d-flex justify-content-between px-4 pt-3">
            <div>
              <button
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
                id="mobile-bar-btn"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
            <div
              className="offcanvas offcanvas-start"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabindex="-1"
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            >
              <div className="offcanvas-header">
                <div>Dashboard</div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div>
                  <h2 className="user-detail"><img src={userlogo} alt="user-image"></img>Parth</h2>
                  <div className="menu-item">
                    <div><a href="/" className="text-reset">Dashboard</a></div>
                    <div><a href="/" className="text-reset">Icons</a></div>
                    <div><a href="/" className="text-reset">Map</a></div>
                    <div><a href="/" className="text-reset">Notifications</a></div>
                    <div><a href="/" className="text-reset">User Profile</a></div>
                    <div><a href="/" className="text-reset">Table List</a></div>
                    <div><a href="/" className="text-reset">Typography</a></div>
                    <div><a href="/" className="text-reset">RTL Support</a></div>
                    <div><a href="/" className="text-reset">Upgrade to pro</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="heading-mobile"><h1>Dashboard</h1></div>
            <div>
              
              <div class="dropdown">
              <button
                class=" dropdown-toggle bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                   Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                  Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                  Logout
                  </a>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </section>
        <section className="p-2 d-none d-lg-block menu-laptop p-lg-0">
          <h1 id="heading-lg">Dashboard</h1>
          <div className="menu-list">
            <h2 className="user-detail"><img src={userlogo} alt="user-image"></img>Parth</h2>
            <div className="menu-item">
              <div><i class="fa-solid fa-chart-pie"></i><a href="/" className="text-reset menu-name">Dashboard</a></div>
              <div><i class="fa-solid fa-atom"></i><a href="/" className="text-reset menu-name">Icons</a></div>
              <div><i class="fa-solid fa-globe"></i><a href="/" className="text-reset menu-name">Map</a></div>
              <div><i class="fa-solid fa-bell"></i><a href="/" className="text-reset menu-name">Notifications</a></div>
              <div><i class="fa-regular fa-user"></i><a href="/" className="text-reset menu-name">User Profile</a></div>
              <div><i class="fa-solid fa-table-list"></i><a href="/" className="text-reset menu-name">Table List</a></div>
              <div><i class="fa-solid fa-grip-lines"></i><a href="/" className="text-reset menu-name">Typography</a></div>
              <div><i class="fa-solid fa-earth-americas"></i><a href="/" className="text-reset menu-name">RTL Support</a></div>
              <div><i class="fa-solid fa-rocket"></i><a href="/" className="text-reset menu-name">Upgrade to pro</a></div>
            </div>
          </div>
        </section>
        <section className="dashboard-content">
          <div className="d-none d-lg-flex justify-content-end pe-5 ">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div class="dropdown user-button">
              <button
                class=" dropdown-toggle bg-transparent "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={userlogo} alt="user-image"></img>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                   Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                  Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                  Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <section className="mt-5 mt-lg-3">
            <div className="chart-container">
              <p className="mb-0 opacity-50 text-lg-center">Total Shipments</p>
              {/* <h4>Performance</h4> */}
              <div className="line-chart-div ">
                <LineChart />
              </div>
            </div>
            <div className="mt-5 d-lg-flex">
              <div className="vertical-graph-container">
                <p className="opacity-50">Total Earning</p>
                <div className="vertical-graph-div">
                  <VerticalGraph />
                </div>
              </div>
              <div className="vertical-graph-container mt-5 mt-lg-0">
                <p className="opacity-50">Total Customer</p>
                <div className="vertical-graph-div">
                  <AreaChart />
                </div>
              </div>
              <div className="vertical-graph-container mt-5 mt-lg-0">
                <p className="opacity-50">Imported To</p>
                <div className="vertical-graph-div">
                  <PieChart />
                </div>
              </div>
            </div>
            <section className="pt-5">
              <p className="text-black text-center">© {date} Parth Kale. All rights reserved.</p>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}

export default Home;
