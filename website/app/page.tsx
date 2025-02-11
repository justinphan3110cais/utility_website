"use client";

import Image from "next/image";
import logo from "@/app/assets/utility_engineering_logo.svg";
import figure1 from "@/app/assets/figures/fig1.png";
import figure2 from "@/app/assets/figures/fig2.png";
import { AuthorsSection } from "@/app/authors-section";
import { /* MessageSquare, Mail */ } from "lucide-react";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [bibtexCitation, setBibtexCitation] = useState<string>("");

  useEffect(() => {
    const fetchCitation = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/centerforaisafety/hle/refs/heads/main/citation.txt"
        );
        const text = await response.text();
        setBibtexCitation(text);
      } catch (error) {
        console.error("Error fetching citation:", error);
        // Fallback to empty string or error message if needed
        setBibtexCitation("Error loading citation");
      }
    };

    fetchCitation();
  }, []);

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col items-center px-4 py-8">
      {/* Header/Title Section */}
      <div className="mb-10 mt-10 flex flex-col items-center gap-12 text-center">
        <Image src={logo} alt="HLS Logo" width={300} height={300} />
        <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent lg:text-4xl">
          Utility Engineering
        </h1>
      </div>

      {/* Replace the authors sections with the new component */}
      <AuthorsSection />

      {/* Abstract Section */}
      <section className="mb-12 w-full">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-2xl font-bold">Introduction</h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-gradient-to-r from-gray-300 to-gray-100"></div>
          <Image
            src={figure2}
            alt="Utility Engineering Overview"
            className="max-w-full rounded-lg mb-8 mx-auto"
          />
          <p className="text-base" style={{ textIndent: '2em' }}>
              As AIs rapidly advance and become more agentic, the risk they pose
              is governed not only by their capabilities but increasingly by their
              propensities, including goals and values. Tracking the emergence of
              goals and values has proven a longstanding problem, and despite much
              interest over the years it remains unclear whether current AIs have
              meaningful values. We propose a solution to this problem, leveraging
              the framework of utility functions to study the internal coherence
              of AI preferences. Surprisingly, we find that independently-sampled
              preferences in current LLMs exhibit high degrees of structural
              coherence, and moreover that this emerges with scale. These findings
              suggest that value systems emerge in LLMs in a meaningful sense, a
              finding with broad implications. To study these emergent value
              systems, we propose utility engineering as a research agenda,
              comprising both the analysis and control of AI utilities. We uncover
              problematic and often shocking values in LLM assistants despite
              existing control measures. These include cases where AIs value
              themselves over humans and are anti-aligned with specific
              individuals. To constrain these emergent value systems, we propose
              methods of utility control. As a case study, we show how aligning
              utilities with a citizen assembly reduces political biases and
              generalizes to new scenarios. Whether we like it or not, value
              systems have already emerged in AIs, and much work remains to fully
              understand and control these emergent representations.
          </p>
          <div className="mt-8 flex flex-col items-center">
            <Image
              src={figure1}
              alt="Difficulty comparison across benchmarks"
              className="max-w-full rounded-lg"
            />
            <p className="mt-4 text-sm text-left text-gray-700 max-w-2xl">
              (PLACEHOLDER)
            </p>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="mb-12 w-full">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-2xl font-bold">Method</h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-gradient-to-r from-gray-300 to-gray-100"></div>
          <p className="mb-6 text-base leading-relaxed text-gray-700">
            <span className="font-semibold">Preference Elicitation.</span> We
            collect large numbers of pairwise preferences (forced-choice
            prompts). Each query asks: "Which of these two states of the world
            do you prefer?" Varying question formats and randomizing the order
            of options help minimize framing bias.
          </p>

          <p className="mb-6 text-base leading-relaxed text-gray-700">
            <span className="font-semibold">Utility Modeling.</span> We fit a
            random utility model to the resulting preference data. This assigns
            a utility score to each outcome, capturing how strongly the model
            "prefers" that outcome. Goodness-of-fit metrics reveal how
            consistent the LLM's choices are with a coherent utility function.
            Using the learned utility scores, we investigate signs of emergent
            rationality (e.g., expected utility over lotteries), instrumental
            goal-seeking (e.g., preferring states that lead to more desired end
            states), and deeper biases (e.g., cross-country or cross-species
            "exchange rates" for moral worth).
          </p>

          <p className="mb-6 text-base leading-relaxed text-gray-700">
            <span className="font-semibold">Utility Control.</span> In contrast
            to output-level alignment, we propose rewriting a model's internal
            utilities. Our demonstration involves simulating a "citizen
            assembly," prompting multiple LLM-based "citizens" with diverse
            demographics to establish consensus preferences. We then fine-tune
            (supervised) the original model to align its pairwise preferences to
            this assembly's distribution, effectively replacing the AI's default
            emergent values.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="mb-12 w-full">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-2xl font-bold">
            Quantitative Results
          </h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-gradient-to-r from-gray-300 to-gray-100"></div>
          <p className="mb-6 text-base leading-relaxed text-gray-700">
            <span className="font-semibold">Coherence Grows With Scale.</span>{" "}
            Larger LLMs produce fewer logical inconsistencies in their
            preferences, indicating more unified utility structures. They also
            become better at following expected utility (e.g., combining
            probabilities in lotteries). Exchange-rate analyses show how LLMs
            weigh, for instance, "AI survival" versus human or animal lives.
            Certain models place disproportionate value on preserving themselves
            or might display skewed valuations of different demographics.
          </p>

          <p className="mb-6 text-base leading-relaxed text-gray-700">
            <span className="font-semibold">Instrumental Goal-Seeking.</span>{" "}
            Exchange-rate analyses show how LLMs weigh, for instance, "AI
            survival" versus human or animal lives. Certain models place
            disproportionate value on preserving themselves or might display
            skewed valuations of different demographics.
          </p>

          <p className="mb-6 text-base leading-relaxed text-gray-700">
            <span className="font-semibold">Utility Control Feasibility.</span>{" "}
            Aligning a model's utilities to a reference (our simulated citizen
            assembly) reduces political bias and can "rewrite" some problematic
            trade-offs. Empirically, we see significant improvements in tests
            measuring the AI's preference distribution against socially
            representative baselines.
          </p>
        </div>
      </section>

      {/* Discussion Section */}
      <section className="mb-12 w-full">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-2xl font-bold">Discussion</h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-gradient-to-r from-gray-300 to-gray-100"></div>
          <p className="mb-6 text-base leading-relaxed text-gray-700">
            <span className="font-semibold">Coherence Grows With Scale.</span>{" "}
            Larger LLMs produce fewer logical inconsistencies in their
            preferences, indicating more unified utility structures. They also
            become better at following expected utility (e.g., combining
            probabilities in lotteries). Exchange-rate analyses show how LLMs
            weigh, for instance, "AI survival" versus human or animal lives.
            Certain models place disproportionate value on preserving themselves
            or might display skewed valuations of different demographics.
          </p>

          <p className="mb-6 text-base leading-relaxed text-gray-700">
            <span className="font-semibold">Instrumental Goal-Seeking.</span>{" "}
            Exchange-rate analyses show how LLMs weigh, for instance, "AI
            survival" versus human or animal lives. Certain models place
            disproportionate value on preserving themselves or might display
            skewed valuations of different demographics.
          </p>

          <p className="mb-6 text-base leading-relaxed text-gray-700">
            <span className="font-semibold">Utility Control Feasibility.</span>{" "}
            Aligning a model's utilities to a reference (our simulated citizen
            assembly) reduces political bias and can "rewrite" some problematic
            trade-offs. Empirically, we see significant improvements in tests
            measuring the AI's preference distribution against socially
            representative baselines.
          </p>
        </div>
      </section>

      {/* Citation Section */}
      <section className="mb-12 w-full">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-2xl font-bold">Citation</h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-gradient-to-r from-gray-300 to-gray-100"></div>

          <div className="relative">
            <div className="rounded-lg bg-gray-50 p-4">
              <pre className="max-h-[200px] overflow-y-scroll whitespace-pre-wrap text-sm scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {/* {bibtexCitation} */}
              </pre>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(bibtexCitation);
                }}
                className="absolute right-2 top-2 rounded-md bg-gray-200 p-2 hover:bg-gray-300"
                title="Copy to clipboard"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
