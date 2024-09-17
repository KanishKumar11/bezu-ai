import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Privacy Policy of the company to ensure user data protection and safety."
        />
      </Head>
      <div className="min-h-screen bg-foreground text-white">
        <Navbar />
        <header className=" bg-[#272727] py-14 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center">Privacy Policy</h1>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="leading-relaxed text-gray-300">
              We value your privacy and are committed to protecting your
              personal information. This Privacy Policy outlines the types of
              information we collect and how we use, disclose, and safeguard
              your data.
            </p>
            <p className="leading-relaxed text-gray-300">
              By using our services, you consent to the terms outlined in this
              Privacy Policy. If you have any questions, feel free to contact
              us.
            </p>
          </section>

          {/* Information Collection */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              Information We Collect
            </h2>
            <p className="leading-relaxed text-gray-300">
              We collect various types of information to provide and improve our
              services, including:
            </p>
            <ul className="list-disc list-inside space-y-3 mt-4">
              <li>
                <span className="font-bold">Personal Information:</span> This
                includes your name, email address, phone number, and other
                identifiable information.
              </li>
              <li>
                <span className="font-bold">Usage Data:</span> Information
                related to your use of the service such as IP address, browser
                type, and the pages you visit.
              </li>
              <li>
                <span className="font-bold">Cookies:</span> We use cookies to
                enhance your experience and gather analytics data.
              </li>
            </ul>
          </section>

          {/* Use of Information */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              How We Use Your Information
            </h2>
            <p className="leading-relaxed text-gray-300">
              The information we collect is used in the following ways:
            </p>
            <ul className="list-disc list-inside space-y-3 mt-4">
              <li>
                <span className="font-bold">To Provide Services:</span> We use
                your information to deliver the services you&apos;ve requested.
              </li>
              <li>
                <span className="font-bold">To Improve Services:</span> We
                analyze user behavior and feedback to improve our products and
                services.
              </li>
              <li>
                <span className="font-bold">Marketing:</span> With your consent,
                we may send you promotional materials and offers.
              </li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              Sharing of Information
            </h2>
            <p className="leading-relaxed text-gray-300">
              We may share your information with trusted third parties only in
              the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-3 mt-4">
              <li>
                <span className="font-bold">Service Providers:</span> We may
                share your information with third-party service providers to
                help us deliver services.
              </li>
              <li>
                <span className="font-bold">Compliance with Law:</span> We may
                disclose your information to comply with legal obligations or to
                protect our legal rights.
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="leading-relaxed text-gray-300">
              We are committed to ensuring that your information is secure. To
              prevent unauthorized access, we implement strong security
              measures, including encryption and secure servers.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="leading-relaxed text-gray-300">
              You have the right to access, update, or delete your personal
              information. If you would like to exercise these rights, please
              contact us.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="leading-relaxed text-gray-300">
              We use cookies and similar technologies to track activity on our
              service. Cookies are small data files stored on your device. You
              can instruct your browser to refuse all cookies, but this may
              limit your ability to use our services.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="leading-relaxed text-gray-300">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices. We encourage you to review this page
              periodically for any updates.
            </p>
            <p className="text-sm text-gray-400 mt-8">
              Last updated: September 18, 2024
            </p>
          </section>

          {/* Contact Information */}
          {/* <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="leading-relaxed text-gray-300">
              If you have any questions about this Privacy Policy, please
              contact us at:{" "}
              <a
                href="mailto:support@example.com"
                className="text-emerald-500 underline"
              >
                support@example.com
              </a>
            </p>
          </section> */}
        </main>

        <Footer />
      </div>
    </>
  );
}
