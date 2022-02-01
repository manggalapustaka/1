import React from "react";
import "./Kegiatan.css";
import imgwarnai from "../../img/galery/12.jpg";
import imgmengaji from "../../img/galery/14.jpg";
import imgkesenian from "../../img/galery/17.jpg";
import imgdarurat from "../../img/galery/4.jpg";
import imgpanahan from "../../img/galery/10.jpg";
import imgkesehatan from "../../img/galery/2.jpg";
import imgpertanian from "../../img/galery/5.jpg";

// satu
export const Kegiatan = () => {
    return (
        <section class="kegiatan  " id="kegiatan">
            <div class="jumbotron ">
                <div class="container pt-4 pb-3 card">
                    <h4 class="text-dark text-uppercase mb-4 fw-bold text-center">
                        KEGIATAN PENDIDIKAN
                    </h4>

                    <div
                        id="ExampleControls"
                        class="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div class="carousel-inner carousel-inner2">
                            <div class="carousel-item active carousel-item2">
                                <div class="card">
                                    <img
                                        src={imgwarnai}
                                        class="d-block w-100"
                                        alt="..."
                                    ></img>
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Kelas Mewarnai
                                        </h5>
                                        <p class="card-text">
                                            program kegiatan sederhana yang
                                            dapat membantu anak-anak berkembang
                                            secara kognitif dan psikologis.
                                            Apalagi, mewarnai merupakan salah
                                            satu kegiatan yang paling digemari
                                            anak-anak.
                                        </p>
                                        <a
                                            href="https://www.instagram.com/manggalapustaka/"
                                            class="btn btn-primary"
                                        >
                                            Go somewhere
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item carousel-item2">
                                <div class="card">
                                    <img
                                        src={imgmengaji}
                                        class="d-block w-100"
                                        alt="..."
                                    ></img>
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Kelas Mengaji
                                        </h5>
                                        <p class="card-text">
                                            Kelas mengaji merujuk pada aktivitas
                                            membaca Al Qur'an atau membahas
                                            kitab-kitab oleh yang beragama Islam
                                            yang dilaksanakan setiap hari selasa
                                            dan jum'at{" "}
                                        </p>
                                        <br />
                                        <a
                                            href="https://www.instagram.com/manggalapustaka/"
                                            class="btn btn-primary text-orange"
                                        >
                                            Go somewhere
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item carousel-item2">
                                <div class="card">
                                    <img
                                        src={imgkesenian}
                                        class="d-block w-100"
                                        height="180"
                                        alt="..."
                                    ></img>
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Kelas Kesenian
                                        </h5>
                                        <p class="card-text">
                                            program kelas yang difokuskan untuk
                                            bidang kesenian dengan tujuan untuk
                                            menggali bakat serta mengasah
                                            ketrampilan anak sejak dini mungkin
                                        </p>
                                        <br />
                                        <br />

                                        <a
                                            href="https://www.instagram.com/manggalapustaka/"
                                            class="btn btn-primary"
                                        >
                                            Go somewhere
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item carousel-item2">
                                <div class="card">
                                    <img
                                        src={imgdarurat}
                                        class="d-block w-100"
                                        alt="..."
                                    ></img>
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Kelas Darurat
                                        </h5>
                                        <p class="card-text">
                                            program yang dirancang layaknya
                                            bersekolah pada umumnya pada saat
                                            kedaan darurat seperti pademi
                                            COVID-19 ini, tujuanya agar
                                            anak-anak tidak melupakan budaya
                                            sekolah yang sudah melekat sejak
                                            dini
                                        </p>
                                        <a
                                            href="https://www.instagram.com/manggalapustaka/"
                                            class="btn btn-primary"
                                        >
                                            Go somewhere
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item carousel-item2">
                                <div class="card">
                                    <img
                                        src={imgpanahan}
                                        class="d-block w-100"
                                        alt="..."
                                    ></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Panahan</h5>
                                        <p class="card-text">
                                            Panahan adalah suatu kegiatan
                                            menggunakan busur panah untuk
                                            menembakkan anak panah. kegiatan ini
                                            merupakan salah satu olahraga yang
                                            dianjurkan oleh Rosulullah SAW yang
                                            dilaksanakan setiap sebulan sekali
                                        </p>
                                        <br />
                                        <a
                                            href="https://www.instagram.com/manggalapustaka/"
                                            class="btn btn-primary"
                                        >
                                            Go somewhere
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev control-prev2"
                            type="button"
                            data-bs-target="#ExampleControls"
                            data-bs-slide="prev"
                        >
                            <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next control-next2"
                            type="button"
                            data-bs-target="#ExampleControls"
                            data-bs-slide="next"
                        >
                            <span
                                class="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
// Kedua
export const Kegiatan2 = () => {
    return (
        <section class="kegiatan" id="kegiatan">
            <div class="jumbotron ">
                <div class="container pt-4 pb-3 card">
                    <h4 class="text-dark text-uppercase mb-4 fw-bold text-center">
                        KEGIATAN MASYARAKAT
                    </h4>

                    <div class="carousel-inner carousel-inner2 justify-content-center">
                        <div class="carousel-item active carousel-item2">
                            <div class="card">
                                <img
                                    src={imgkesehatan}
                                    class="d-block w-100"
                                    alt="..."
                                ></img>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Pengecekan Kesehatan Masyarakat
                                    </h5>
                                    <p class="card-text">
                                        Layanan kesehatan ini dilaksanakan
                                        seminggu sekali, dengan tujuan agar
                                        lingkungan masyarakat yang sehat dan
                                        aman dari penyakit
                                    </p>
                                    <br />
                                    <br />
                                    <a
                                        href="https://www.instagram.com/manggalapustaka/"
                                        class="btn btn-primary"
                                    >
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item carousel-item2">
                            <div class="card">
                                <img
                                    src={imgpertanian}
                                    class="d-block w-100"
                                    alt="..."
                                ></img>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Diskusi Pertanian
                                    </h5>
                                    <p class="card-text">
                                        program ini bertujuan untuk meningkatkan
                                        perekonomian masyarakat dengan
                                        mempelajari hal baru tentang efisiensi,
                                        efektifitas dan ekonomis seputar
                                        pertanian serta memperdayakan masyarakat
                                        agar lebih maju
                                    </p>
                                    <a
                                        href="https://www.instagram.com/manggalapustaka/"
                                        class="btn btn-primary"
                                    >
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
