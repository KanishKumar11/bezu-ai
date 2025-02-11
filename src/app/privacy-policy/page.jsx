import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Bezu AI outlining how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <div className="min-h-screen bg-foreground text-white">
        <Navbar />
        <header className="bg-[#272727] py-14 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center">
              Bezu AI Privacy Policy
            </h1>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          {/* Introduction */}
          <section className="mb-16">
            <p className="leading-relaxed text-gray-300">
              This Privacy Policy (&ldquo;Policy&rdquo;) describes how Bezu AI
              (&ldquo;Bezu AI,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) collects, uses, discloses, and otherwise
              processes personal information relating to your access and use of
              our Android and iOS mobile applications, including lifelike AI
              Characters, chat-based AI features, real-time video calls, and any
              related digital or offline services that link to this Policy
              (collectively, the &ldquo;Services&rdquo;).
            </p>
            <p className="mt-4 leading-relaxed text-gray-300">
              By accessing or using the Services, you agree to the practices
              described in this Policy. If you do not agree, you must not access
              or use the Services. Undefined capitalized terms used herein shall
              have the meaning set forth in the Bezu AI Terms of Service.
            </p>
          </section>

          {/* 1. Introduction & Scope */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              1. Introduction & Scope
            </h2>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>Overview.</strong> Bezu AI&apos;s Services include
                lifelike AI Characters, chat-based AI, and one-on-one real-time
                video call functionality. This Privacy Policy explains how we
                collect and process personal information through these features.
              </li>
              <li>
                <strong>Additional Notices.</strong> We may provide supplemental
                privacy notices for certain products or services (e.g., if
                biometric data is collected or for region-specific
                requirements). These notices should be read together with this
                Policy.
              </li>
              <li>
                <strong>Age Restrictions.</strong> The Services are not intended
                for individuals under 18. If you are not of the required legal
                age, please do not use our Services.
              </li>
            </ol>
          </section>

          {/* 2. Information We Collect */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              2. Information We Collect
            </h2>
            <p className="leading-relaxed text-gray-300">
              We collect personal information directly from you, automatically
              when you use our Services, and from third parties, as outlined
              below.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              2.1 Information You Provide Directly
            </h3>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>Account & Profile Information:</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>
                    Name, username, email address, password, or other
                    identifiers you choose to share.
                  </li>
                </ul>
              </li>
              <li>
                <strong>User-Generated Content:</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>
                    Text prompts, images, audio/voice clips, or videos uploaded
                    or created in the course of interacting with AI Characters
                    or chat features.
                  </li>
                  <li>
                    AI Character profiles you build and share with other users.
                  </li>
                  <li>
                    Video calls: When you engage in real-time one-on-one video
                    calls, we collect audio and video data from your
                    device&#39;s camera and microphone (with your permission).
                  </li>
                  <li>
                    Note: If we offer or enable any call recording features, we
                    will notify you and request the necessary permissions (where
                    required by law).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Payment Information:</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>
                    We may collect minimal transaction data (e.g., purchase
                    confirmations, transaction IDs) when you make in-app
                    purchases via Google Play Store, Apple App Store, or
                    Razorpay.
                  </li>
                  <li>
                    Financial details (such as your credit card number) are
                    typically collected directly by the app store providers or
                    Razorpay, not by us.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Communications & Support:</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>
                    When you contact us (e.g., via email or in-app support), we
                    collect information about your request or inquiry.
                  </li>
                </ul>
              </li>
            </ol>
            <p className="mt-4 leading-relaxed text-gray-300">
              <strong>Sensitive Information:</strong> Please do not share
              sensitive personal information (e.g., health, religious beliefs,
              government ID numbers) unless strictly necessary. If you choose to
              include such data, you consent to its processing per this Policy.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              2.2 Information We Collect Automatically
            </h3>
            <p className="leading-relaxed text-gray-300">
              We and our third-party service providers (e.g., analytics
              providers like Google Analytics for Firebase) may automatically
              collect certain information about your device and how you interact
              with our Android and iOS apps, including:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                Device Information: Device model, operating system version,
                unique device identifiers (e.g., IDFA, Android Advertising ID),
                mobile network info.
              </li>
              <li>
                Usage Data: Pages/screens viewed, in-app features used,
                navigation paths, timestamps, crash reports, error logs.
              </li>
              <li>
                IP Address: For approximate location (city, state, or region).
              </li>
              <li>
                Cookies / SDKs: While cookies are typical in browser
                environments, our mobile apps may use equivalent technologies
                (like software development kits and device identifiers) to store
                or read data on your device for analytics, personalization, and
                security.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              2.3 Information from Third Parties
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                Social Media or Third-Party Login: If you choose to link your
                Bezu AI account with a third-party service (e.g., Google,
                Apple), we receive basic profile info from that service, subject
                to the permissions you grant.
              </li>
              <li>
                App Stores & Payment Gateways: We receive limited data (purchase
                amount, transaction status, etc.) from Google Play Store, Apple
                App Store, or Razorpay.
              </li>
              <li>
                Referrals/Publicly Available Sources: We may collect information
                if you were referred by another user or if it&#39;s publicly
                available.
              </li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              3. How We Use Your Information
            </h2>
            <p className="leading-relaxed text-gray-300">
              We may use your personal information for the following purposes or
              as otherwise disclosed at the time of collection:
            </p>
            <ol className="list-decimal list-inside space-y-4 mt-4">
              <li>
                <strong>Providing & Personalizing the Services</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>
                    Facilitate real-time video calls, AI chats, and lifelike
                    Character interactions.
                  </li>
                  <li>
                    Operate, maintain, and optimize the user experience (e.g.,
                    customizing AI responses).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Account Management & Security</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>
                    Create and manage your account, authenticate logins, and
                    keep the Services secure.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Service Improvement & Analytics</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>
                    Analyze usage patterns, enhance our AI/machine learning
                    models (often using aggregated or de-identified data).
                  </li>
                  <li>Monitor and fix technical issues.</li>
                </ul>
              </li>
              <li>
                <strong>Payments & Purchases</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>Track and manage in-app purchases.</li>
                  <li>
                    Communicate with you about transactions (e.g.,
                    confirmations, receipts).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Communication</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>Respond to support requests or feedback.</li>
                  <li>
                    Send important updates about new features or policy changes.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Fraud Prevention & Legal Compliance</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>
                    Prevent, investigate, or manage fraudulent or unlawful
                    activity.
                  </li>
                  <li>
                    Comply with applicable laws, lawful requests, and legal
                    processes (e.g., subpoenas).
                  </li>
                  <li>
                    Protect our rights, privacy, safety, or property, and that
                    of our affiliates and users.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Business Transactions</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>
                    In the event of a merger, acquisition, or sale of assets, we
                    may transfer your information, subject to confidentiality
                    obligations.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Consent & Other Purposes</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>
                    Where required, obtain your consent to use the data for
                    specific reasons.
                  </li>
                  <li>
                    Any additional purpose disclosed at the time of collection
                    or otherwise compatible with the original purpose.
                  </li>
                </ul>
              </li>
            </ol>
            <p className="mt-4 leading-relaxed text-gray-300">
              We may anonymize or aggregate personal information so it no longer
              identifies you. We may use de-identified or aggregated data for
              research, analytics, and training our AI models.
            </p>
          </section>

          {/* 4. Real-Time Video Calls */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              4. Real-Time Video Calls
            </h2>
            <p className="leading-relaxed text-gray-300">
              One-on-one video calls are a key feature of Bezu AI. When you
              initiate or receive a video call:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                Access to Camera & Microphone: We will request permission to
                access your device&#39;s camera and microphone. You can grant or
                deny these permissions in your device&#39;s settings.
              </li>
              <li>
                Call Content: The audio and video streams are processed in real
                time to enable the call; we do not systematically record or
                store your video calls unless you explicitly consent to a
                recording feature (if offered).
              </li>
              <li>
                Metadata: We may log metadata (e.g., call duration, connection
                quality) to improve our service.
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-gray-300">
              Please be mindful of any personal information you share verbally
              or visually during a video call. If you do not wish to share
              certain information, do not display it or speak it on camera.
            </p>
          </section>

          {/* 5. Cookies, SDKs & Similar Technologies */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              5. Cookies, SDKs & Similar Technologies
            </h2>
            <p className="leading-relaxed text-gray-300">
              Mobile Environments often rely on SDKs or unique device
              identifiers instead of cookies. We and our partners may use these
              technologies to:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>Remember your preferences or login details.</li>
              <li>Analyze app performance and user interactions.</li>
              <li>
                Provide certain functionalities (e.g., push notifications,
                auto-login).
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-gray-300">
              You can manage or restrict these technologies through your device
              settings (e.g., disable ad personalization) or in-app privacy
              controls. Note that disabling certain features may limit
              functionality.
            </p>
          </section>

          {/* 6. When We Disclose Your Information */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              6. When We Disclose Your Information
            </h2>
            <p className="leading-relaxed text-gray-300">
              We may disclose your personal information under these
              circumstances:
            </p>
            <ol className="list-decimal list-inside space-y-4 mt-4">
              <li>
                <strong>Affiliates & Subsidiaries</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>
                    Within our corporate family for consistent service
                    operations, product improvements, or research.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Service Providers/Vendors</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>
                    Third parties assisting us with cloud hosting, data
                    analysis, payment processing, AI technology, or customer
                    support.
                  </li>
                  <li>
                    Payment Processors: Google Play Store, Apple App Store, or
                    Razorpay handle most payment details. We receive minimal
                    data to confirm transactions.
                  </li>
                </ul>
              </li>
              <li>
                <strong>User-Generated Content</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>
                    Content you designate as &ldquo;public&rdquo; (e.g.,
                    publicly shared AI Characters) or chat in a group context
                    may be visible to other users.
                  </li>
                  <li>
                    Video calls are private by default unless you voluntarily
                    invite a participant or consent to recording (if offered).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Legal Obligations & Safety</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>
                    If required by law or necessary to protect our rights,
                    property, or safety, or that of others (e.g., responding to
                    subpoenas, court orders).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Business Transactions</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>
                    In a merger, acquisition, financing, sale of assets, or
                    bankruptcy. Your data may be transferred subject to
                    confidentiality obligations.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Consent or At Your Direction</strong>
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>
                    If you explicitly agree to share your data with a third
                    party or direct us to do so.
                  </li>
                </ul>
              </li>
            </ol>
          </section>

          {/* 7. Your Choices & Rights */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              7. Your Choices & Rights
            </h2>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              7.1 Managing Your Account & Profile
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                Update or delete certain personal information in your account
                settings.
              </li>
              <li>
                Deactivate your account by contacting us at{" "}
                <a
                  href="mailto:support@mybezu.com"
                  className="text-blue-400 hover:underline"
                >
                  support@mybezu.com
                </a>
                .
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              7.2 Notifications & Marketing
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                Opt out of marketing emails by clicking
                &ldquo;unsubscribe&rdquo; in those emails.
              </li>
              <li>
                Push notifications can be managed in your device settings.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              7.3 Device Permissions
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                Camera & Microphone: Adjust permissions in your Android/iOS
                settings if you don&apos;t want to grant access for video calls.
              </li>
              <li>
                Location & Other Permissions: Configure these in your device
                settings.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              7.4 Cookie/Tracking Controls
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                Configure your mobile device or in-app settings to control how
                we use SDKs, analytics, or advertising tools.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              7.5 Access, Correction & Deletion
            </h3>
            <p className="leading-relaxed text-gray-300">
              Depending on your jurisdiction, you may have legal rights to
              request:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>Access: A copy of personal data we hold.</li>
              <li>Correction: Updates to inaccurate data.</li>
              <li>
                Deletion: Erasure of certain data, subject to legal exceptions.
              </li>
              <li>Restriction: Limit processing of certain data.</li>
              <li>Portability: Receive data in a common electronic format.</li>
              <li>Objection: To processing for certain purposes.</li>
            </ul>
            <p className="mt-4 leading-relaxed text-gray-300">
              To exercise these rights, contact{" "}
              <a
                href="mailto:support@mybezu.com"
                className="text-blue-400 hover:underline"
              >
                support@mybezu.com
              </a>
              . We may need to verify your identity before fulfilling requests.
            </p>
          </section>

          {/* 8. Regional Privacy Disclosures */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              8. Regional Privacy Disclosures
            </h2>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              8.1 State Privacy Rights (U.S.)
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                California: Residents may have rights under the California
                Consumer Privacy Act (&ldquo;CCPA&rdquo;), such as knowing the
                categories of personal info collected and requesting its
                deletion. California&apos;s &ldquo;Shine the Light&rdquo; law
                may also permit you to request info about data disclosed to
                third parties for direct marketing.
              </li>
              <li>
                Other States (e.g., Virginia, Colorado): May also provide rights
                to access, delete, or opt out of certain data uses.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              8.2 Notice to European Users (GDPR / UK GDPR)
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                Controller: Bezu AI is the &ldquo;data controller&rdquo; for
                GDPR/UK GDPR purposes.
              </li>
              <li>
                Legal Bases: Contractual necessity, consent (where required),
                legitimate interests, and/or legal obligations.
              </li>
              <li>
                Your Rights: Access, rectification, erasure, restriction,
                portability, objection, and the right to lodge a complaint with
                a supervisory authority.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              8.3 International Data Transfers
            </h3>
            <p className="leading-relaxed text-gray-300">
              We may transfer personal information to the United States or other
              countries where we or our service providers operate. Where
              required by law, we use appropriate safeguards (e.g., standard
              contractual clauses) to ensure your data remains protected.
            </p>
          </section>

          {/* 9. Data Retention */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">9. Data Retention</h2>
            <p className="leading-relaxed text-gray-300">
              We keep personal information as long as necessary for the purposes
              described in this Policy, including:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                Providing and maintaining the Services (e.g., keeping chat
                histories for AI refinement).
              </li>
              <li>Complying with legal obligations.</li>
              <li>Resolving disputes.</li>
              <li>Enforcing agreements.</li>
            </ul>
            <p className="mt-4 leading-relaxed text-gray-300">
              User-Generated Content such as an AI Character that becomes
              popular may remain accessible to other users, even if you delete
              your account, to avoid impacting their experience. Please avoid
              submitting personal info in publicly shared Characters.
            </p>
            <p className="mt-4 leading-relaxed text-gray-300">
              We may retain aggregated or de-identified data indefinitely.
            </p>
          </section>

          {/* 10. Security Measures */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              10. Security Measures
            </h2>
            <p className="leading-relaxed text-gray-300">
              We maintain administrative, technical, and physical safeguards
              designed to protect personal information from loss, misuse,
              unauthorized access, disclosure, alteration, or destruction.
              However, no method of transmission over the internet or electronic
              storage is completely secure; we cannot guarantee absolute
              security.
            </p>
          </section>

          {/* 11. Children's Privacy */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              11. Children&#39;s Privacy
            </h2>
            <p className="leading-relaxed text-gray-300">
              The Services are not intended for persons under 13 (or 16 in
              certain jurisdictions). If we learn we have collected personal
              information from a child under those ages without parental
              consent, we will promptly take steps to delete it in accordance
              with applicable law.
            </p>
          </section>

          {/* 12. Changes to This Privacy Policy */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              12. Changes to This Privacy Policy
            </h2>
            <p className="leading-relaxed text-gray-300">
              We may revise this Policy to reflect changes in our practices or
              legal obligations. We will indicate the date of the most recent
              update at the top. If the changes materially affect your rights or
              how we process personal information, we will provide prominent
              notice (e.g., within the app or via email). By continuing to use
              the Services after updates are effective, you acknowledge and
              agree to the revised Policy.
            </p>
          </section>

          {/* 13. Contact Us */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
            <p className="leading-relaxed text-gray-300">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@mybezu.com"
                  className="text-blue-400 hover:underline"
                >
                  support@mybezu.com
                </a>
              </li>
              <li>
                Website:{" "}
                <a
                  href="https://mybezu.com"
                  className="text-blue-400 hover:underline"
                >
                  mybezu.com
                </a>
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-gray-300">
              We will do our best to address your inquiry promptly.
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
