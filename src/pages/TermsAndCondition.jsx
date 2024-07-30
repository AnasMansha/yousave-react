import React from "react";
import Header from "components/common/Header";
import Scroller from "components/common/Scroller";
const TermsAndCondition = () => {
  const handleScroll = (index) => {
    const element = document.getElementById(`${index + 1}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Scroller />
      <Header />
      <section className="pt-12 pb-20 font-poppins">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full">
              <h3 className="text-2xl md:text-5xl  text-center pb-10 font-medium">
                Terms and Condition(s)
              </h3>
            </div>

            <div className="w-full md:w-1/3 p-8">
              {/* <div className="text-justify">
              <p className="mb-5">
              These Terms of Service (“Terms”) and all Policies listed on YouSave govern and apply to your use of the free and paid services, software and websites (the “Service”) provided by YouSave (“YouSave”, “we”, “our”, etc.), and any data, text, files, information, usernames, images, graphics, photos, profiles, audio and video clips, sounds, musical works, works of authorship, applications, links, created tasks and associated information, text, files and other content or materials (together, the “Content”) uploaded, downloaded, or appearing on our websites or applications. Our Privacy Policy explains the way we collect and use your information. By using the Service, you agree to be bound by these Terms and our Privacy Policy. If you’re using our Service on behalf of an organization or entity (“Organization”), then you are agreeing to these Terms on behalf of that Organization and you represent and warrant that you have the authority to bind the Organization to these Terms. In that case, “you” and “your” refers to that Organization. Our Terms and Privacy Policy affect your legal rights and obligations. If you do not agree to be bound by all of these, do not access or use our Service.
              </p>
              <p>
                <b>
                ARBITRATION NOTICE: UNLESS YOU OPT-OUT AND EXCEPT FOR CERTAIN TYPES OF DISPUTES DESCRIBED IN THE ARBITRATION SECTION BELOW, YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
                </b> 
              </p>
            </div> */}

              <div className="mt-6">
                {[
                  "Your User Account and Content",
                  "Your Use of Our Service",
                  "General Conditions",
                  "Rights",
                  "Reporting Copyright and Other IP Violations",
                  "Disclaimer of Warranties",
                  "License Limitations",
                  "Limitation of Liability; Waiver",
                  "Indemnificatio",
                  "Arbitratio",
                  "Time Limitation on Claims",
                  "Governing Law & Venu",
                  "Termination",
                  "Severability and No Waiver",
                  "Entire Agreement",
                  "Territorial Restrictions",
                  "WEBSITE DISCLAIMER",
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
                  These Terms of Service (“Terms”) and all Policies listed on
                  YouSave govern and apply to your use of the free and paid
                  services, software and websites (the “Service”) provided by
                  YouSave (“YouSave”, “we”, “our”, etc.), and any data, text,
                  files, information, usernames, images, graphics, photos,
                  profiles, audio and video clips, sounds, musical works, works
                  of authorship, applications, links, created tasks and
                  associated information, text, files and other content or
                  materials (together, the “Content”) uploaded, downloaded, or
                  appearing on our websites or applications. Our Privacy Policy
                  explains the way we collect and use your information. By using
                  the Service, you agree to be bound by these Terms and our
                  Privacy Policy. If you’re using our Service on behalf of an
                  organization or entity (“Organization”), then you are agreeing
                  to these Terms on behalf of that Organization and you
                  represent and warrant that you have the authority to bind the
                  Organization to these Terms. In that case, “you” and “your”
                  refers to that Organization. Our Terms and Privacy Policy
                  affect your legal rights and obligations. If you do not agree
                  to be bound by all of these, do not access or use our Service.
                </p>
                <p>
                  <b>
                    ARBITRATION NOTICE: UNLESS YOU OPT-OUT AND EXCEPT FOR
                    CERTAIN TYPES OF DISPUTES DESCRIBED IN THE ARBITRATION
                    SECTION BELOW, YOU AGREE THAT DISPUTES BETWEEN YOU AND US
                    WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU
                    WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR
                    CLASS-WIDE ARBITRATION.
                  </b>
                </p>
              </div>

              <div className="text-justify">
                {[
                  {
                    id: 1,
                    title: "Your User Account and Content",
                    content: `
                You must provide accurate information when you create your YouSave account.
                You are responsible for safeguarding the password and for all activities that occur under your account. You should notify us immediately if you become aware of any breach of security or unauthorized use of your account.
                You may never use another user’s account without permission.
                You may not disassemble, decompile, or reverse engineer the Service or attempt or assist anyone else to do so, unless such restriction is prohibited by law.
                Your account must be registered by a human. Accounts registered by "bots" or other automated methods are not permitted. Additionally, you must be 13 years of age or older.
                You may not use the Service for any illegal or unauthorized purpose. You agree to comply with all laws, rules, and regulations (for example, federal, state, local and provincial) applicable to your use of the Service and your Content (defined below), including but not limited to, copyright laws.
                In the event you have a paid account, fees are non-refundable except as required by law or in the event that you cancel your account during the 30-day money back guarantee period. You will pay all applicable fees when due and, if such fees are being paid via credit card or other electronic means, you authorize us to charge such fees using your selected payment method. By default, customer accounts are set to auto-renew and we may automatically charge you for such renewal on or after the renewal date associated with your account unless you have cancelled the Service prior to its renewal date. We may revise fee rates for the Service from time to time and will provide you with email notice of any changes in fees at least thirty (30) days prior to your Service renewal date. You are responsible for providing complete and accurate billing information to YouSave. We may suspend or terminate your use of the Service if fees become past due. You are responsible for all taxes (excluding taxes on our net income), and we will charge tax if required to do so by law. 
                
                If you require the use of a purchase order or purchase order number, you (a) must provide the purchase order number at the time of purchase; and (b) agree that any terms and conditions on your purchase order will not apply and are null and void.
                For paid accounts, we provide a satisfaction guarantee for all services. If you aren't satisfied for any reason, simply contact us within 30 days, and we'll be happy to issue a full refund. Kindly note, however, that we reserve the right to revoke refund privileges (on an individual basis) if we determine abuse of this policy has occurred.                            
            `,
                  },
                  {
                    id: 2,
                    title: "Your Use of Our Service",
                    content: `
                You must not change, modify, adapt, or alter the Service or change, modify, or alter another website so as to falsely imply that it is associated with the Service or with us.
                You must not access our private API by means other than those expressly permitted by us.
                You must not interfere or disrupt the Service or servers or networks connected to the Service, including by transmitting any worms, viruses, spyware, malware, or any other code of a destructive or disruptive nature. You may not inject content or code or otherwise alter or interfere with the way any our page is rendered or displayed in a user's browser or device.
                You must not attempt to restrict another user from using or enjoying the Service and you must not encourage or facilitate violations of these Terms or any of our other terms.
                As part of the Service, we may provide downloadable client software (the “Software”) for your use in connection with the Service. This Software may update automatically and if such Software is designed for use on a specific mobile or desktop operating system, then a compatible system is required for use. So long as you comply with these Terms, we grant you a limited, nonexclusive, nontransferable, revocable license to use the Software, solely to access the Service; provided, however, that this license does not constitute a sale of the Software or any copy thereof, and as between you and us, we retain all right, title and interest in the Software. You agree that you will not copy, reproduce, republish, frame, download, transmit, modify, display, reverse engineer, sell, or participate in any sale of, rent, lease, loan, assign, distribute, license, sublicense, or exploit in any way, in whole or in part, Our Content, the Services or any related software, except as expressly stated in these Terms.
                Violation of these Terms may, in our sole discretion, result in termination of your account. Furthermore, we reserve the right to investigate and prosecute violations of any of these Terms to the fullest extent of the law. We may involve and cooperate with law enforcement authorities in prosecuting Users who violate the Terms. You acknowledge that we have no obligation to prescreen or monitor your access to or use of our Service or any information, materials or other content provided or made available through our Service, but has the right to do so. You hereby agree that we may, in the exercise of our sole discretion, remove or delete any data, accounts or other content that violates these Terms or that is otherwise objectionable. 

                If you elect to utilize any third party application in connection with your use of the Service, by doing so you are consenting to your Content being shared with such third party application. To understand how such third party application provider utilizes your Content and other information, you should review their privacy policy.

                Upon termination, all licenses and other rights granted to you in these Terms will immediately cease. We reserve the right, in our sole discretion, to change these Terms and/or our Services offered from time to time (“Updated Terms”). Unless we make a change for legal or administrative reasons, we will provide reasonable advance notice before the Updated Terms become effective. You agree that we may notify you of the Updated Terms by posting them on the Service, and that your use of the Service after the effective date of the Updated Terms (or engaging in such other conduct as we may reasonably specify) constitutes your agreement to the Updated Terms. Therefore, you should review these Terms and any Updated Terms before using the Service. The Updated Terms will be effective as of the time of posting, or such later date as may be specified in the Updated Terms, and will apply to your use of the Service from that point forward. These Terms will govern any disputes arising before the effective date of the Updated Terms. We reserve the right to refuse access to the Service to anyone for any reason at any time. You hereby authorize us, directly or through third parties, to make any inquiries we consider necessary to validate your identity and/or authenticate your identity and account information. This may include asking you for further information and/or documentation about your account usage or identity, or requiring you to take steps to confirm ownership of your email address, wireless/cellular telephone number or financial instruments, and verifying your information against third party databases or through other sources. This process is for internal verification purposes. You further understand that we may charge a fee for this verification process. We may, but have no obligation to, remove, edit, block, and/or monitor Content or accounts containing Content that we determine in our sole discretion violates these Terms. You agree that you are responsible for all data charges you incur through use of the Service. By creating an Account, you agree that the Services may send you informational and promotional text (SMS) messages as part of the normal business operation of your use of the Services. You may opt-out of receiving text (SMS) messages from us at any time by texting the word STOP to (650) 203-2403 from the mobile device receiving the messages. You acknowledge that opting out of receiving text (SMS) messages may impact your use of the Services. We prohibit crawling, scraping, caching or otherwise accessing any content on the Service via automated means (except as may be the result of standard search engine protocols or technologies used by a search engine with our express consent). In some cases, it is necessary for our employees, contractors, or agents to access your account and content in order to diagnose a problem. When you contact our support team, it is implied that you are allowing us to access your account if necessary, in order to be helpful. If you wish to receive assistance without granting permission to your account, please specify as much in your communication with our support team and those requests will be honored to the extent possible. In connection with providing you the Service, we may transfer, store and process your Content in the U.S. or in any other country in which we or our agents maintain facilities. By using the Service, you consent to this transfer, processing and storage of your Content.`,
                  },
                  {
                    id: 3,
                    title: "Rights",
                    content: `Ownership. For purposes of these Terms: (i) "Content" means any data, text, files, information, usernames, images, graphics, photos, profiles, audio and video clips, sounds, musical works, works of authorship, applications, links, created tasks and associated information, text, files and other content or materials; and (ii) "User Content" means any Content that Account holders (including you) provide to be made available through the Services. Content includes without limitation User Content. a. Content Ownership of the Content We Make Unless otherwise stated, all materials contained on or within the Services, including, but not limited to, text, graphics, images, code, illustrations, designs, icons, photographs, video clips, and written and other materials (collectively, "YouSave Content"), as well as their selection and arrangement, are protected by copyright, trademark, trade dress, patent, and/or other intellectual property laws, and unauthorized use of YouSave Content may violate such laws and these Terms. Except as expressly provided in these Terms, we do not grant any express or implied rights to use YouSave Content. You agree that you will not copy, reproduce, republish, frame, download, transmit, modify, display, reverse engineer, sell, or participate in any sale of, rent, lease, loan, assign, distribute, license, sublicense, or exploit in any way, in whole or in part, YouSave Content, the Services or any related software or Client Software as defined above, except as expressly stated in these Terms. You agree not to remove, alter, or obscure any copyright, trademark, service mark, or other proprietary rights notices incorporated in or accompanying the Services or Content. You acknowledge that the Services and Content are protected by copyright, trademark, and other laws of the United States and foreign countries. b. Rights in User Content We claim no ownership rights over the Content submitted or created exclusively by you in your YouSave Service account. Any Content that is yours remains yours. These Terms of Service do not grant us any licenses or rights to your Content except for the limited rights needed for us to provide the YouSave Service to you. Notwithstanding the foregoing, we may access Content to determine how we can improve our Service, and to determine customer satisfaction. Similarly, any reporting data we collect from your use of the YouSave Service remains yours. By using the YouSave Service you agree that we can use this data to provide the YouSave Service to you, and you also agree that as long as the data is anonymized and does not identify you, we can combine this data with the anonymized data of other companies to provide benchmarking, public reports or to otherwise use it to provide the YouSave Service. c. Alerts and Notification As part of the Services we provide, you may (if enabled) receive push notifications, text messages, alerts, emails, or other types of messages directly sent to you outside or inside the App ("Notifications"). You have control over the Notifications settings, and can opt in or out of these Notifications through the Services (with the possible exception of infrequent, important service announcements and administrative messages). Some of the Service may be supported by advertising revenue and may display advertisements and promotions, and you hereby agree that we may place such advertising and promotions on the Service or on, about, or in conjunction with your Content. The manner, mode and extent of such advertising and promotions are subject to change without specific notice to you. You acknowledge that we may not always identify paid services, sponsored content, or commercial communications as such. You represent and warrant that: (i) you own the Content posted by you on or through the Service or otherwise have the right to grant the rights and licenses set forth in these Terms of Use; (ii) the posting and use of your Content on or through the Service does not violate, misappropriate, or infringe on the rights of any third party, including, without limitation, privacy rights, publicity rights, copyrights, trademark, and/or other intellectual property rights; (iii) you agree to pay for all royalties, fees, and any other monies owed by reason of Content you post on or through the Service; and (iv) you have the legal right and capacity to enter into these Terms of Use in your jurisdiction. The YouSave Inc. name and logo are our trademarks, and may not be copied, imitated or used, in whole or in part, without our prior written permission. In addition, all page headers, custom graphics, button icons, and scripts are our service marks, trademarks, and/or trade dress, and may not be copied, imitated or used, in whole or in part, without prior written permission from us. Although it is our intention for the Service to be available as much as possible, there will be occasions when the Service may be interrupted, including, without limitation, for scheduled maintenance or upgrades, for emergency repairs, for unscheduled downtime, for system and server failures, or due to failure of telecommunications links and/or equipment. Consequently, we encourage you to maintain your own backup of your Content. In other words, we are not a backup service and you agree that you will not rely on the Service for the purposes of Content backup or storage. We will not be liable to you for any modification, suspension, or discontinuation of the Services, or the loss of any Content. You also acknowledge that the Internet may be subject to breaches of security and that the submission of Content or other information may not be secure. You agree that we are not responsible for, and do not endorse, Content posted within the Service. We do not have any obligation to prescreen, monitor, edit, or remove any Content. If your Content violates these Terms, you may bear legal responsibility for that Content. Except as otherwise described in the Service's Privacy Policy , as between you and us, any Content will be non-confidential and nonproprietary and we will not be liable for any use or disclosure of Content. You acknowledge and agree that your relationship with us is not a confidential, fiduciary, or other type of special relationship, and that your decision to submit any Content does not place us in a position that is any different from the position held by members of the general public, including with regard to your Content. None of your Content will be subject to any obligation of confidence on our part, and we will not be liable for any use or disclosure of any Content you provide. Subject to your agreement and continuing compliance with these Terms and any of our other relevant policies, we grant you a non-exclusive, non-transferable, revocable limited license to use the Service solely for its intended purposes. You agree not to use the Service for any other purpose.

                This license is revocable at any time. This license is subject to these Terms and does not include: d. The distribution, public performance, or public display of Our Content; e. Modifying or otherwise making any derivative uses of the Services or Our Content, or any portion thereof; f. Use of any scraping, data mining, robots, or similar data gathering or extraction methods; g. Downloading (other than page caching) any portion of the Services, Our Content, or any information contained therein, except as expressly permitted on the Services; h. Accessing our API with an unauthorized or third-party client; and i. Any use of the Services or Our Content other than for their intended purposes. j. Any use of the Services or Our Content other than as specifically authorized in these Terms, without our prior written permission, is strictly prohibited and will terminate the license to use our Service and Site granted in these Terms. It is our policy not to accept or consider content, information, ideas, suggestions, or other materials other than those we have specifically requested and to which certain specific terms, conditions and requirements may apply. This is to avoid any misunderstandings if your ideas are similar to those we have developed or are developing independently. If, despite our policy, you choose to send us content, information, ideas, suggestions, or other materials, you further agree to the following:

                For all reviews, comments, feedback, postcards, suggestions, ideas, and other submissions disclosed, submitted, or offered to us via our Service, our sites, by e-mail or telephone, by mail, or otherwise disclosed, submitted or offered in connection with your use of this Service (collectively, “User Submissions”) you grant us a royalty-free, irrevocable, transferable right and license to use the User Submissions however we desire, including without limitation, to copy, modify, delete in its entirety, adapt, publish, translate, create derivative works from, and/or sell and/or distribute such User Submissions and/or incorporate such User Submissions into any form, medium, or technology throughout the world. We will be entitled to use, reproduce, disclose, modify, adapt, create derivative works from, publish, display, and distribute any User Submissions you submit for any purpose whatsoever, without restriction and without compensating you in any way. We are and shall be under no obligation (1) to maintain any User Submissions in confidence; (2) to pay to user any compensation for any User Submissions; or (3) to respond to any User Submissions. You agree that any User Submissions submitted by you to us will not violate the right of any third party, including without limitation, copyright, trademark, privacy, or other personal or proprietary right(s), and will not cause injury to any person or entity. You further agree that no User Submissions submitted by you to us will be or contain libelous or otherwise unlawful, threatening, abusive or obscene material, or contain software viruses, political campaigning, commercial solicitation, chain letters, mass mailings or any form of “spam”. By using this Service, you agree to the above terms regarding User Submissions. Please note that User Submissions shall not under any circumstances be considered User Content as defined in paragraph 1, subsection b. in this section.`,
                  },
                  {
                    id: 4,
                    title: "Reporting Copyright and Other IP Violations",
                    content: `It is our policy to respond to notices of alleged copyright infringement that comply with the Digital Millennium Copyright Act ("DMCA"). If you believe your work has been copied in a way that constitutes copyright infringement, please provide a notice containing all of the following information to our Copyright Agent: a. An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest; b. A description of the copyrighted work that you claim has been infringed; c. A description of where the material that you claim is infringing is located on our site(s); d. Your address, telephone number, and e-mail address; e. A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law; and f. A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf. We reserve the right to remove Content alleged to be infringing without prior notice and at our sole discretion. In appropriate circumstances, we will also terminate a user’s account if the user is determined to be a repeat infringer.`,
                  },
                  {
                    id: 5,
                    title: "Disclamer of Warranties",
                    content: `THE SERVICE, INCLUDING, WITHOUT LIMITATION, OUR CONTENT, IS PROVIDED ON AN "AS IS", "AS AVAILABLE", AND "WITH ALL FAULTS" BASIS. TO THE FULLEST EXTENT PERMISSIBLE BY LAW, NEITHER WE NOR ANY OF OUR EMPLOYEES, MANAGERS, OFFICERS, CONTRACTORS, SUPPLIERS, LICENSORS, OR AGENTS (COLLECTIVELY, THE "YouSave PARTIES") MAKE ANY REPRESENTATIONS OR WARRANTIES OR ENDORSEMENTS OF ANY KIND WHATSOEVER, EXPRESS OR IMPLIED, AS TO: (A) THE SERVICE; (B) OUR CONTENT; (C) USER CONTENT; OR (D) SECURITY ASSOCIATED WITH THE TRANSMISSION OF INFORMATION TO US OR VIA THE SERVICE. IN ADDITION, THE YouSave PARTIES HEREBY DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, TITLE, CUSTOM, TRADE, QUIET ENJOYMENT, SYSTEM INTEGRATION, AND FREEDOM FROM COMPUTER VIRUS. THE YouSave PARTIES DO NOT REPRESENT OR WARRANT THAT THE SERVICE WILL BE ERROR-FREE OR UNINTERRUPTED; THAT DEFECTS WILL BE CORRECTED; OR THAT THE SERVICE OR THE SERVER THAT MAKES THE SERVICE AVAILABLE IS FREE FROM ANY HARMFUL COMPONENTS, INCLUDING, WITHOUT LIMITATION, VIRUSES AND SECURITY BREACHES OF ANY KIND. THE YouSave PARTIES DO NOT MAKE ANY REPRESENTATIONS OR WARRANTIES THAT THE INFORMATION (INCLUDING ANY INSTRUCTIONS) ON THE SERVICE IS ACCURATE, COMPLETE, OR USEFUL. YOU ACKNOWLEDGE THAT YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE YouSave PARTIES DO NOT WARRANT THAT YOUR USE OF THE SERVICE IS LAWFUL IN ANY PARTICULAR JURISDICTION, AND THE YouSave PARTIES SPECIFICALLY DISCLAIM SUCH WARRANTIES. SOME JURISDICTIONS LIMIT OR DO NOT ALLOW THE DISCLAIMER OF IMPLIED OR OTHER WARRANTIES SO THE ABOVE DISCLAIMER MAY NOT APPLY TO YOU TO THE EXTENT SUCH JURISDICTION'S LAW IS APPLICABLE TO YOU AND THESE TERMS OF USE. BY ACCESSING OR USING THE SERVICE YOU REPRESENT AND WARRANT THAT YOUR ACTIVITIES ARE LAWFUL IN EVERY JURISDICTION WHERE YOU ACCESS OR USE THE SERVICE. THE YouSave PARTIES DO NOT ENDORSE CONTENT AND SPECIFICALLY DISCLAIM ANY RESPONSIBILITY OR LIABILITY TO ANY PERSON OR ENTITY FOR ANY LOSS, DAMAGE (WHETHER ACTUAL, CONSEQUENTIAL, PUNITIVE OR OTHERWISE), INJURY, CLAIM, LIABILITY, OR OTHER CAUSE OF ANY KIND OR CHARACTER BASED UPON OR RESULTING FROM ANY CONTENT.`,
                  },
                  {
                    id: 6,
                    title: "How Long will Data be Stored?",
                    content: `We will only retain your personal data as long as reasonably required for you to use the Site/Application(s) and/or to provide you with the Services unless a longer retention period is required or permitted by law (for example, for regulatory purposes).`,
                  },
                  {
                    id: 7,
                    title: "License Limitations",
                    content: `ANY ATTEMPT BY YOU TO DISRUPT OR INTERFERE WITH THE SERVICE INCLUDING UNDERMINING OR MANIPULATING THE LEGITIMATE OPERATION OF ANY OF OUR SITES OR SERVICE IS A VIOLATION OF OUR POLICY AND MAY BE A VIOLATION OF CRIMINAL AND CIVIL LAWS. WITHOUT LIMITING ANY OTHER REMEDIES, WE MAY LIMIT, SUSPEND, TERMINATE, MODIFY, OR DELETE ACCOUNTS OR ACCESS TO THE SERVICE OR PORTIONS THEREOF IF YOU ARE, OR WE SUSPECT THAT YOU ARE, FAILING TO COMPLY WITH ANY TERMS OF SERVICE OR FOR ANY ACTUAL OR SUSPECTED ILLEGAL OR IMPROPER USE OF THE SERVICE, WITH OR WITHOUT NOTICE TO YOU. YOU CAN LOSE YOUR ACCOUNT AND ANY USER CONTENT AS A RESULT OF ACCOUNT TERMINATION OR LIMITATION, AS WELL AS ANY BENEFITS, PRIVILEGES, EARNED ITEMS, AND PURCHASED ITEMS ASSOCIATED WITH YOUR USE OF THE SERVICE, AND WE ARE UNDER NO OBLIGATION TO COMPENSATE YOU FOR ANY SUCH LOSSES OR RESULTS. WITHOUT LIMITING OUR OTHER REMEDIES, WE MAY LIMIT, SUSPEND, OR TERMINATE THE SERVICE AND USER ACCOUNTS OR PORTIONS THEREOF, PROHIBIT ACCESS TO OUR SERVICES AND SITES, AND THEIR CONTENT, AND TOOLS, DELAY OR REMOVE HOSTED CONTENT, AND TAKE TECHNICAL AND LEGAL STEPS TO PREVENT USERS FROM ACCESSING THE SERVICE IF WE BELIEVE THAT THEY ARE CREATING RISK OR POSSIBLE LEGAL LIABILITIES, INFRINGING THE INTELLECTUAL PROPERTY RIGHTS OF THIRD PARTIES, OR ACTING INCONSISTENTLY WITH THE LETTER OR SPIRIT OF OUR TERMS OR POLICIES. ADDITIONALLY, WE MAY, IN APPROPRIATE CIRCUMSTANCES AND AT OUR SOLE DISCRETION, SUSPEND OR TERMINATE ACCOUNTS OF USERS WHO MAY BE REPEAT INFRINGERS OF THIRD PARTY INTELLECTUAL PROPERTY RIGHTS. We reserve the right to stop offering and/or supporting the Service or a particular part of the Service at any time either permanently or temporarily. In such event, we shall not be required to provide refunds, benefits or other compensation to users in connection with such discontinued elements of the Service.
                `,
                  },
                  {
                    id: 8,
                    title: "Limitation of Liability: Waiver",
                    content: `UNDER NO CIRCUMSTANCES WILL THE YouSave PARTIES BE LIABLE TO YOU FOR ANY LOSS OR DAMAGES OF ANY KIND (INCLUDING, WITHOUT LIMITATION, FOR ANY DIRECT, INDIRECT, ECONOMIC, EXEMPLARY, SPECIAL, PUNITIVE, INCIDENTAL, OR CONSEQUENTIAL LOSSES OR DAMAGES) THAT ARE DIRECTLY OR INDIRECTLY RELATED TO: (A) THE SERVICE; (B) OUR CONTENT; (C) USER CONTENT; (D) YOUR USE OF, INABILITY TO USE, OR THE PERFORMANCE OF THE SERVICE; (E) ANY ACTION TAKEN IN CONNECTION WITH AN INVESTIGATION BY THE YouSave PARTIES OR LAW ENFORCEMENT AUTHORITIES REGARDING YOUR OR ANY OTHER PARTY'S USE OF THE SERVICE; (F) ANY ACTION TAKEN IN CONNECTION WITH COPYRIGHT OR OTHER INTELLECTUAL PROPERTY OWNERS; (G) ANY ERRORS OR OMISSIONS IN THE SERVICE'S OPERATION; OR (H) ANY DAMAGE TO ANY USER'S COMPUTER, MOBILE DEVICE, OR OTHER EQUIPMENT OR TECHNOLOGY INCLUDING, WITHOUT LIMITATION, DAMAGE FROM ANY SECURITY BREACH OR FROM ANY VIRUS, BUGS, TAMPERING, FRAUD, ERROR, OMISSION, INTERRUPTION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMPUTER LINE OR NETWORK FAILURE OR ANY OTHER TECHNICAL OR OTHER MALFUNCTION, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOST PROFITS, LOSS OF GOODWILL, LOSS OF DATA, WORK STOPPAGE, ACCURACY OF RESULTS, OR COMPUTER FAILURE OR MALFUNCTION, EVEN IF FORESEEABLE OR EVEN IF THE YouSave PARTIES HAVE BEEN ADVISED OF OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, STRICT LIABILITY OR TORT (INCLUDING, WITHOUT LIMITATION, WHETHER CAUSED IN WHOLE OR IN PART BY NEGLIGENCE, ACTS OF GOD, TELECOMMUNICATIONS FAILURE, OR THEFT OR DESTRUCTION OF THE SERVICE). IN NO EVENT WILL THE YouSave PARTIES BE LIABLE TO YOU OR ANYONE ELSE FOR LOSS, DAMAGE OR INJURY, INCLUDING, WITHOUT LIMITATION, DEATH OR PERSONAL INJURY. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU. IN NO EVENT WILL THE YouSave PARTIES TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES OR CAUSES OR ACTION EXCEED ONE HUNDRED UNITED STATES DOLLARS ($100.00). YOU AGREE THAT IN THE EVENT YOU INCUR ANY DAMAGES, LOSSES, OR INJURIES THAT ARISE OUT OF OUR ACTS OR OMISSIONS, THE DAMAGES, IF ANY, CAUSED TO YOU ARE NOT IRREPARABLE OR SUFFICIENT TO ENTITLE YOU TO AN INJUNCTION PREVENTING ANY EXPLOITATION OF ANY WEB SITE, SERVICE, PROPERTY, PRODUCT, OR OTHER CONTENT OWNED OR CONTROLLED BY THE YouSave PARTIES, AND YOU WILL HAVE NO RIGHTS TO ENJOIN OR RESTRAIN THE DEVELOPMENT, PRODUCTION, DISTRIBUTION, ADVERTISING, EXHIBITION, OR EXPLOITATION OF ANY WEB SITE, PROPERTY, PRODUCT, SERVICE, OR OTHER CONTENT OWNED OR CONTROLLED BY THE YouSave PARTIES. BY ACCESSING THE SERVICE, YOU UNDERSTAND THAT YOU MAY BE WAIVING RIGHTS WITH RESPECT TO CLAIMS THAT ARE AT THIS TIME UNKNOWN OR UNSUSPECTED, AND IN ACCORDANCE WITH SUCH WAIVER, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND, AND HEREBY EXPRESSLY WAIVE, THE BENEFITS OF SECTION 1542 OF THE CIVIL CODE OF CALIFORNIA, AND ANY SIMILAR LAW OF ANY STATE OR TERRITORY, WHICH PROVIDES AS FOLLOWS: "A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE DEBTOR." WE ARE NOT RESPONSIBLE FOR THE ACTIONS, CONTENT, INFORMATION, OR DATA OF THIRD PARTIES, AND YOU RELEASE THE YouSave PARTIES FROM ANY CLAIMS AND DAMAGES, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED WITH ANY CLAIM YOU HAVE AGAINST ANY SUCH THIRD PARTIES.
`,
                  },
                  {
                    id: 9,
                    title: "Indemnification",
                    content: `You (and also any third party for whom you operate an account or activity on the Service) agree to defend (at our request), indemnify, and hold the YouSave Parties harmless from and against any claims, liabilities, damages, losses, and expenses, including without limitation, reasonable attorney's fees and costs, arising out of or in any way connected with any of the following (including as a result of your direct activities on the Service or those conducted on your behalf): (i) your Content or your access to or use of the Service; (ii) your breach or alleged breach of these Terms; (iii) your violation of any third-party right, including without limitation, any intellectual property right, publicity, confidentiality, property, or privacy right; (iv) your violation of any laws, rules, regulations, codes, statutes, ordinances, or orders of any governmental and quasi-governmental authorities, including, without limitation, all regulatory, administrative and legislative authorities; or (v) any misrepresentation made by you. You will cooperate as fully required by us in the defense of any claim. We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, and you will not in any event settle any claim without our prior written consent. Notwithstanding the foregoing, you agree that the cost of any such defense will be at your sole and exclusive expense.                `,
                  },

                  {
                    id: 10,
                    title: "Arbitration",
                    content: `Except if you opt-out or for disputes relating to your or our intellectual property (such as trademarks, trade dress, domain names, trade secrets, copyrights, and patents ("Excluded Disputes"), you agree that all disputes between you and us (whether or not such dispute involves a third party) with regard to your relationship with us, including without limitation disputes related to these Terms, your use of the Service, and/or rights of privacy and/or publicity, will be resolved by binding, individual arbitration under the American Arbitration Association's rules for arbitration of consumer-related disputes and you and we hereby expressly waive trial by jury. You may bring claims only on your own behalf. Neither you nor we will participate in a class action or class-wide arbitration for any claims covered by this agreement. You also agree not to participate in claims brought by a private attorney, in a general or representative capacity, or consolidated claims involving another person's account, if we are a party to the proceeding. This dispute resolution provision will be governed by the Federal Arbitration Act. In the event the American Arbitration Association is unwilling or unable to set a hearing date within one hundred and sixty (160) days of filing the case, then either we or you can elect to have the arbitration administered instead by the Judicial Arbitration and Mediation Services. Judgment on the award rendered by the arbitrator may be entered in any court having competent jurisdiction. Any provision of applicable law notwithstanding, the arbitrator will not have authority to award damages, remedies or awards that conflict with these Terms. You may opt out of this agreement to arbitrate, as specified above. If you do so, neither you nor we can require the other to participate in an arbitration proceeding. To opt out, you must notify us in writing within 30 days of the date that you first became subject to this arbitration provision. You must include your name and residence address, the phone number and username that you use for your account, and a clear statement that you want to opt out of this arbitration agreement.

                If the prohibition against class actions and other claims brought on behalf of third parties contained above is found to be unenforceable, then all of the preceding language in this Arbitration section will be null and void. This arbitration agreement will survive the termination of your relationship with us.`,
                  },
                  {
                    id: 11,
                    title: "Time Limitation on Claims",
                    content: `You agree that any claim you may have arising out of or related to your relationship with us must be filed within one year after such claim arose; otherwise, your claim is permanently barred.

                `,
                  },
                  {
                    id: 12,
                    title: "Governing Law & Venue",
                    content: `These Terms are governed by and construed in accordance with the laws of the State of California, without giving effect to any principles of conflicts of law AND WILL SPECIFICALLY NOT BE GOVERNED BY THE UNITED NATIONS CONVENTIONS ON CONTRACTS FOR THE INTERNATIONAL SALE OF GOODS, IF OTHERWISE APPLICABLE. For any action at law or in equity relating to the arbitration provision of these Terms, the Excluded Disputes or if you opt out of the agreement to arbitrate, you agree to resolve any dispute you have with us exclusively in a state or federal court located in San Diego, CA, and to submit to the personal jurisdiction of the courts located in San Diego County for the purpose of litigating all such disputes.`,
                  },
                  {
                    id: 13,
                    title: "Termination",
                    content: `We may terminate this Agreement at any time, with or without notice, for any reason.                `,
                  },

                  {
                    id: 14,
                    title: "Severability and No Waiver",
                    content: `If any provision of these Terms is held to be unlawful, void, or for any reason unenforceable during arbitration or by a court of competent jurisdiction, then that provision will be deemed severable from these Terms and will not affect the validity and enforceability of any remaining provisions. Our failure to insist upon or enforce strict performance of any provision of these Terms will not be construed as a waiver of any provision or right. No waiver of any of these Terms will be deemed a further or continuing waiver of such term or condition or any other term or condition.`,
                  },
                  {
                    id: 15,
                    title: "Entire Agreement",
                    content: `If you are using the Service on behalf of a legal entity, you represent that you are authorized to enter into an agreement on behalf of that legal entity. These Terms constitute the entire agreement between you and us and governs your use of the Service, superseding any prior agreements between you and us. You will not assign the Terms or assign any rights or delegate any obligations hereunder, in whole or in part, whether voluntarily or by operation of law, without our prior written consent. Any purported assignment or delegation by you without our appropriate prior written consent will be null and void. We may assign these Terms or any rights hereunder without your consent and the Terms will inure to the benefit of and be enforceable by our successor. Neither the course of conduct between the parties nor trade practice will act to modify the Terms. These Terms do not confer any third-party beneficiary rights.`,
                  },
                  {
                    id: 16,
                    title: "Territorial Restrictions",
                    content: `The information provided within the Service is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. We reserve the right to limit the availability of the Service or any portion of the Service, to any person, geographic area, or jurisdiction, at any time and in our sole discretion, and to limit the quantities of any content, program, product, service, or other feature that we provide. Software related to or made available by the Service may be subject to United States export controls. Thus, no software from the Service may be downloaded, exported, or re-exported: (a) into (or to a national or resident of) any country to which the United States has embargoed goods; or (b) to anyone on the U.S. Treasury Department's list of Specially Designated Nationals or the U.S. Commerce Department's Table of Deny Orders. By downloading any software related to the Service, you represent and warrant that you are not located in, under the control of, or a national or resident of, any such country or on any such list. These Terms of Use were written in English (US). To the extent any translated version of these Terms of Use conflicts with the English version, the English version controls.`,
                  },
                  {
                    id: 17,
                    title: "WEBSITE DISCLAIMER",
                    content: `Last updated April 26, 2024 The information provided by YouSave ("we," "us," or "our") on https://yousave. ai (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK. EXTERNAL LINKS DISCLAIMER The Site may contain (or you may be sent through the Site links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. WE DO NOT WARRANT, ENDORSE. GUARANTEE. OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AFFILIATES DISCLAIMER The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include the following: • eBav Partner Network We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn advertising fees by linking to Amazon com and affiliated websites

                `,
                  },
                ].map((item) => (
                  <div key={item.id} className="mb-6">
                    <h2
                      style={{ color: "#3c1feb" }}
                      id={item.id}
                      className="text-2xl text-primary font-bold mb-2 py-6"
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

export default TermsAndCondition;
