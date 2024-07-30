"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import EmailComponent from "@/components/ui/icons/email";

const SignupWidget = ({
  title,
  content,
  simulateNetworkRequestTime = 2000,
}) => {
  // State to manage the email input and messages
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setBusy(true);
      // Wait simulateNetworkRequestTime milliseconds (simulating a network request)
      await new Promise((resolve) =>
        setTimeout(resolve, simulateNetworkRequestTime)
      );
      setMessage(`Thanks for subscribing, ${email}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col justify-center rounded-2xl border border-zinc-100 p-6">
      <div className="flex items-center gap-3">
        <EmailComponent
          className={
            "stroke-zinc-400 fill-slate-100 stroke-2 dark:stroke-zinc-500 dark:fill-zinc-100/5 animate-bounce"
          }
        />
        <h2 className="font-bold text-zinc-900 dark:text-zinc-100">{title}</h2>
      </div>
      <div className="pt-2 text-sm dark:text-zinc-400">{content}</div>
      {isSubscribed && (
        <p data-testid={"signupWidgetMessage"} className={"message"}>
          {message}
        </p>
      )}
      <form
        data-testid={"signupWidget"}
        className={"signup-widget flex w-full gap-4 pt-6"}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        {!isSubscribed && (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid={"signupWidgetInput"}
              className="w-full gap-1 rounded-md border border-zinc-900/10 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              disabled={busy}
            />
            <button
              type="submit"
              disabled={busy}
              data-testid={"signupWidgetButton"}
              className="rounded-md bg-teal-500 px-4 py-2 text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-500"
            >
              {busy ? "Joining..." : "Join"}
            </button>
          </>
        )}
      </form>
    </div>
  );
};

SignupWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  simulateNetworkRequestTime: PropTypes.number,
};

export default SignupWidget;
