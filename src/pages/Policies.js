import React, { useRef, useEffect } from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Policies() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("#move"),
      {
        opacity: 0,
        y: -340,
      },
      {
        opacity: 1,
        y: -10,
        scrollTrigger: {
          trigger: element.querySelector("#here"),
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("#ma__banner__house"),
      {
        opacity: 1,
        x: 640,
      },
      {
        opacity: 1,
        x: 140,
        scrollTrigger: {
          trigger: element.querySelector("#ma__banner__house__1"),
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={ref} id="web__policy">
      <MDBContainer className="" style={{ marginTop: "200px" }}>
        <MDBRow>
          <MDBCol sm="12" className="text-center mb-3">
            <h1>Website Analytics Policy</h1>
          </MDBCol>
          <MDBCol sm="12">
            <h5>
              BOE Mortgage was founded on principles of trust, integrity and the
              delivery of outstanding service. Therefore, we are very concerned
              with the privacy rights of our online visitors and customers and
              are committed to protecting the information collected about you.
              This website, BOEDallas.com, is owned and operated by Bank of
              England Mortgage, has taken extensive measures to protect the
              confidentiality of your personal information and to protect your
              data from misuse and unauthorized access or disclosure.
              Unfortunately, no data transmission over the Internet can be
              guaranteed to be 100% secure. As a result, although we take great
              measures to protect your information, BOE Mortgage cannot ensure
              or warrant the security of any information you transmit to us, and
              you do so at your own risk. Once we receive your transmission, BOE
              Mortgage takes industry standard efforts to safeguard the
              confidentiality of your information, such as secure, 128 bit
              encryption on our applications. We also restrict internal access
              of stored data to select employees that have been informed of our
              privacy policies. If you have concerns involving the security or
              privacy of your information, you can arrange to talk to one of our
              loan specialists.
            </h5>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" className="text-center mb-3">
            <h1>Information Collected at BOEDallas.com</h1>
          </MDBCol>
          <MDBCol sm="12">
            <h5>
              Personal Information If you submit a mortgage application to BOE
              Mortgage you are required to provide certain information necessary
              to deliver the selected services. In some instances you will only
              provide personal information such as name, address, e-mail
              address, phone number and other contact information. The more
              information you share with BOE Mortgage the more accurately we
              will be able to provide you with information and services you have
              indicated are of interest.
            </h5>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" className="text-center mb-3">
            <h1>Statistical Information</h1>
          </MDBCol>
          <MDBCol sm="12">
            <h5>
              We automatically collect anonymous statistical information
              regarding usage of our Web site. This helps us understand our
              Customers' needs better and improve areas of our services that our
              Customers find valuable. For instance, when you visit
              www.BOEDallas.com, our Web site recognizes the type of browser you
              are using (Firefox, Safari, IE, etc.), the site that linked you to
              our site, the pages you visit at our site, and similar
              information. None of this information identifies you personally.
            </h5>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" className="text-center mb-3">
            <h1>Cookies</h1>
          </MDBCol>
          <MDBCol sm="12">
            <h5>
              Although we believe the use cookies is useful in tracking site
              usage trends and patterns, as while implementing individual user
              preferences, BOEDallas.com does not use cookies at this time. BOE
              Mortgage does use cookies related our search term marketing
              efforts but this does not track any information on you as an
              individual.
            </h5>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" className="text-center mb-3">
            <h1>Use and Disclosure of Information</h1>
          </MDBCol>
          <MDBCol sm="12">
            <h5>
              With your prior consent, we may disclose any information we
              collect, as described above, to BOE Mortgage affiliates or service
              providers to perform a service for us or perform a function on our
              behalf. In cases where we use service providers, we restrict such
              service providers from using your non-public personal information
              except to act on our behalf or as required or permitted by law.
            </h5>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" className="text-center mb-3">
            <h1>Removal of Personal Information</h1>
          </MDBCol>
          <MDBCol sm="12">
            <h5>
              You can request that we purge the entirety of the personal
              information submitted by you through BOEDallas.com from our
              database by providing detailed instructions to BOE Mortgage's
              Privacy Officer (see below). In such cases BOE Mortgage will
              delete all digitally warehoused information you have submitted.
              Please note that BOE Mortgage cannot purge information from the
              systems or files of our BOE Mortgage affiliates, service providers
              or other financial institutions that have subsequently been sent
              your personal information to provide their services.
            </h5>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" className="text-center mb-3">
            <h1>Terms of Use</h1>
          </MDBCol>
          <MDBCol sm="12">
            <h5>
              BOE Mortgage provides the BOEDallas.com Internet site "as is" to
              the user without any warranty or condition, express, implied or
              statutory. BOE Mortgage disclaims any implied warranties of title,
              merchantability, non-infringement of intellectual property or
              fitness for any particular purpose. Except as may be otherwise
              expressly provided by written agreement between BOE Mortgage and
              the user, BOE Mortgage will have no tort, contract or any other
              liability to the user and/or any third party arising in connection
              with the use of this Internet site, or reliance on any information
              or services provided at this Internet site. In the event of errors
              or omissions in any information BOE Mortgage's sole responsibility
              shall be to use its best efforts to correct, by the issue of a
              corrected release, any errors or omissions which it or any of its
              employees, servants or agents may have made, negligently or
              otherwise, in transmitting copy accurately and which are brought
              to its attention. Without limiting the generality of the
              foregoing, in no event shall BOE Mortgage or any of its servants,
              employees or agents be liable in contract, tort or otherwise to
              any person (including, without limitation, the subscriber) for any
              loss, damage, injury, liability, cost or expense of any nature
              (including, without limitation, direct, indirect, consequential,
              incidental, special and punitive damages) which such person may
              suffer or incur as a result of any such errors or omissions or any
              delays in transmission or non-transmission.
            </h5>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" className="text-center mb-3">
            <h1>Your Acceptance Of These Terms</h1>
          </MDBCol>
          <MDBCol sm="12">
            <h5>
              By using this site, or by submitting personal information to us,
              you signify your agreement to BOE Mortgage's Privacy Policy and
              Terms Of Use. From time to time we may change or update our
              privacy policies. It is your responsibility to check back
              regularly to inform yourself of such changes. Your continued use
              of the BOEDallas.com site following the posting of changes to
              these terms will be deemed as your acceptance of those changes.
              The foregoing policies are in effect as of June 1, 2005. BOE
              Mortgage reserves the right to change this policy statement at any
              time by posting the revised policy on this Web site. This
              statement and the policies outlined herein are not intended to and
              do not create any contractual or other legal rights in or on
              behalf of any party.
            </h5>
          </MDBCol>
        </MDBRow>
        <MDBRow id="patriot__act">
          <MDBCol sm="12" className="text-center mb-3">
            <h1 style={{ fontWeight: "bold", marginBottom: "15px", marginTop:'100px' }}>
              United States Patriot Act
            </h1>
            <h1>
              IMPORTANT INFORMATION ABOUT PROCEDURES FOR OPENING OR CHANGING AN
              ACCOUNT WITH BANK OF ENGLAND MORTGAGE:
            </h1>
          </MDBCol>
          <MDBCol sm="12">
            <h5>
              Section 326 of the USA PATRIOT ACT requires all financial
              institutions to obtain, verify, and record information that
              identifies each person who opens an account or changes an existing
              account. This federal requirement applies to all new customers and
              current customers. This information is used to assist the United
              States government in the fight against the funding of terrorism
              and money-laundering activities. What this means to you: when you
              open an account or change an existing account, we will ask each
              person for their name, physical address, mailing address, date of
              birth, and other information that will allow us to identify them.
              We will ask to see each person’s driver’s license and other
              identifying documents and copy or record information from each of
              them.
            </h5>
          </MDBCol>
        </MDBRow>
        <MDBRow id="identity__theft">
          <MDBCol sm="12" className="text-center mb-3">
            <h1 style={{ fontWeight: "bold", marginBottom: "15px", marginTop:'100px' }}>
              Identity Theft
            </h1>
            <h1>How do you prevent identity theft?</h1>
          </MDBCol>
          <MDBCol sm="12">
            <h5>
              Each year, millions of Americans have their identity stolen. BOE
              Mortgage wants you to have the information you need to protect
              yourself against identity theft. While there are no guarantees
              about avoiding identity theft, it's important for you to know: We
              will never initiate a request for sensitive information from you
              (such as, social security number, personal login ID, password, PIN
              or account number) nor ask you to verify account information via
              email. We strongly suggest that you do not share your personal
              login ID, password, PIN or account number with anyone, under any
              circumstances. If you receive an email that requests this type of
              action, you should be suspicious of it and contact us immediately
              at 866-878-2265. We also suggest you report suspicious emails or
              calls to the Federal Trade Commission through the Internet at
              www.consumer.gov/idtheft, or by calling 1-877-IDTHEFT.
            </h5>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" className="text-center mb-3">
            <h1>What is Identity Theft?</h1>
          </MDBCol>
          <MDBCol sm="12">
            <h5>
              Identity theft involves the unlawful acquisition and use of
              someone's identifying information, such as: Name Address Date of
              Birth Social Security Number Mother's Maiden Name Drivers License
              Bank or Credit Card Account Number Thieves then use the
              information to repeatedly commit fraud in an attempt to duplicate
              your identity which may include opening new accounts, purchasing
              automobiles, applying for loans, credit cards, and social security
              benefits, renting apartments and establishing services with
              utility and telephone companies. It can have a negative effect on
              your credit and create a serious financial hassle for you.
            </h5>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" className="text-center mb-3">
            <h1>How do they get my personal information?</h1>
          </MDBCol>
          <MDBCol sm="12">
            <h5>
              Lost or stolen personal items:They may obtain your personal
              information by finding or stealing your checkbooks, credit cards,
              driver license or Social Security cards. Mail:They may steal your
              mail, including bank and credit card statements, credit card
              offer, new checks, and tax information. They may also complete a
              "change of address form" to divert your mail to another location.
              Onlookers:They will watch and/or listen to you conduct personal
              business such as entering your PIN when you use your ATM or debit
              card or when you are talking on the telephone. Dumpster
              Diving:They may rummage through your trash, the trash of
              businesses, or public trash dumps in a practice known as "dumpster
              diving." Internet:They use the Internet to look for personal pages
              that contain information like genealogical data with your mother's
              maiden name that can be used to set up a credit card account or
              possibly access existing accounts. Phishing:They may obtain
              personal information from you through the use of "pop-ups" or
              emails. These emails have Internet links to deceive you into
              disclosing sensitive information such as bank account numbers and
              social security numbers. Oftentimes the email appears as if it
              comes from a trusted source. It directs you to a "spoof" website
              that encourages you to divulge sensitive information.
              Pretexting:They may obtain your personal information on the phone
              by posing as a legitimate company and claiming that you have a
              problem with your account. Skimming:They may steal your credit or
              debit card numbers by capturing the information in a data storage
              device in a practice known as "skimming." They may swipe your card
              for an actual purchase, or attach the device to an ATM machine
              where you may enter or swipe your card. Inside Jobs: They get
              information from businesses or other institutions by: stealing
              records or information while they're on the job bribing an
              employee who has access to these records hacking these records
              conning information out of employees
            </h5>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" className="text-center mb-3">
            <h1>How do I protect my identity?</h1>
          </MDBCol>
          <MDBCol sm="12">
            <h5>
              Report lost or stolen checks or credit cards immediately. Shred
              all documents containing personal information, like bank
              statements, unused checks, deposit slips, credit card statements,
              pay stubs, medical billings, and invoices. Don't put your trash
              out until shortly before it will be picked up. Pay bills online or
              mail bill payments and other items that contain personal
              information at a U.S. Postal Service drop box rather than in your
              curb side mailbox. Don't put any mail in your curb side mailbox
              until shortly before it will be picked up daily. Take your mail
              out of your curb side mailbox as soon as possible after it has
              been delivered. If you are traveling, have the U.S. Postal Service
              hold your mail or have someone you trust pick it up daily. Limit
              the information on your checks (for example, don't include
              driver's license number, social security number, or telephone
              number), and don't carry around any more cards than necessary.
              Don't give any of your personal information in person, over the
              telephone, or over the Internet to anyone-unless you have a very
              good reason to trust them. Don't give any of your personal
              information to any web sites that do not use encryption or other
              secure methods to protect it. Use a firewall if you have a
              high-speed Internet connection. This software can be purchased
              on-line or from most software retailers. Don't use PINs or other
              passwords that are easy to guess (for example, don't use birth
              dates or spouse, child, pet or mothers maiden names). Regularly
              change your passwords. Also, create a username that is unique and
              difficult for others to guess. Examine your credit card and
              financial institution statement immediately upon receipt to
              determine whether there were any unauthorized transactions. Report
              any that you find immediately to the financial institution. Make a
              prompt inquiry if bills or statements are not received in a timely
              fashion-this could mean that they are being diverted by an
              identity thief. Obtain copies of your credit report periodically
              from each of the three major reporting agencies to be sure that
              they are accurate. Experian, Equifax, and Trans Union are required
              to provide you with one free credit report a year.
            </h5>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" className="text-center mb-3">
            <h1>
              What do I do if I suspect I'm a victim of fraud or my identity has
              been stolen?
            </h1>
          </MDBCol>
          <MDBCol sm="12">
            <h5>
              If you suspect that your personal information has been
              compromised, follow these important steps: Immediately notify us
              and your other financial institution(s). You'll need to get new
              account numbers and select a new PIN. If you are in fact a victim
              of identity theft, we will offer assistance to help remedy the
              situation. Report any suspicious activity immediately. Scrutinize
              the charges on your financial statements carefully to ensure that
              they are legitimate. If there is a questionable transaction or a
              fraudulent transaction, report it right away. Call the three major
              credit bureaus to request that a fraud alert be placed on your
              credit report. Contact your local police department. Financial
              fraud is a crime. Call the Federal Trade Commission's ID Theft
              hotline at (877) IDTHEFT to report it. The FTC maintains a program
              to assist victims of identity theft. The Center logs complaints
              and provides assistance and information to victimized consumers to
              rectify damage to their credit and personal reputation. Notify the
              U.S. Postal Inspectors Office. Victims of fraud should contact
              their local post office to report any crime involving stolen mail
              or use of the mail in furtherance of a fraud scheme. It is a
              felony. Contact the Social Security Administration at (800)
              269-0271. The Social Security Hotline allows a victim of identity
              theft to report misuse of a Social Security number. You may also
              visit your local Social Security Office to obtain further
              information. Contact the Department of Motor Vehicles. If your
              driver's license is stolen, report the theft immediately to your
              local Department of Motor Vehicles. Ensure that a duplicate
              license was not recently issued in your name to an imposter. Keep
              detailed notes of your repair efforts. Keep a log of all contacts
              and copies of all documents; follow up your contact calls in
              writing. Check these resources for more information on identity
              theft and what to do it you're a victim: The Federal Trade
              Commission (FTC) The Federal Deposit Insurance Corporation (FDIC)
              United States Department of Justice
            </h5>
          </MDBCol>
        </MDBRow>
        <MDBRow id="security">
          <MDBCol sm="12" className="text-center mb-3">
          <h1 style={{ fontWeight: "bold", marginBottom: "15px", marginTop:'100px' }}>
              Security Information
            </h1>
            <h1>Security</h1>
          </MDBCol>
          <MDBCol sm="12">
            <h5>
              Bank of England Mortgage is dedicated to protecting your privacy.
              All information you submit is treated with the highest level of
              confidence. We do not share your confidential information with any
              other party. The information submitted will be used solely to
              evaluate your credit application.
            </h5>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" className="text-center mb-3">
            <h1>Secure Online Application</h1>
          </MDBCol>
          <MDBCol sm="12">
            <h5>
              Our new online application also makes it possible for us to close
              your loan in record time through its advanced electronic
              submission features: True 128-bit strong SSL encryption ICPA
              WebTrust compliant Your information is secure when you apply with
              Bank of England Mortgage. The entire application is housed on our
              secure server and will not be shared with anyone not directly
              involved with your loan process.
            </h5>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
