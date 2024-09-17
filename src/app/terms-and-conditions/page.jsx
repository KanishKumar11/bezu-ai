import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
        <meta
          name="description"
          content="Terms and Conditions of the company outlining the rules and regulations for using our services."
        />
      </Head>
      <div className="min-h-screen bg-foreground text-white">
        <Navbar />
        <header className=" bg-[#272727] py-14 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center">
              Terms and Conditions
            </h1>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="leading-relaxed text-gray-300">
              These Terms and Conditions govern your use of our website and
              services. By accessing or using our services, you agree to comply
              with these Terms. Please read them carefully.
            </p>
          </section>

          {/* Use of Services */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Use of Our Services</h2>
            <p className="leading-relaxed text-gray-300">
              By using our services, you agree to abide by the following rules
              and regulations:
            </p>
            <ul className="list-disc list-inside space-y-3 mt-4">
              <li>
                <span className="font-bold">Legal Use:</span> You must use our
                services for lawful purposes only. Any unauthorized or illegal
                use is strictly prohibited.
              </li>
              <li>
                <span className="font-bold">No Harmful Activity:</span> You
                agree not to engage in activities that harm, disrupt, or misuse
                our services, including attempting to breach our security
                measures.
              </li>
              <li>
                <span className="font-bold">Account Responsibility:</span> You
                are responsible for maintaining the confidentiality of your
                account and password. Any activity under your account is your
                responsibility.
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              Intellectual Property
            </h2>
            <p className="leading-relaxed text-gray-300">
              All content, trademarks, and logos displayed on our website are
              the property of the company and are protected by intellectual
              property laws. You may not reproduce, distribute, or otherwise use
              any content without explicit permission.
            </p>
          </section>

          {/* User-Generated Content */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              User-Generated Content
            </h2>
            <p className="leading-relaxed text-gray-300">
              By submitting content (such as comments, reviews, or posts), you
              grant us a non-exclusive, worldwide, royalty-free license to use,
              modify, and display the content in connection with our services.
            </p>
            <p className="leading-relaxed text-gray-300">
              You are solely responsible for ensuring that the content you
              submit does not infringe on the intellectual property rights of
              others.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              Termination of Services
            </h2>
            <p className="leading-relaxed text-gray-300">
              We reserve the right to suspend or terminate your access to our
              services at our discretion, without notice, if we believe you are
              in violation of these Terms and Conditions.
            </p>
            <p className="leading-relaxed text-gray-300">
              If your account is terminated, you will lose access to all
              associated content and services.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              Limitation of Liability
            </h2>
            <p className="leading-relaxed text-gray-300">
              To the fullest extent permitted by law, the company shall not be
              liable for any direct, indirect, incidental, or consequential
              damages arising out of your use of our services. This includes,
              but is not limited to, any errors or omissions in content or any
              loss or damage incurred as a result of the use of our services.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="leading-relaxed text-gray-300">
              These Terms and Conditions are governed by and construed in
              accordance with the laws of India. Any disputes arising under
              these terms will be subject to the exclusive jurisdiction of the
              courts in India.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              Changes to These Terms
            </h2>
            <p className="leading-relaxed text-gray-300">
              We reserve the right to modify these Terms and Conditions at any
              time. If changes are made, we will notify users by updating the
              effective date at the bottom of this page. Your continued use of
              our services after any changes indicates acceptance of the new
              terms.
            </p>
            <p className="text-sm text-gray-400 mt-8">
              Last updated: September 18, 2024
            </p>
          </section>

          {/* Contact Information */}
          {/* <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="leading-relaxed text-gray-300">
              If you have any questions regarding these Terms and Conditions, please contact us at:{" "}
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
