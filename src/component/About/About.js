import React, { useEffect } from "react";
import "./About.css";
import profil from "../../img/profil.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 500,
        });
        AOS.refresh();
    }, []);
    return (
        <section class="about  " id="about">
            <div class="jumbotron ">
                <div class="container pb-5 card">
                    <div class="row d-flex justify-content-center align-items-center text-dark">
                        <div class="col-md-5 col-lg-5 col-xl-5 mx-auto mt-5 ">
                            <div
                                class="img-fluid"
                                data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                            >
                                <img src={profil} alt="" class=" w-100"></img>
                            </div>
                        </div>
                        <div
                            class="col-md-5 col-lg-5 col-xl-5 mx-auto mt-6 pt-5 "
                            data-aos="fade-up-left"
                        >
                            <h4 class="text-dark text-uppercase mb-4 fw-bold text-left">
                                Tentang Kami
                            </h4>
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
                                class="btn btn-primary"
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
