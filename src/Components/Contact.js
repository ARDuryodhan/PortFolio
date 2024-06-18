import React from "react";

function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
      <p className="text-lg mb-6 text-center">
        If you have any query or would like to get in touch, please feel free to
        reach out using the form below.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:w-[60vw] xl:w-[50vw] m-auto border border-black rounded-lg shadow-black shadow-lg bg-gradient-to-r from-orange-600 to-red-600 focus:outline-none">
        <div className="flex flex-col justify-center border-r-2 text-black text-center p-6">
          <h3 className="text-2xl font-bold mb-4">My Contact Details</h3>
          <p className="text-lg mb-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:adityard009@gmail.com"
              className="text-white underline"
            >
              adityard009@gmail.com
            </a>
          </p>
          <p className="text-lg mb-2 text-white">
            <strong className="text-black">Phone:</strong> +91 9527874625
          </p>
        </div>
        <div className="px-4 py-5">
          <form
            action="https://formspree.io/f/yourformendpoint"
            method="POST"
            className="space-y-6 px-3 py-1"
          >
            <div>
              <label
                className="block text-black text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-2.5  border-b-2 bg-transparent rounded-md focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                className="block text-black text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-2.5 border-b-2 bg-transparent rounded-md focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                className="block text-black text-sm font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-2.5 py-2 border-t-[0.5px] border-b-2 bg-transparent rounded-md focus:outline-none"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-white-950 border-black border-t-2  text-black font-semibold rounded-md hover:bg-white hover:border-b-0 focus:outline-none "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
