import React from "react";
import logo from "../img/logo1.png";
import { button1 } from "../component/button/Button";

const Navbar = () => {
    return (
        <div className="header-inner">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="  ">
                        <img
                            className="img-fluid "
                            width="60"
                            height="40"
                            src={logo}
                            alt=""
                        />
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon">
                            <i className="fas fa-bars"></i>
                        </span>
                    </button>
                    <div
                        class="collapse navbar-collapse justify-content-end text-center"
                        id="navbarNav"
                    >
                        <ul class="navbar-nav m-auto text-center text-dark">
                            <li class="nav-item active">
                                <a class="nav-link" href="#home">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">
                                    Tentang Kami
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#visi">
                                    Visi & Misi
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#kegiatan">
                                    Kegiatan
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#kontak">
                                    Kontak
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/manggalapustaka/">
                                    {button1()}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
