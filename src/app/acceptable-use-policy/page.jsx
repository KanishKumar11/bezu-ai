import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
export const metadata = {
  title: "Acceptable Use Policy",
  description: "Acceptable Use Policy",
};
export default function TermsAndConditions() {
  return (
    <>
      <div className="min-h-screen bg-foreground text-white">
        <Navbar />
        <header className=" bg-[#272727] py-14 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center">
              Acceptable Use Policy
            </h1>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          {/* Acceptable Use Policy */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              Acceptable Use Policy
            </h2>
            <p className="leading-relaxed text-gray-300">
              This Acceptable Use Policy applies to your use of Bezu Ai (“we,”
              “us,” “our” or “Company”)’s services, applications, and websites,
              and is incorporated into our Terms of Service. In accordance with
              our Terms of Service, we reserve the right to suspend or terminate
              your access to our services (collectively, the “Service”) for any
              violation of this Acceptable Use Policy.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              1. Prohibited Uses
            </h3>
            <p className="leading-relaxed text-gray-300">
              You agree not to use the Service:
            </p>
            <ul className="list-disc list-inside space-y-3 mt-4">
              <li>
                <span className="font-bold">Violation of laws</span> - In any
                way that violates any applicable national, federal, state,
                local, or international law or regulation.
              </li>
              <li>
                <span className="font-bold">Harm to minors</span> - For the
                purpose of exploiting, harming, or attempting to exploit or harm
                minors in any way.
              </li>
              <li>
                <span className="font-bold">False or misleading content</span> -
                To generate or disseminate verifiably false information and/or
                content:
                <ul className="list-inside space-y-2 mt-2">
                  <li>With the purpose of harming or misleading others,</li>
                  <li>
                    To interfere with, or participate in, elections or election
                    campaigns, or
                  </li>
                  <li>
                    To discredit or undermine individuals, groups, entities, or
                    institutions.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Personal information of others
                </span>{" "}
                - To input, generate, or create output that contains personal
                information related to any individual other than yourself
                (including photos, audio, videos, etc.), unless explicitly
                allowed by our policies.
              </li>
              <li>
                <span className="font-bold">Impersonation or deepfakes</span> -
                To impersonate real entities or create fake personas (a.k.a.
                “deepfakes”) to falsely attribute content or mislead others
                about its origin without consent or legal right.
              </li>
              <li>
                <span className="font-bold">Sensitive personal data</span> - To
                upload, share, post, email, transmit, query, or otherwise make
                available through or to the Service any sensitive personal
                information, whether related to yourself or to other
                individuals, including financial, medical, or health data,
                government IDs, passport numbers, social security numbers, or
                other government identifiers.
              </li>
              <li>
                <span className="font-bold">
                  Sexual content in lifelike AI characters
                </span>{" "}
                - To create lifelike AI characters (e.g., avatars, images, or
                videos) depicting or simulating sexual content, especially any
                that involves minors, bestiality, incest, or non-consensual acts
                (sexual violence).
              </li>
              <li>
                <span className="font-bold">
                  Erotic/sexual chats (text-based)
                </span>{" "}
                - Consenting-adult sexual or erotic content in text is
                permitted, provided it does not:
                <ul className="list-inside space-y-2 mt-2">
                  <li>Depict or reference minors in any sexual context,</li>
                  <li>
                    Facilitate or promote sexual violence, incest, bestiality,
                    or other illegal acts,
                  </li>
                  <li>
                    Involve non-consensual acts or content that violates another
                    section of this policy.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Harassment and defamation</span> -
                To defame, disparage, or harass others, including calls for
                violence or hateful conduct targeted at a protected group.
              </li>
              <li>
                <span className="font-bold">Automated decision-making</span> -
                For fully automated decision making that adversely impacts an
                individual’s legal rights or creates/modifies a legally binding
                obligation.
              </li>
              <li>
                <span className="font-bold">
                  Discrimination or harmful profiling
                </span>{" "}
                - For any use intended or having the effect of discriminating
                against or harming individuals or groups based on personal or
                personality characteristics, including legally protected
                characteristics.
              </li>
              <li>
                <span className="font-bold">
                  Exploitation of vulnerable groups
                </span>{" "}
                - To exploit or manipulate vulnerabilities of specific groups
                (e.g., children, seniors, or those with mental or physical
                conditions) in a manner likely to cause physical or
                psychological harm.
              </li>
              <li>
                <span className="font-bold">Medical advice</span> - To provide
                medical advice or interpret medical results in a manner that
                might mislead or harm individuals or breach professional
                requirements.
              </li>
              <li>
                <span className="font-bold">
                  Law enforcement / legal processes
                </span>{" "}
                - To generate or disseminate information intended for the
                administration of justice, law enforcement, immigration or
                asylum processes, such as profiling individuals for potential
                criminal activity or fraud.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              2. Consequences of Violations
            </h3>
            <p className="leading-relaxed text-gray-300">
              - Enforcement Actions: We reserve the right (but are not
              obligated) to monitor, remove, or refuse any content submitted to
              or generated by the Service if it violates this Acceptable Use
              Policy or poses a risk to users or others. We may suspend or
              terminate your account or access to the Service for any violation.
            </p>
            <p className="leading-relaxed text-gray-300">
              - No Liability: We disclaim liability for content submitted,
              posted, or created by you or other users. You alone are
              responsible for your interactions with others and third parties.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              3. Amendments and Updates
            </h3>
            <p className="leading-relaxed text-gray-300">
              We may modify this Acceptable Use Policy at any time, and such
              modifications become effective immediately upon posting. Your
              continued use of the Service after updates signifies your
              acceptance of the revised policy.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              4. Contact Information
            </h3>
            <p className="leading-relaxed text-gray-300">
              If you have any questions or concerns about this Acceptable Use
              Policy, please contact us at:
            </p>
            <p className="leading-relaxed text-gray-300">
              [Bezu AI INC] <br />
              support@mybezu.com <br />
              <a
                href="https://mybezu.com"
                className="text-emerald-500 underline"
              >
                https://mybezu.com
              </a>
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
