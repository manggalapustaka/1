import React from "react";
import "./About.css";
import profil from "../../img/profil.jpeg";

const About = () => {
    return (
        <section class="about  " id="about">
            <div class="jumbotron ">
                <div class="container pt-5 pb-5 card">
                    <div class="row d-flex justify-content-center align-items-center  text-dark">
                        <div class="col-md-5 col-lg-5 col-xl-5 mx-auto mt-5 ">
                            <div class="img">
                                <img src={profil} alt="" class=" w-100"></img>
                            </div>
                        </div>
                        <div class="col-md-5 col-lg-5 col-xl-5 mx-auto mt-6 pt-5 ">
                            <h1 class="text-orange text-uppercase mb-4 font-weight-bold text-left">
                                Tentang Kami
                            </h1>
                            <p>
                                Taman Baca Masyarakat (TBM) Manggala pustaka
                                merupakan satu² nya Taman baca yang ada di desa
                                Simo, Tepatnya di dukuh Manggal Rt 17/rw 06.
                                Kecamatan Simo, Kabupaten Boyolali. Perpustakaan
                                “Manggala Pustaka” merupakan gagasan dari
                                masyarakat di dukuh Manggal terutama para
                                pemuda-pemudi desa. TBM sendiri bergerak
                                dibidang khusunya Anak². Adapun kegiatan dri TBM
                                antara lain seperti kelas mewarnai, kelas
                                mengaji, kelas memanah kelas kesenian, serta
                                kelas darurat yang di adakan pda saat anak²
                                sekolah online, tak hanya dibagian anak2 saja
                                kegiatan yang mengarah ke masyarakat seperti
                                pengecekan kesehatan, diskusi tentang pertanian
                                modern serta kegiatan positif lainnya guna untuk
                                meningkatkan perekonomian dan pemberdayaan
                                masyarakat
                            </p>
                            <button
                                class="btn header-btn about-btn"
                                type="submit"
                                href="https://www.instagram.com/manggalapustaka/"
                            >
                                let's see
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
