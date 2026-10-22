
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  MdOutlineArrowOutward,
  MdOutlineMail,
  MdOutlineLocationOn,
} from "react-icons/md";
import { FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

const Contact = () => {
  const formRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message: "Message could not be sent. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen scroll-mt-20 bg-[#2E2F2B]
      px-4 py-16 text-white sm:px-6 sm:py-20
      lg:px-12 xl:px-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 font-mono text-sm tracking-[0.3em] text-gray-400">
            GET IN TOUCH
          </p>

          <h1 className="text-3xl font-bold tracking-tight
          sm:text-4xl md:text-5xl">
            Contact Me<span className="text-gray-400">.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm
          leading-7 text-gray-400 sm:text-base">
            Have a project in mind or want to work together?
            Feel free to send me a message.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5
        md:gap-8 lg:gap-10">

          {/* Contact Information */}
          <div className="flex flex-col rounded-2xl border
          border-white/10 bg-[#3B3B3B] p-5 sm:p-7
          md:col-span-2 md:p-8">

            <span className="mb-4 flex h-12 w-12 items-center
            justify-center rounded-xl border border-white/10
            bg-[#2E2F2B] text-2xl text-gray-200">
              <MdOutlineMail />
            </span>

            <h2 className="text-2xl font-semibold sm:text-3xl">
              Let's work together
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              I'm always open to discussing new projects,
              creative ideas or opportunities to be part of
              your vision.
            </p>

            <div className="my-7 h-px bg-white/10" />

            {/* Email */}
            <a
              href="mailto:mddastagir896@gmail.com"
              className="group flex min-w-0 items-start gap-3
              rounded-xl p-2 transition-colors
              hover:bg-white/5"
            >
              <span className="mt-1 text-xl text-gray-300">
                <MdOutlineMail />
              </span>

              <span className="min-w-0">
                <span className="block text-xs text-gray-400">
                  Email me
                </span>
                <span className="mt-1 block break-all text-sm
                font-medium text-gray-200">
                  mddastagir896@gmail.com
                </span>
              </span>

              <MdOutlineArrowOutward
                className="ml-auto mt-1 shrink-0 text-gray-400
                transition-transform group-hover:-translate-y-1
                group-hover:translate-x-1"
                size={18}
              />
            </a>

            {/* Location */}
            <div className="flex items-start gap-3 rounded-xl p-2">
              <MdOutlineLocationOn
                className="mt-1 shrink-0 text-xl text-gray-300"
              />
              <div>
                <p className="text-xs text-gray-400">Location</p>
                <p className="mt-1 text-sm text-gray-200">
                  India
                </p>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <p className="mb-4 font-mono text-xs tracking-widest
              text-gray-400">
                CONNECT WITH ME
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/md-dastgir"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-11 w-11 items-center
                  justify-center rounded-xl border
                  border-white/10 bg-[#2E2F2B] text-xl
                  transition-all hover:border-white/30
                  hover:bg-white/10"
                >
                  <FiGithub />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-11 w-11 items-center
                  justify-center rounded-xl border
                  border-white/10 bg-[#2E2F2B] text-xl
                  transition-all hover:border-white/30
                  hover:bg-white/10"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10
          bg-[#3B3B3B] p-5 sm:p-7 md:col-span-3 md:p-8">

            <div className="mb-7">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Send me a message
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Fill in the details below and I'll get back to you.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="from_name"
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  Your Name <span className="text-gray-400">*</span>
                </label>

                <input
                  id="from_name"
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className="w-full rounded-xl border border-white/10
                  bg-[#2E2F2B] px-4 py-3 text-sm text-white
                  placeholder:text-gray-500 outline-none
                  transition-all focus:border-gray-400
                  focus:ring-2 focus:ring-white/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="from_email"
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  Email Address <span className="text-gray-400">*</span>
                </label>

                <input
                  id="from_email"
                  type="email"
                  name="from_email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                  className="w-full rounded-xl border border-white/10
                  bg-[#2E2F2B] px-4 py-3 text-sm text-white
                  placeholder:text-gray-500 outline-none
                  transition-all focus:border-gray-400
                  focus:ring-2 focus:ring-white/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="from_message"
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  Your Message <span className="text-gray-400">*</span>
                </label>

                <textarea
                  id="from_message"
                  name="from_message"
                  rows={5}
                  maxLength={5000}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-y rounded-xl border
                  border-white/10 bg-[#2E2F2B] px-4 py-3
                  text-sm leading-6 text-white
                  placeholder:text-gray-500 outline-none
                  transition-all focus:border-gray-400
                  focus:ring-2 focus:ring-white/10"
                />
              </div>

              {/* Feedback */}
              {status.message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-lg border p-3 text-sm ${
                    status.type === "success"
                      ? "border-green-500/30 bg-green-500/10 text-green-300"
                      : "border-red-500/30 bg-red-500/10 text-red-300"
                  }`}
                >
                  {status.message}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="flex min-h-12 w-full items-center
                justify-center gap-2 rounded-xl bg-gray-200
                px-5 py-3 text-sm font-semibold text-[#2E2F2B]
                transition-all hover:bg-white
                focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-white
                disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Message"}

                {!isSending && <FiSend size={17} />}
              </button>

              <p className="text-center text-xs leading-5 text-gray-500">
                Your details will only be used to respond to your message.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
