import React from "react";
import { faqs } from "@/content/site";

const App = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="mx-auto max-w-4xl px-4 md:px-0">
      {faqs.map((faq, index) => (
        <div
          className="cursor-pointer border-b border-border/80 py-5"
          key={index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-[1.12rem] font-semibold text-foreground md:text-[1.22rem]">
              {faq.question}
            </h3>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                openIndex === index ? "rotate-180" : ""
              } shrink-0 transition-all duration-500 ease-in-out`}
            >
              <path
                d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                stroke="#3B2E2A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p
            className={`max-w-xl text-[0.98rem] leading-8 text-muted-foreground transition-all duration-500 ease-in-out md:text-[1.02rem] ${
              openIndex === index
                ? "max-h-[300px] translate-y-0 pt-4 opacity-100"
                : "max-h-0 -translate-y-2 overflow-hidden opacity-0"
            }`}
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
