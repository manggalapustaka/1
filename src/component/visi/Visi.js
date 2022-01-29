import React from "react";
import "./Visi.css";

const Visi = () => {
    return (
        <section class="visi  " id="visi">
            <div class="jumbotron ">
                <div class="container pt-3 pb-5 card">
                    <div class="row d-flex justify-content-center  text-dark">
                        <div class="col-md-5 col-lg-5 col-xl-5 mx-auto mt-5 ">
                            <h1 class="text-orange text-uppercase mb-4 font-weight-bold text-left">
                                VISI
                            </h1>
                            <p>
                                Menjadi perpustakaan yang membudayakan
                                masyarakat gemar membaca serta memperkaya
                                wawasan masyarakat melalui buku.
                            </p>
                        </div>
                        <div class="col-md-5 col-lg-5 col-xl-5 mx-auto mt-5 ">
                            <h1 class="text-orange text-uppercase mb-4 font-weight-bold text-left">
                                MISI
                            </h1>
                            <ul type="1">
                                <li>Menyediakan buku-buku bermutu</li>
                                <li>
                                    Mengkondisikan membaca buku menjadi kegiatan
                                    yang menyenangkan dan bermanfaat
                                </li>
                                <li>
                                    Menjadi forum silaturahmi yang menjembatani
                                    terlaksananya kegiatan-kegiatan positif yang
                                    sifatnya mengembangkan diri
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Visi;
