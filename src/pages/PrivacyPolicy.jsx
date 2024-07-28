import React from "react";
import Header from "components/common/Header";
import Footer from "components/common/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <section className="pp py-12">
        <div className="container mx-auto px-4">
          <div className="row flex flex-wrap">
            <div className="col-12">
              <h3 className="pp-title text-3xl text-center pb-8 font-semibold font-poppins">YouSave’s Privacy Policy</h3>
            </div>
            <div className="col-md-4">
              <div className="dest-view">
                <p>
                  Your privacy is extremely important to us. To better protect you, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. This Privacy Policy relates to information collected by YouSave (referred to in this Privacy Policy as "YouSave" "we" or "us" or "our") through your use of our website and our Services, features, and information available on our website (which are collectively referred to in this Privacy Policy as the "YouSave Service").
                </p>
                <p>
                  If you do not agree to our use of your personal data in line with this policy, please do not use the YouSave Services.
                </p>
              </div>
              <div className="pp-side-title">
                <a href="#1">
                  <p className="text-red-500 font-bold font-poppins">1. Scope of this Privacy Policy</p>
                </a>
                <div className="ppline bg-gray-200 h-0.5 mb-5"></div>
              </div>
              {/* Repeat similar blocks for other sections */}
              <div className="pp-side-title-t">
                <a href="#2">
                  <p className="text-red-500 font-bold font-poppins">2. What Information do we Collect?</p>
                </a>
                <div className="ppline bg-gray-200 h-0.5 mb-5"></div>
              </div>
              {/* Add all other sections here */}
              <div className="img-d hidden sm:block">
                <span>
                  <img src="https://yousave.ai/img/gdpr_act%201.png" alt="GDPR Act" />
                </span>
              </div>
              <div className="img-d hidden sm:block">
                <span>
                  <img src="https://yousave.ai/img/ccpa-logo%201.png" alt="CCPA Logo" />
                </span>
              </div>
              <div className="img-d hidden sm:block">
                <span>
                  <img src="https://yousave.ai/img/a7f6c-logopipeda%201.png" alt="Logopipeda" />
                </span>
              </div>
              <div className="img-d hidden sm:block">
                <span>
                  <img src="https://yousave.ai/img/PDPA%201.png" alt="PDPA" />
                </span>
              </div>
            </div>
            <div className="col-md-8">
              <div className="col-12">
                <div className="mobile-view">
                  <p>
                    Your privacy is extremely important to us. To better protect you, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. This Privacy Policy relates to information collected by YouSave (referred to in this Privacy Policy as "YouSave" "we" or "us" or "our") through your use of our website and our Services, features, and information available on our website (which are collectively referred to in this Privacy Policy as the "YouSave Service").
                  </p>
                  <p>
                    If you do not agree to our use of your personal data in line with this policy, please do not use the YouSave Services.
                  </p>
                </div>
              </div>
              <div className="information-we">
                <h2 id="1" className="text-blue-800 font-poppins">Scope of this Privacy Policy</h2>
                <p>
                  Please be aware that this Privacy Policy does not govern all the information YouSave may process. This Privacy Policy is also incorporated into and governed by our Terms of Use. Any capitalized words we use in this Privacy Policy that we haven’t defined here will have the same meaning that they’re given in our Terms of Use.
                </p>
                <p>
                  Our commitments to employees are governed by our internal employment policies. In all instances we are committed to transparency with our customers, employees, and to protecting your data privacy.
                </p>
                <h2 id="2" className="text-blue-800 font-poppins">What Information do we Collect?</h2>
                <p>
                  You will be required to establish an account in order to take advantage of certain features of the YouSave Service. If you wish to establish an account you will be required to provide us with information (including personally identifiable information and non-personally identifiable information). In addition, we may obtain your personally identifiable information from you if you identify yourself to us by sending us an e-mail with questions or comments.
                </p>
                <p>
                  Depending on your use of the YouSave Service, we collect two types of information: personally identifiable information and non-personally identifiable information.
                </p>
                <div className="pp-details-r">
                  <h3 className="text-blue-800 text-lg font-poppins pt-3">Personally Identifiable Information</h3>
                  <p>
                    Personally identifiable information identifies you or can be used to identify or contact you. Examples of personally identifiable information may include your name, IP address, company name, job title, address, e-mail address, telephone number, and billing and credit card information.
                  </p>
                </div>
                <div className="pp-details-r">
                  <h3 className="text-blue-800 text-lg font-poppins pt-3">Non-Personally Identifiable Information</h3>
                  <p>
                    Non-personally identifiable information is information, any single item of which, by itself, cannot be used to identify or contact you, which may include demographic information (such as age, profession, company industry, gender, current location, or zip code), IP addresses, browser types, domain names, and statistical data involving the use of the YouSave Service. Certain non-personally identifiable information may be considered a part of your personally identifiable information if it were combined with other identifiers (for example, combining your zip code with your street address) in a way that enables you to be identified. But the same pieces of information may be considered non-personally identifiable information when they are taken alone or combined only with other non-personally identifiable information (for example, your account preferences).
                  </p>
                </div>
                {/* Add all other content sections similarly */}
                <div className="pp-details-r">
                  <h2 id="3" className="text-blue-800 font-poppins">Why do we Need your Personal Data?</h2>
                  <p>
                    We do not sell any data, including your personal data. We will only collect and process your personal data in accordance with applicable data protection and privacy laws. We need to collect and process certain personal data in order to provide you with access to YouSave. If you registered with us, you will have been asked to check a tick box indicating your agreement to provide this data in order to access our services. This consent provides us with the legal basis we require under applicable law to process your data. You maintain the right to withdraw such consent at any time.
                  </p>
                </div>
                {/* Add the remaining sections */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
