"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaX,
  FaXTwitter,
} from "react-icons/fa6";
import { Toaster } from "@/components/ui/sonner";

const sendEmail = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Email sent successfully" });
    }, 2000);
  });
};

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ContactPage() {
  const [pending, startTransition] = useState(false);

  const [forms, setForms] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    startTransition(true);
    try {
      const res = await sendEmail(forms);
      console.log(res);
      if (res.message) {
        toast.success(
          "We will keep in touch with you with the speed of light :)"
        );
        setForms({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      toast.error(
        "There was an error while submitting the form. Please try again later :("
      );
    } finally {
      startTransition(false);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="relative bg-neutral-950 text-slate-50 py-5 min-h-screen overflow-hidden"
    >
      <Toaster position="top-center" richColors />
      <Navbar />
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-12 relative z-10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Support</h1>
            <p className="text-xl text-gray-300">
              We&apos;d love to hear from you!
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="grid lg:grid-cols-2  gap-12"
          >
            <Card className="bg-gray-50/10 backdrop-blur-3xl border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Send us a message
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we&#39;ll get back to you as soon
                  as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-white">
                        First Name
                      </Label>
                      <Input
                        id="first-name"
                        name="firstName"
                        value={forms.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                        className="bg-gray-800/10 backdrop-blur-3xl/10 backdrop-blur-3xl border-gray-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-white">
                        Last Name
                      </Label>
                      <Input
                        id="last-name"
                        name="lastName"
                        value={forms.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="bg-gray-800/10 backdrop-blur-3xl border-gray-700 text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={forms.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-gray-800/10 backdrop-blur-3xl border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={forms.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                      className="bg-gray-800/10 backdrop-blur-3xl border-gray-700 text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={pending}
                    className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full"
                  >
                    {pending ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <ChevronRight className="mr-2 h-4 w-4" />
                    )}
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <motion.div variants={itemVariants} className=" text-white">
              <div class="lg:max-w-xl w-full h-[500px] flex items-center justify-center  bg-cover bg-no-repeat bg-[url('https://pagedone.io/asset/uploads/1696245837.png')] ">
                <div class="backdrop-filter backdrop-blur-3xl  rounded-xl">
                  <div class="lg:w-96 backdrop-filter w-auto h-auto bg-slate-950/80  rounded-xl shadow-xl lg:p-6 p-4">
                    <a href="tel:++919701365625" class="flex items-center mb-6">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                          stroke="#fff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <h5 class="text-slate-50 text-base font-normal leading-6 ml-5">
                        +91 97013 65625{" "}
                      </h5>
                    </a>
                    <a
                      href="mailto:support@mybezu.com"
                      class="flex items-center mb-6"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      <h5 class="text-slate-50 text-base font-normal leading-6 ml-5">
                        support@mybezu.com
                      </h5>
                    </a>

                    <div class="flex items-center justify-center border-t border-gray-100 pt-6 gap-5">
                      Socials:
                      <Link href="https://x.com/bezu_ai">
                        <FaXTwitter />
                      </Link>
                      <Link href="https://instagram.com/talktobezu">
                        <FaInstagram />
                      </Link>
                      <Link href="https://www.linkedin.com/company/bezu-ai">
                        <FaLinkedin />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </motion.div>
  );
}
