import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import SectionSeparator from "./SectionSeparator";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    type: "brand", // Default selection
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="w-full py-24 px-6 relative overflow-hidden bg-black"
    >
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your <span className="text-purple-500">Army?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Apply below to see if your brand or channel qualifies for our
            scaling infrastructure.
          </p>
        </div>

        <SectionSeparator width="max-w-xs" className="mb-12" />

        <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_60px_rgba(147,51,234,0.1)]">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Application Received
              </h3>
              <p className="text-gray-400">
                Our team will review your details and be in touch shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-4 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-4 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Type Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">
                  I am a...
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setFormState({ ...formState, type: "brand" })
                    }
                    className={`p-4 rounded-xl border text-sm font-semibold transition-all ${
                      formState.type === "brand"
                        ? "bg-purple-600 text-white border-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                        : "bg-black/50 text-gray-400 border-white/10 hover:border-purple-500/50"
                    }`}
                  >
                    Brand / Company
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormState({ ...formState, type: "creator" })
                    }
                    className={`p-4 rounded-xl border text-sm font-semibold transition-all ${
                      formState.type === "creator"
                        ? "bg-purple-600 text-white border-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                        : "bg-black/50 text-gray-400 border-white/10 hover:border-purple-500/50"
                    }`}
                  >
                    Content Creator
                  </button>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">
                  Tell us about your goals
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="We are looking to scale our views..."
                  className="w-full px-4 py-4 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600 resize-none"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-linear-to-r from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 text-white font-bold text-lg shadow-[0_0_30px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Processing...</span>
                ) : (
                  <>
                    Send Application <Send size={20} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
