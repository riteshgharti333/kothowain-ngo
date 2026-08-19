"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCopy,
  FiCheck,
  FiShield,
  FiCreditCard,
  FiSmartphone,
  FiArrowRight,
  FiHeart,
  FiDroplet,
  FiBookOpen,
  FiHome,
  FiActivity,
  FiAlertCircle,
} from "react-icons/fi";
import HeadingWithPaint from "./HeadingWithPaint";

const Donate = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [purpose, setPurpose] = useState("where-needed");
  const [copied, setCopied] = useState<string | null>(null);

  const presetAmounts = [500, 1000, 2500, 5000, 10000];

  const purposes = [
    { value: "where-needed", label: "Where Needed Most", icon: FiHome },
    { value: "food", label: "Food Security", icon: FiHeart },
    { value: "water", label: "Water & Sanitation", icon: FiDroplet },
    { value: "education", label: "Education", icon: FiBookOpen },
    { value: "healthcare", label: "Healthcare", icon: FiActivity },
    { value: "emergency", label: "Emergency Relief", icon: FiAlertCircle },
  ];

  const mobileBanking = [
    { name: "bKash", number: "+880 1700-000000" },
    { name: "Nagad", number: "+880 1800-000000" },
    { name: "Rocket", number: "+880 1900-000000" },
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    if (e.target.value) {
      setAmount(parseInt(e.target.value) || 0);
    }
  };

  const impactMessages: Record<number, string> = {
    500: "Feeds 25 families for a day",
    1000: "Provides meals for 50 families",
    2500: "Supports a classroom for a month",
    5000: "Funds clean water for 100 people",
    10000: "Sponsors a child's education for a year",
  };

  return (
    <section className="py-[50px] bg-cream-100 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border-[40px] border-amber-500/5 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-teal-950/5 pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-2 sm:px-5 md:px-6 lg:px-10 relative">
        {/* Section Head */}
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
              Donate now
            </span>
            <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <HeadingWithPaint
              text="Make a difference today"
              className="justify-center"
            />
          </motion.div>
        </div>

        {/* Main Donation Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-20px_rgba(21,36,32,0.15)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-[0.35fr_1fr]">
            {/* Left Teal Sidebar */}
            <div className="bg-teal-950 p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center mb-6">
                  <FiHeart className="w-6 h-6 text-teal-950" />
                </div>
                <h3 className="font-display text-2xl text-cream-50 font-semibold leading-tight mb-2">
                  Your gift
                  <br />
                  changes lives
                </h3>
                <p className="text-cream-50/60 text-sm leading-relaxed">
                  Every donation, big or small, helps communities thrive.
                </p>
              </div>

              {/* Impact preview */}
              <div className="mt-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={amount}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-cream-50/5 rounded-xl p-4"
                  >
                    <div className="text-amber-400 font-display text-2xl font-bold">
                      ৳{amount.toLocaleString()}
                    </div>
                    <div className="text-cream-50/50 text-xs mt-1">
                      {impactMessages[amount] ||
                        "Your generous support creates lasting change"}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Form */}
            <div className="p-8 lg:p-10">
              {/* Amount */}
              <div className="mb-8">
                <label className="text-sm font-semibold text-teal-950 mb-4 block">
                  Choose amount
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-4">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => handleAmountClick(preset)}
                      className={`py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        amount === preset && !customAmount
                          ? "bg-amber-500 text-teal-950 shadow-lg shadow-amber-500/30"
                          : "bg-cream-50 text-ink-soft hover:bg-amber-50"
                      }`}
                    >
                      ৳{preset.toLocaleString()}
                    </button>
                  ))}
                </div>
                <div className="relative max-w-[200px]">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-ink-soft font-semibold">
                    ৳
                  </span>
                  <input
                    type="number"
                    placeholder="Custom"
                    value={customAmount}
                    onChange={handleCustomAmount}
                    className="w-full py-3.5 pl-12 pr-4 rounded-xl bg-cream-50 text-teal-950 font-medium text-sm outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                  />
                </div>
              </div>

              {/* Purpose */}
              <div className="mb-8">
                <label className="text-sm font-semibold text-teal-950 mb-4 block">
                  Donation purpose
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {purposes.map((p) => (
                    <button
                      key={p.value}
                      onClick={() => setPurpose(p.value)}
                      className={`flex flex-col items-center gap-2 py-3.5 px-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                        purpose === p.value
                          ? "bg-teal-950 text-cream-50 shadow-lg"
                          : "bg-cream-50 text-ink-soft hover:bg-amber-50"
                      }`}
                    >
                      <p.icon
                        className={`w-5 h-5 ${purpose === p.value ? "text-amber-400" : "text-teal-700"}`}
                      />
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Donor Info */}
              <div className="mb-8">
                <label className="text-sm font-semibold text-teal-950 mb-4 block">
                  Your information
                </label>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full py-4 px-5 rounded-xl bg-cream-50 text-teal-950 text-sm outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full py-4 px-5 rounded-xl bg-cream-50 text-teal-950 text-sm outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full py-4 px-5 rounded-xl bg-cream-50 text-teal-950 text-sm outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Donate Button */}
              <button className="group relative w-full py-4.5 rounded-xl bg-amber-500 text-teal-950 font-bold text-base overflow-hidden transition-all duration-300 hover:bg-teal-950 hover:text-amber-400 hover:shadow-xl active:scale-95">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2.5">
                  Donate ৳{amount.toLocaleString()}
                  <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>

              {/* Secure */}
              <div className="flex items-center justify-center gap-2 mt-5 text-ink-soft text-xs">
                <FiShield className="w-4 h-4 text-teal-700" />
                Your donation is secure and handled responsibly.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Banking - Always visible */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 bg-teal-950 rounded-[2rem] p-7 text-cream-50"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
              <FiSmartphone className="w-5 h-5 text-teal-950" />
            </div>
            <h3 className="font-display text-lg font-semibold">
              Mobile Banking
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {mobileBanking.map((bank) => (
              <div key={bank.name} className="bg-cream-50/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm">{bank.name}</span>
                  <button
                    onClick={() => handleCopy(bank.number, bank.name)}
                    className="text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    {copied === bank.name ? (
                      <FiCheck className="w-4 h-4" />
                    ) : (
                      <FiCopy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <div className="text-cream-50/70 text-sm">{bank.number}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bank Transfer - Always visible */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 bg-white rounded-[2rem] p-7 border border-teal-950/5"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-teal-950 flex items-center justify-center">
              <FiCreditCard className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="font-display text-lg font-semibold text-teal-950">
              Bank Transfer
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "Account Name", value: "Kothowain Foundation" },
              { label: "Bank", value: "Dutch-Bangla Bank" },
              { label: "Account No", value: "1234567890123" },
              { label: "Routing No", value: "123456789" },
              { label: "SWIFT", value: "DBBLBDDH" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-center py-3 px-4 rounded-xl bg-cream-50"
              >
                <span className="text-ink-soft text-xs">{item.label}</span>
                <span className="font-semibold text-teal-950 text-sm">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donate;
