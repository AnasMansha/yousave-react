import React from 'react';

const Footer = () => {
    return (
        <div className="container">
            {/* Desktop footer */}
            <footer className="hidden md:block">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-1">
                        <a href="index.html">Home</a>
                    </div>
                    <div className="col-span-2 text-center">
                        <a href="contact-us.html">Contact Us</a>
                    </div>
                    <div className="col-span-1">
                        <a href="my_account.html">Account</a>
                    </div>
                    <div className="col-span-4">
                        <a href="index.html">
                            <img className="footer-img mx-auto" src="img/new-logo.webp" alt="Logo" />
                        </a>
                    </div>
                    <div className="col-span-1">
                        <a href="about-us.html">About</a>
                    </div>
                    <div className="col-span-2">
                        <a href="mailto:yousave@yousave.ai">yousave@yousave.ai</a>
                    </div>
                    <div className="col-span-1 flex justify-between">
                        <a href="blog.html" className="mr-1">Blog</a>
                        <a href="https://x.com/YouSave_ai" target="_blank" rel="noopener noreferrer">
                            <img src="img/twitter.svg" alt="Twitter" />
                        </a>
                    </div>
                    <div className="col-span-12 my-4"></div>
                    <div className="col-span-4 text-center">
                        <a href="privacy-policy.html">Privacy Policy</a>
                    </div>
                    <div className="col-span-4 text-center">
                        ©2024 yousave.ai All rights reserved
                    </div>
                    <div className="col-span-4 text-center">
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </footer>

            {/* Mobile footer */}
            <footer className=" md:hidden">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-3">
                        <ul>
                            <li className="footer-li">HOME</li>
                            <li className="footer-li mt-4">About</li>
                        </ul>
                    </div>
                    <div className="col-span-6">
                        <a href="index.html">
                            <img className="footer-img mx-auto" src="img/new-logo.webp" alt="Logo" />
                        </a>
                    </div>
                    <div className="col-span-3">
                        <ul>
                            <li className="footer-li text-left">Contact us</li>
                            <li className="footer-li mt-4 flex items-center">
                                Blog
                                <a href="https://x.com/YouSave_ai" target="_blank" rel="noopener noreferrer" className="ml-3">
                                    <img src="img/twitter.svg" style={{ width: '15px', height: '15px' }} alt="Twitter" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="line-footer col-span-12 my-4"></div>
                    <div className="col-span-3">
                        <a href="index.html">
                            <p className="footer-tt">Privacy policy</p>
                        </a>
                    </div>
                    <div className="col-span-6">
                        <a href="index.html">
                            <p className="footer-tt">©2024 yousave.ai All rights reserved</p>
                        </a>
                    </div>
                    <div className="col-span-3">
                        <a href="index.html">
                            <p className="footer-tt">Terms & Conditions</p>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
