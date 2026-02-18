import React, { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Toast from "./Toast";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mvzzgoqp");
  const [toast, setToast] = useState(null);
  const formRef = useRef(null);

  // ✅ Success handler
  useEffect(() => {
  if (state.succeeded) {
    setToast({
      type: "success",
      message: "Message sent successfully 🎉",
    });

  }
  //Reset form
    formRef.current.reset();
    
}, [state.succeeded]);

// ❌ Error handler
  useEffect(() => {
    if (state.errors?.length && !state.submitting) {
      setToast({
        type: "error",
        message: "Something went wrong 😢 Please try again.",
      });
    }
  }, [state.errors, state.submitting]);

  return (
    <>
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <form
        ref={formRef}
        className="space-y-3"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border px-4 py-1 focus:border-amber-500 outline-none"
            placeholder="Your name"
          />
          <ValidationError style={{color: 'red', fontSize: '12px'}} prefix="Name" field="name" errors={state.errors} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border px-4 py-1 focus:border-amber-500 outline-none"
            placeholder="you@example.com"
          />
          <ValidationError style={{color: 'red', fontSize: '12px'}} prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            required
            className="mt-1 w-full rounded-lg border px-4 py-1 focus:border-amber-500 outline-none"
            placeholder="Tell us how we can help..."
          />
          <ValidationError style={{color: 'red', fontSize: '12px'}} prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-amber-500 hover:bg-amber-400 transition text-white py-2 rounded-lg flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
        >
          {state.submitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin-slow" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </>
  );
}









