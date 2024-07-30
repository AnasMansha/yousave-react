import React from "react";
import Header from "components/common/Header";
import Scroller from "components/common/Scroller";
const PrivacyPolicy = () => {
  const handleScroll = (index) => {
    const element = document.getElementById(`${index + 1}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <Header />
      <Scroller />
      <section className="pt-12 pb-20 font-poppins">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full">
              <h3 className="text-2xl md:text-5xl  text-center pb-10 font-medium">
                YouSave’s Privacy Policy
              </h3>
            </div>

            <div className="w-full md:w-1/3 p-8">
              <div className="text-justify">
                <p className="mb-5">
                  Your privacy is extremely important to us. To better protect
                  you, we provide this notice explaining our online information
                  practices and the choices you can make about the way your
                  information is collected and used. This Privacy Policy relates
                  to information collected by YouSave (referred to in this
                  Privacy Policy as "YouSave" "we" or "us" or "our") through
                  your use of our website and our Services, features, and
                  information available on our website (which are collectively
                  referred to in this Privacy Policy as the "YouSave Service").
                </p>
                <p>
                  If you do not agree to our use of your personal data in line
                  with this policy, please do not use the YouSave Services.
                </p>
              </div>

              <div className="mt-6">
                {[
                  "Scope of this Privacy Policy",
                  "What Information do we Collect?",
                  "Why do we Need your Personal Data?",
                  "Your Rights",
                  "Where will Data be Transferred?",
                  "How Long will Data be Stored?",
                  "Do we Collect Information from Children under 16 years of age?",
                  "What do we do with the information we Collect?",
                  "When do we Disclose Information to Third Parties?",
                  "Could my Information be Transferred to other Countries?",
                  "EU-U.S. Privacy Shield Framework",
                  "California Privacy Rights",
                  "What Choices do I have regarding the Collection, Disclosure and Distribution of Personally Identifiable Information?",
                  "Whom do I Contact if I have any Privacy Questions?",
                ].map((item, index) => (
                  <div key={index} className="mb-4">
                    <a
                      href={`#${index + 1}`}
                      className="block text-lg font-bold text-red-600"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        handleScroll(index); // Call the smooth scroll function
                      }}
                    >
                      {index + 1}. {item}
                    </a>
                    <div
                      className={`h-1 ${
                        index === 0 ? "bg-red-500" : "bg-gray-300"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>

              {[
                "img/gdpr_act 1.png",
                "img/ccpa-logo 1.png",
                "img/a7f6c-logopipeda 1.png",
                "img/PDPA 1.png",
              ].map((src, index) => (
                <div key={index} className="py-4">
                  <img src={src} alt="" className="w-full" />
                </div>
              ))}
            </div>

            <div className="w-full md:w-2/3 p-8">
              <div className="hidden md:block text-justify">
                <p className="mb-4">
                  Your privacy is extremely important to us. To better protect
                  you, we provide this notice explaining our online information
                  practices and the choices you can make about the way your
                  information is collected and used. This Privacy Policy relates
                  to information collected by YouSave (referred to in this
                  Privacy Policy as "YouSave" "we" or "us" or "our") through
                  your use of our website and our Services, features, and
                  information available on our website (which are collectively
                  referred to in this Privacy Policy as the "YouSave Service").
                </p>
                <p>
                  If you do not agree to our use of your personal data in line
                  with this policy, please do not use the YouSave Services.
                </p>
              </div>

              <div className="text-justify">
                {[
                  {
                    id: 1,
                    title: "Scope of this Privacy Policy",
                    content: `Please be aware that this Privacy Policy does not govern all the information YouSave may process. This Privacy Policy is also incorporated into and governed by our Terms of Use. Any capitalized words we use in this Privacy Policy that we haven’t defined here will have the same meaning that they’re given in our Terms of Use. Our commitments to employees are governed by our internal employment policies. In all instances we are committed to transparency with our customers, employees, and to protecting your data privacy.`,
                  },
                  {
                    id: 2,
                    title: "What Information do we Collect?",
                    content: `You will be required to establish an account in order to take advantage of certain features of the YouSave Service. If you wish to establish an account you will be required to provide us with information (including personally identifiable information and non-personally identifiable information). In addition, we may obtain your personally identifiable information from you if you identify yourself to us by sending us an e-mail with questions or comments. Depending on your use of the YouSave Service, we collect two types of information: personally identifiable information and non-personally identifiable information.`,
                  },
                  {
                    id: 3,
                    title: "Why do we Need your Personal Data?",
                    content: `We do not sell any data, including your personal data. We will only collect and process your personal data in accordance with applicable data protection and privacy laws. We need to collect and process certain personal data in order to provide you with access to YouSave. If you registered with us, you will have been asked to check a tick box indicating your agreement to provide this data in order to access our services. This consent provides us with the legal basis we require under applicable law to process your data. You maintain the right to withdraw such consent at any time.`,
                  },
                  {
                    id: 4,
                    title: "Your Rights",
                    content: `Opt-out: You may contact us anytime to opt-out of: (i) direct marketing communications; (ii) automated decision-making and/or profiling; (iii) our collection of sensitive personal data, if any; or (iv) any new processing of your personal data that we may carry out beyond the original purpose. Please note that your use of some of the platform may be ineffective upon opt-out. Access: You may access the data we hold about you at any time by exporting your Team’s data (if you are an admin) or by contacting us directly. Amend: You can also contact us to update or correct any inaccuracies in your personal data. Move: Your data is portable – i.e. you have the flexibility to move your data to other service providers as you wish. Erase and Forget: In certain situations, for example when the data we hold about you is no longer relevant or is incorrect, you can request that we erase your data. You may contact us at yousave@yousave.ai or via mail or courier 350 Tenth Ave 5th floor, San Diego, CA 92101 anytime for any other questions you may have about your personal data and our use of such personal data.`,
                  },
                  {
                    id: 5,
                    title: "Where will Data be Transferred?",
                    content: `Your data, including personal data that we collect from you, may be transferred to, stored at and processed by us and other third parties outside the country in which you reside, including, but not limited to the United States, where data protection and privacy regulations may not offer the same level of protection as in other parts of the world. By using our platform, you agree to this transfer, storing or processing subject to the terms of our Data Protection Addendum. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this policy. Except as otherwise provided in our Data Protection Addendum, your team's project and task data will never be transferred to third parties. The only data we share with third parties is for analytics, error tracking, and marketing.`,
                  },
                  {
                    id: 6,
                    title: "How Long will Data be Stored?",
                    content: `We will only retain your personal data as long as reasonably required for you to use the Site/Application(s) and/or to provide you with the Services unless a longer retention period is required or permitted by law (for example, for regulatory purposes).`,
                  },
                  {
                    id: 7,
                    title:
                      "Do we Collect Information from Children under 16 years of age?",
                    content: `We are committed to protecting the privacy of children. The YouSave Service is not designed for or directed to children under the age of 16. We do not collect personally identifiable information from any person we actually know is under the age of 16.`,
                  },
                  {
                    id: 8,
                    title: "What do we do with the information we Collect?",
                    content: `... When required, we will always give you the option to unsubscribe in any email we send you. We may also use the information gathered to perform statistical analysis of user behavior or to evaluate and improve the YouSave Service. We may link some of this information to personally identifiable information for internal purposes or to improve your experience with the YouSave Service.`,
                  },
                  {
                    id: 9,
                    title: "When do we Disclose Information to Third Parties?",
                    content: `Except as set forth in this Privacy Policy or as specifically authorized by you, we will not disclose any information to third parties outside of YouSave.`,
                  },
                  {
                    id: 10,
                    title:
                      "Could my Information be Transferred to other Countries?",
                    content: `Personally identifiable information collected on the YouSave Service may be transferred from time to time to our offices or personnel, or to third parties, located throughout the world, and the YouSave Service may be viewed and hosted anywhere in the world, including countries that may not have laws of general applicability regulating the use and transfer of such data. To the fullest extent allowed by applicable law, by using the YouSave Service and submitting such information on it, you voluntarily consent to the trans-border transfer and hosting of such information. To the fullest extent allowed by applicable law, if you are a User accessing the YouSave Service from a jurisdiction with laws or regulations governing personal data collection, use, and disclosure that differ from those of the United States, please be advised that all aspects of the YouSave Service are governed by the internal laws of the United States and the State of California, USA, regardless of your location.`,
                  },
                  {
                    id: 11,
                    title: "EU-U.S. Privacy Shield Framework",
                    content: `While we acknowledge that the EU-US Privacy Shield Framework as set forth by the US Department of Commerce regarding the collection, use, and retention of personal information from European Union member countries may no longer be a valid transfer mechanism for data transfers to the European Economic Area, we nevertheless comply with the principles contained therein as additional measures to protect our users’ privacy. We have certified that YouSave adheres to the Privacy Shield Principles of Notice, Choice, Accountability for Onward Transfer, Security, Data Integrity and Purpose Limitation, Access, and Recourse, Enforcement and Liability. If there is any conflict between the policies in this Privacy Policy and the Privacy Shield Principles, the more restrictive policy shall govern. To learn more about the Privacy Shield Program, and to view our certification page, please visit https://www.privacyshield.gov/ . In compliance with the EU-US Privacy Shield Principles, we commit to resolve complaints about your privacy and our collection or use of your personal information. European Union individuals with inquiries or complaints regarding this privacy policy should first contact us at yousave@yousave.ai We have further committed to cooperate with EU Data Protection Authorities (DPAs) with regard to unresolved Privacy Shield complaints. If you do not receive timely acknowledgment of your complaint from us, or if we have not addressed your complaint to your satisfaction, please contact the EU DPAs for more information or to file a complaint. The services of EU DPAs are provided at no cost to you. As further explained in the Privacy Shield Principles, a binding arbitration option will also be made available to you in order to address residual complaints that are not resolved by other means set forth above. In cases of onward transfer to third parties of Personal Data received pursuant to the EU-U.S. Privacy Shield, YouSave is potentially liable.`,
                  },
                  {
                    id: 12,
                    title: "California Privacy Rights",
                    content: `YouSave complies with the California Consumer Privacy Act (referred to in this Privacy Policy as “CCPA”) as amended by the California Privacy Rights Act (“CPRA”) as set forth by the State of California. If the CCPA applies to your personal information this Privacy Policy provides you with information regarding how to receive information about our privacy practices, as well as request access to, and deletion of your personal information. YouSave does not sell the personal information we collect. We only share your personal information as described in this Privacy Policy. Please note that we do use third-party cookies. California consumers may make a request pursuant to their rights under the CCPA by contacting yousave@yousave.ai. Upon receiving a request, we will verify your request using the information associated with the YouSave Services, including your email address. Government identification may be required. Consumer can also designate an authorized agent to exercise these rights on the consumer’s behalf.`,
                  },
                  {
                    id: 13,
                    title:
                      "What Choices do I have regarding the Collection, Disclosure and Distribution of Personally Identifiable Information?",
                    content: `Except as otherwise described in this Privacy Policy or in the Data Protection Addendum, we will only use personally identifiable information for the purposes described above, or as otherwise disclosed at the time we request such information from you. You must "opt in" and give us permission to use your personally identifiable information for any other purpose. You may also change your preference and "opt out" of receiving certain marketing communications from us by clicking the unsubscribe link included at the bottom of all such communications, or by contacting us via email.`,
                  },
                  {
                    id: 14,
                    title: "Whom do I Contact if I have any Privacy Questions?",
                    content: `If you have any questions or comments about this Privacy Policy or feel that we are not abiding by the terms of this Privacy Policy, please contact our Privacy Agent in any of the following ways: By email: yousave@yousave.ai Subject to the next paragraph, we ask that you not send or disclose to us any sensitive personal data (e.g., social security numbers, information related to racial or ethnic origin, political opinions, religion or other beliefs, health, biometrics or genetic characteristics, criminal background or trade union membership) on or through the YouSave Services or otherwise. If you send or disclose any sensitive personal data to us when you submit user-generated content to the YouSave Services, you consent to our processing and use of such sensitive personal data in accordance with this policy. If you do not consent to our processing and use of such sensitive personal data, you must not submit such user generated content to our platform.`,
                  },
                ].map((item) => (
                  <div key={item.id} className="mb-6">
                    <h2
                      id={item.id}
                      className="text-xl text-primary font-bold mb-2"
                    >
                      {item.title}
                    </h2>
                    <p className="text-base">{item.content}</p>
                  </div>
                ))}

                <div className="mb-6">
                  <b>
                    By using the YouSave Service, you signify your acceptance of
                    this Privacy Policy. If you do not agree to this Privacy
                    Policy, you should not use the YouSave Service. Continued
                    use of the YouSave Service following the posting of changes
                    to this Privacy Policy that do not significantly affect the
                    use or disclosure of your personally identifiable
                    information will mean that you accept those changes.
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
