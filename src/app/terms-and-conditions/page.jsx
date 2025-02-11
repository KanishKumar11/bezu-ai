import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions of Bezu AI outlining the rules and regulations for using our services.",
};

export default function TermsAndConditions() {
  return (
    <>
      <div className="min-h-screen bg-foreground text-white">
        <Navbar />
        <header className="bg-[#272727] py-14 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center">
              Bezu AI Terms of Service
            </h1>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">1. INTRODUCTION</h2>
            <p className="leading-relaxed text-gray-300">
              Welcome to <strong>Bezu AI</strong> (&quot;Bezu AI,&quot;
              &quot;we,&quot; &quot;us&quot;, or &quot;our&quot;). These Terms
              of Service (the &quot;Terms&quot; or &quot;Agreement&quot;) govern
              your access to and use of:
            </p>
            <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
              <li>
                The <strong>Bezu AI website</strong> (the &quot;Website&quot;),
              </li>
              <li>
                The <strong>Bezu AI mobile applications</strong> (each, an
                &quot;App&quot;), and
              </li>
              <li>
                Any <strong>content, services, or features</strong> made
                available by Bezu AI (collectively with the Website and App, the
                &quot;Services&quot;).
              </li>
            </ol>
            <p className="mt-4 leading-relaxed text-gray-300">
              By accessing or using the Services in any manner, you{" "}
              <strong>agree</strong> to these Terms. If you{" "}
              <strong>do not</strong> agree to these Terms, or do not understand
              them, <strong>please refrain</strong> from using our Services.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              1.1 About Bezu AI
            </h3>
            <p className="leading-relaxed text-gray-300">
              Bezu AI is a <strong>generative AI</strong> platform that may
              include <strong>text-based AI chat</strong>,{" "}
              <strong>image or video generation</strong>,{" "}
              <strong>real-time video calls</strong>, or other AI-driven
              features. We leverage{" "}
              <strong>third-party open-source AI models</strong> to deliver the
              outputs (&quot;Outputs&quot;) based on your prompts and inputs
              (&quot;Input&quot;).
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              1.2 Relationship to Other Policies
            </h3>
            <p className="leading-relaxed text-gray-300">
              Our Privacy Policy explains how we collect and use personal data.
              Although it does not form part of these Terms, it is an important
              document that you should read. Additional service-specific terms,
              usage policies, or brand guidelines may also apply, and by using
              the Services, you agree to comply with them.
            </p>
          </section>

          {/* Age Requirement and Eligibility */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              2. AGE REQUIREMENT AND ELIGIBILITY
            </h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">2.1 Minimum Age</h3>
            <p className="leading-relaxed text-gray-300">
              You must be at least 18 years old to use the Services. If you are
              under 18, you cannot register or use the Services under any
              circumstances. By creating an account or otherwise using the
              Services, you represent that you are 18 or older.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              2.2 Account Registration
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                You must provide a valid email address (and any other requested
                information) to create an account.
              </li>
              <li>
                You are responsible for all actions taken under your account and
                must keep your credentials secure.
              </li>
              <li>
                You may not share your account credentials or create multiple
                accounts to circumvent usage limits.
              </li>
            </ul>
          </section>

          {/* Content and Usage Policy */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              3. CONTENT AND USAGE POLICY
            </h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              3.1 User Content (&quot;Input&quot; and &quot;Output&quot;)
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                &quot;Input&quot;: Any text, prompts, images, or other materials
                you provide to the Services.
              </li>
              <li>
                &quot;Output&quot;: Any response or content generated by Bezu
                AI&#39;s AI models based on your Input.
              </li>
              <li>
                You are responsible for any Input you submit, and the Output you
                choose to use, share, or disclose.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              3.2 Ownership of Content
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                As between you and Bezu AI, you own your Input, and you own your
                Output to the extent permitted by law.
              </li>
              <li>
                Bezu AI assigns any of its rights in your Output to you, subject
                to your compliance with these Terms.
              </li>
              <li>
                Similarity of Outputs: Because AI-generated content is often
                probabilistic, similar or identical Outputs may be generated for
                other users. You have no exclusive rights to any particular
                Output.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              3.3 Prohibited Content & Activities
            </h3>
            <p className="leading-relaxed text-gray-300">
              While we value freedom of expression, certain uses pose risks of
              harm to you or others. You may not:
            </p>
            <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
              <li>
                Explicit or Sexual Content with Minors: Create, share, or
                request content depicting or intended to depict minors in any
                mature, sexual, or exploitative context.
              </li>
              <li>
                Violent or Harassing Content: Use the Services to defraud,
                harass, bully, defame, threaten, or encourage violence or sexual
                crimes against any person or group.
              </li>
              <li>
                Self-Harm or Harm to Others: Use the Services to promote
                suicide, self-harm, or the creation/use of weapons to harm
                others or destroy property.
              </li>
              <li>
                Illegal or Unauthorized Conduct: Violate any applicable law or
                regulation (e.g., child exploitation, unauthorized intrusion, or
                property damage).
              </li>
              <li>
                Privacy Violations: Disclose or compromise another person&#39;s
                private data without their consent, or engage in doxing,
                stalking, etc.
              </li>
              <li>
                Malware or Disruption: Upload viruses or other malicious code,
                or circumvent any technical measures designed to enforce usage
                limits or security.
              </li>
              <li>
                Hate Speech: Generate or distribute content that demeans or
                incites violence against a protected group based on race,
                ethnicity, gender, religion, or other characteristics.
              </li>
              <li>
                Explicit Adult Content: While adult content may be permissible
                in certain contexts, you must ensure it does not violate local
                laws, depict minors, or facilitate non-consensual acts.
              </li>
            </ol>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              3.4 Usage Limits
            </h3>
            <p className="leading-relaxed text-gray-300">
              Bezu AI may impose daily or monthly usage limits on text prompts,
              image prompts, or other activities. We reserve the right to modify
              these limits without notice.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              3.5 Consequences of Violations
            </h3>
            <p className="leading-relaxed text-gray-300">
              We reserve the right to remove or suspend any content, or
              terminate or suspend your account, if we believe you have violated
              these Terms or pose a risk to others, the Services, or to Bezu AI.
            </p>
          </section>

          {/* Service Plans and Payment */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              4. SERVICE PLANS AND PAYMENT (IF APPLICABLE)
            </h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              4.1 Free Account
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                We may offer a free tier with limited prompts or features.
              </li>
              <li>
                We reserve the right to change or discontinue free services at
                any time.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              4.2 Paid Subscriptions (&quot;Pro Accounts&quot;)
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                Some features or functionalities (&quot;Enhancements&quot;)
                require a paid subscription.
              </li>
              <li>
                Fees and usage limits for Pro Accounts will be made clear before
                purchase.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              4.3 Billing and Renewal
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                By subscribing, you authorize Bezu AI (or its third-party
                payment processor) to charge your provided payment method for
                initial and recurring fees.
              </li>
              <li>
                If we change subscription prices, we will provide at least 30
                days notice, and any price change takes effect at the next
                renewal. If you disagree, you must cancel before the renewal.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              4.4 Cancellation and Refunds
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                You can cancel your subscription any time, effective at the end
                of the current paid term.
              </li>
              <li>Payments are non-refundable, unless required by law.</li>
              <li>
                On cancellation, you maintain access to paid features until your
                paid term ends.
              </li>
            </ul>
          </section>

          {/* Accuracy and Reliance on AI Output */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              5. ACCURACY AND RELIANCE ON AI OUTPUT
            </h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              5.1 Nature of AI
            </h3>
            <p className="leading-relaxed text-gray-300">
              The Services use open-source AI models, which may not produce
              reliably accurate, complete, or truthful content. Outputs may be
              incorrect, outdated, or offensive. You should not rely on Outputs
              as a sole source of factual information or professional advice.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              5.2 No Warranty on Output
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                AI-generated content does not reflect Bezu AI&#39;s own views.
              </li>
              <li>
                You assume all risks associated with using or sharing
                AI-generated Outputs (e.g., compliance with laws, third-party
                rights).
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              6. INTELLECTUAL PROPERTY
            </h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              6.1 Bezu AI Ownership
            </h3>
            <p className="leading-relaxed text-gray-300">
              We own and reserve all rights in and to the Services, including
              our trademarks, logos, brand elements, code, and associated
              intellectual property. You may only use our name or brand in
              compliance with our Brand Guidelines.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">6.2 Feedback</h3>
            <p className="leading-relaxed text-gray-300">
              If you provide suggestions or feedback to Bezu AI, you grant us a
              non-exclusive, royalty-free, worldwide, perpetual, irrevocable,
              sublicensable license to use those suggestions in any manner.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              7. DISCLAIMER OF WARRANTIES
            </h2>
            <p className="leading-relaxed text-gray-300">
              YOU EXPRESSLY UNDERSTAND AND AGREE THAT TO THE EXTENT PERMITTED BY
              LAW:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
                AVAILABLE&quot;.
              </li>
              <li>
                WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                NON-INFRINGEMENT, AND ACCURACY OF CONTENT.
              </li>
              <li>
                BEZU AI DOES NOT WARRANT THAT (i) THE SERVICES WILL BE
                UNINTERRUPTED OR ERROR-FREE, (ii) ANY OUTPUT WILL BE ACCURATE,
                RELIABLE, OR FIT FOR YOUR NEEDS, OR (iii) THE SERVICES WILL BE
                SECURE OR FREE FROM MALICIOUS CODE.
              </li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              8. LIMITATION OF LIABILITY
            </h2>
            <p className="leading-relaxed text-gray-300">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
            </p>
            <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
              <li>
                NO INDIRECT DAMAGES: BEZU AI IS NOT LIABLE FOR ANY INDIRECT,
                SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES (E.G.,
                LOST PROFITS, LOST DATA) ARISING OUT OF OR RELATED TO THE
                SERVICES OR THESE TERMS.
              </li>
              <li>
                CAP ON LIABILITY: BEZU AI&#39;S TOTAL LIABILITY FOR ALL CLAIMS
                UNDER THESE TERMS SHALL NOT EXCEED THE GREATER OF $100 OR THE
                AMOUNT YOU PAID (IF ANY) IN THE TWELVE (12) MONTHS PRIOR TO THE
                EVENT GIVING RISE TO LIABILITY.
              </li>
              <li>
                ESSENTIAL PURPOSE: IF YOU ARE DISSATISFIED WITH THE SERVICES,
                YOUR SOLE REMEDY IS TO STOP USING THEM.
              </li>
            </ol>
          </section>
          {/* Indemnification (continued) */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">9. INDEMNIFICATION</h2>
            <p className="leading-relaxed text-gray-300">
              If you are a business or organization, you agree to indemnify and
              hold harmless Bezu AI, its affiliates, employees, and agents from
              and against all claims, damages, liabilities, losses, and expenses
              (including reasonable attorneys&#39; fees) arising out of or
              related to your (i) use of the Services, (ii) violation of these
              Terms, or (iii) infringement of any third-party rights.
            </p>
          </section>

          {/* Suspension and Termination */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              10. SUSPENSION AND TERMINATION
            </h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              10.1 Termination by You
            </h3>
            <p className="leading-relaxed text-gray-300">
              You may deactivate your account at any time by ceasing to use the
              Services. If you have a paid subscription, it will remain in
              effect until the end of the paid term.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              10.2 Termination by Bezu AI
            </h3>
            <p className="leading-relaxed text-gray-300">
              We may suspend or terminate your account if we believe you have
              violated these Terms, or if it is necessary to protect our users,
              the Services, or Bezu AI. We may also terminate free accounts that
              are inactive for over one (1) year, with 30 days notice.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              11. DISPUTE RESOLUTION
            </h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              11.1 Informal Resolution
            </h3>
            <p className="leading-relaxed text-gray-300">
              If you have a dispute or concern, please contact us at
              support@bezu.com. We prefer to resolve issues informally first. We
              each agree to attempt to resolve disputes in good faith before
              initiating formal legal action.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              11.2 Arbitration Agreement
            </h3>
            <p className="leading-relaxed text-gray-300">
              Except for claims that may be brought in small claims court, you
              and Bezu AI agree to resolve any dispute, claim, or controversy
              (&quot;Dispute&quot;) arising out of or relating to these Terms or
              the Services through final and binding arbitration.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              11.3 Class Action Waiver
            </h3>
            <p className="leading-relaxed text-gray-300">
              All disputes must be pursued individually, and not as part of any
              class or consolidated action. Neither party can act as a class
              representative or participate as a class member in any class,
              representative, or consolidated proceeding.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              11.4 Arbitration Rules
            </h3>
            <p className="leading-relaxed text-gray-300">
              Arbitration will be conducted by a neutral arbitrator under the
              rules of an established arbitration body (e.g., AAA or NAM). The
              arbitrator can award damages on an individual basis that a court
              could. The Federal Arbitration Act governs the interpretation and
              enforcement of this arbitration provision.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">11.5 Opt-Out</h3>
            <p className="leading-relaxed text-gray-300">
              You may opt out of arbitration within 30 days of creating an
              account or the date these Terms first become effective for you, by
              sending a written notice to support@bezu.com. If you opt out, you
              may pursue disputes in court.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              11.6 Severability
            </h3>
            <p className="leading-relaxed text-gray-300">
              If a court finds any part of this arbitration provision invalid
              (other than the class action waiver), the remainder shall still
              apply. If the class action waiver is found unenforceable, the
              entire arbitration section is void.
            </p>
          </section>

          {/* Copyright Complaints */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              12. COPYRIGHT COMPLAINTS
            </h2>
            <p className="leading-relaxed text-gray-300">
              If you believe your copyright or other intellectual property
              rights have been infringed through the Services, please send a
              notice to:
            </p>
            <pre className="bg-gray-800 p-4 rounded-md mt-4">
              Bezu AI, Inc. Attn: DMCA Agent Email: support@bezu.com
            </pre>
            <p className="mt-4 leading-relaxed text-gray-300">
              Your notice should include:
            </p>
            <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
              <li>
                A statement that you are the owner or authorized to act on the
                owner&#39;s behalf,
              </li>
              <li>
                A description of the copyrighted work allegedly infringed,
              </li>
              <li>
                The specific location (URL) of the allegedly infringing
                material,
              </li>
              <li>Your contact information, and</li>
              <li>
                A statement under penalty of perjury that your claim is accurate
                and you are authorized to act.
              </li>
            </ol>
          </section>

          {/* Miscellaneous */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">13. MISCELLANEOUS</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              13.1 Governing Law
            </h3>
            <p className="leading-relaxed text-gray-300">
              These Terms are governed by the laws of Wyoming, without regard to
              conflict-of-law principles, except to the extent the Federal
              Arbitration Act applies.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">13.2 Assignment</h3>
            <p className="leading-relaxed text-gray-300">
              You may not assign your rights or obligations under these Terms
              without our written consent. We may freely assign or transfer
              these Terms.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              13.3 Entire Agreement
            </h3>
            <p className="leading-relaxed text-gray-300">
              These Terms (including any referenced policies) constitute the
              entire agreement between you and Bezu AI concerning the Services,
              superseding any prior agreements or understandings.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              13.4 Severability
            </h3>
            <p className="leading-relaxed text-gray-300">
              If any provision is held invalid, the rest remain in effect. If
              removing a provision would allow class or representative claims,
              the arbitration provision stands in full.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">13.5 No Waiver</h3>
            <p className="leading-relaxed text-gray-300">
              Any failure by Bezu AI to enforce a right or provision does not
              constitute a waiver of that right or provision.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              13.6 Changes to These Terms
            </h3>
            <p className="leading-relaxed text-gray-300">
              We may revise these Terms from time to time. We will post changes
              on our Website or within the App. Material changes generally
              become effective 14 days after posting. By continuing to use the
              Services, you accept the updated Terms.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">13.7 Contact Us</h3>
            <p className="leading-relaxed text-gray-300">
              If you have questions or concerns regarding these Terms, please
              contact us at:
            </p>
            <pre className="bg-gray-800 p-4 rounded-md mt-4">
              Bezu AI, Inc. Email: support@bezu.com Website: https://mybezu.com
            </pre>
          </section>

          <p className="text-sm text-gray-400 mt-8">
            By using Bezu AI, you acknowledge that you have read, understood,
            and agree to be bound by these Terms.
          </p>
        </main>

        <Footer />
      </div>
    </>
  );
}
