import React from "react";

const Footer = () => {
    // CONTENT
    return (
        <section className="py-5 pb-0 footer bg-grey" id="kontak">
            <div className="container px-5 my-5 ">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6 col-md-6 col-xl-6  mb-5 mb-lg-0">
                        <h5 class="text-uppercase mb-4 font-weight-bold text-dark">
                            Profile
                        </h5>
                        <div className="footer-link d-block text-secondary ">
                            <p>
                                {" "}
                                <i class="fab fa-whatsapp "> </i> +62 8222 9617
                                7554
                            </p>
                            <p>
                                {" "}
                                <i class="fas fa-envelope "> </i>{" "}
                                ManggalaHydrofarm@gmail.com
                            </p>
                            <p>
                                {" "}
                                <i class="fas fa-map-marker-alt"> </i> Manggal
                                RT 17, RW 06, Simo, Simo, Boyolali, Jawa tengah,
                                Indonesia
                            </p>
                            <div className="col-lg-6 col-md-6 col-xl-6  mb-5 mb-lg-0">
                                <a
                                    class="btn btn-primary btn-floating m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a
                                    class="btn btn-instagram btn-floating m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a
                                    class="btn btn-web btn-floating text-white m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i class="fab fa-globe"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 offset-lg-1 col-lg-5 col-xl-5 mb-5">
                        <h5 class="text-uppercase mb-4 font-weight-bold text-dark">
                            Hubungi Kami
                        </h5>
                        <form
                            action="https://formsubmit.co/7937f2533162208d79e89227166e58de"
                            method="POST"
                        >
                            {/* <!-- HONEYPOT --> */}
                            <input
                                type="hidden"
                                name="_honey"
                                value="false"
                            ></input>
                            {/* <!-- DISABLE CAPTCHA --> */}
                            <input
                                type="hidden"
                                name="_captcha"
                                value="false"
                            ></input>
                            <input
                                type="hidden"
                                name="_next"
                                value="https://manggalapustaka.github.io/home3/manggalp.html#kontak"
                            ></input>
                            <div class="mb-3">
                                <label for="fullname" class="form-label ">
                                    Full Name
                                </label>
                                <input
                                    name="name"
                                    class="form-control"
                                    id="fullname"
                                    placeholder="your name"
                                    required
                                ></input>
                            </div>
                            <div class="mb-3">
                                <label for="emailinfo" class="form-label ">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    id="emailinfo"
                                    placeholder="your email"
                                    required
                                ></input>
                            </div>
                            <div class="mb-3">
                                <label for="massage" class="form-label">
                                    Massage
                                </label>
                                <textarea
                                    placeholder="Entry massage..."
                                    class="form-control"
                                    id="massage"
                                    name="massage"
                                    rows="3"
                                    required
                                ></textarea>
                            </div>
                            <button class="btn btn-primary" type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="text-center px-5 copyright text-secondary ">
                © 2022 Manggala Hydrofarm. All rights reserved
            </div>
            <div className="border-footer  "></div>
        </section>
    );
};

export default Footer;
