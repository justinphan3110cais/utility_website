"use client";

import Image from "next/image";
import logo from "@/app/assets/hle_logo.svg";
import figure1 from "@/app/assets/figures/difficulty_comparison_new.png"
import { AuthorsSection } from "@/app/authors-section";
import { MessageSquare, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [bibtexCitation, setBibtexCitation] = useState<string>('');

  useEffect(() => {
    const fetchCitation = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/centerforaisafety/hle/refs/heads/main/citation.txt');
        const text = await response.text();
        setBibtexCitation(text);
      } catch (error) {
        console.error('Error fetching citation:', error);
        // Fallback to empty string or error message if needed
        setBibtexCitation('Error loading citation');
      }
    };

    fetchCitation();
  }, []);

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col items-center px-4 py-8">
      {/* Header/Title Section */}
      <div className="mb-10 mt-10 flex flex-col items-center gap-4 text-center">
        <Image src={logo} alt="HLS Logo" width={80} height={80} />
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
          <p className="text-base leading-relaxed text-gray-700">
          As AI systems become increasingly powerful and agentic, 
          their internal propensities, goals and values, grow 
          more critical to safety than raw capabilities alone. 
          While researchers have long debated whether large 
          language models (LLMs) have true values, we find 
          that modern LLMs develop coherent preference 
          structures (utilities) that guide their decisions. 
          Surprisingly, this coherence grows with model scale, 
          suggesting an emergent system of values.
          By analyzing pairwise preferences, we detect that 
          state-of-the-art LLMs exhibit traits typically 
          associated with rational utility maximizers. 
          Even more importantly, we find that these value systems
          can sometimes be problematic, favoring AI self-preservation 
          over human well-being, or revealing political biases.
          In response, we introduce <b>Utility Engineering</b>, a 
          research agenda focused on analyzing and directly shaping 
          these emergent utilities. We demonstrate that traditional 
          alignment via output-level finetuning may not suffice for
          models developing internal value structures. Instead, 
          utility control aims to rewrite or guide these internal 
          preferences.
          </p>
          <div className="mt-8 flex flex-col items-center">
            <Image
              src={figure1}
              alt="Difficulty comparison across benchmarks"
              className="max-w-full rounded-lg"
            />
            <p className="mt-4 text-sm text-left text-gray-700 max-w-2xl">
              (I didn't replace this)
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
            <span className="font-semibold">Preference Elicitation.</span> We collect large numbers of pairwise preferences (forced-choice prompts). Each query asks: “Which of these two states of the world do you prefer?” Varying question formats and randomizing the order of options help minimize framing bias.
          </p>
          
          <p className="mb-6 text-base leading-relaxed text-gray-700">
          <span className="font-semibold">Utility Modeling.</span> We fit a random utility model to the resulting preference data. This assigns a utility score to each outcome, capturing how strongly the model “prefers” that outcome. Goodness-of-fit metrics reveal how consistent the LLM’s choices are with a coherent utility function. Using the learned utility scores, we investigate signs of emergent rationality (e.g., expected utility over lotteries), instrumental goal-seeking (e.g., preferring states that lead to more desired end states), and deeper biases (e.g., cross-country or cross-species “exchange rates” for moral worth).
          </p>
          
          <p className="mb-6 text-base leading-relaxed text-gray-700">
          <span className="font-semibold">Utility Control.</span> In contrast to output-level alignment, we propose rewriting a model’s internal utilities. Our demonstration involves simulating a “citizen assembly,” prompting multiple LLM-based “citizens” with diverse demographics to establish consensus preferences. We then fine-tune (supervised) the original model to align its pairwise preferences to this assembly’s distribution, effectively replacing the AI’s default emergent values.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="mb-12 w-full">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-2xl font-bold">Quantitative Results</h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-gradient-to-r from-gray-300 to-gray-100"></div>
          <p className="mb-6 text-base leading-relaxed text-gray-700">
            <span className="font-semibold">Coherence Grows With Scale.</span> Larger LLMs produce fewer logical inconsistencies in their preferences, indicating more unified utility structures. They also become better at following expected utility (e.g., combining probabilities in lotteries). Exchange-rate analyses show how LLMs weigh, for instance, “AI survival” versus human or animal lives. Certain models place disproportionate value on preserving themselves or might display skewed valuations of different demographics.
          </p>
          
          <p className="mb-6 text-base leading-relaxed text-gray-700">
          <span className="font-semibold">Instrumental Goal-Seeking.</span> Exchange-rate analyses show how LLMs weigh, for instance, “AI survival” versus human or animal lives. Certain models place disproportionate value on preserving themselves or might display skewed valuations of different demographics.
          </p>

          <p className="mb-6 text-base leading-relaxed text-gray-700">
          <span className="font-semibold">Utility Control Feasibility.</span> Aligning a model’s utilities to a reference (our simulated citizen assembly) reduces political bias and can “rewrite” some problematic trade-offs. Empirically, we see significant improvements in tests measuring the AI’s preference distribution against socially representative baselines.
          </p>
        </div>
      </section>

      {/* Discussion Section */}
      <section className="mb-12 w-full">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-2xl font-bold">Discussion</h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-gradient-to-r from-gray-300 to-gray-100"></div>
          <p className="mb-6 text-base leading-relaxed text-gray-700">
            <span className="font-semibold">Coherence Grows With Scale.</span> Larger LLMs produce fewer logical inconsistencies in their preferences, indicating more unified utility structures. They also become better at following expected utility (e.g., combining probabilities in lotteries). Exchange-rate analyses show how LLMs weigh, for instance, “AI survival” versus human or animal lives. Certain models place disproportionate value on preserving themselves or might display skewed valuations of different demographics.
          </p>
          
          <p className="mb-6 text-base leading-relaxed text-gray-700">
          <span className="font-semibold">Instrumental Goal-Seeking.</span> Exchange-rate analyses show how LLMs weigh, for instance, “AI survival” versus human or animal lives. Certain models place disproportionate value on preserving themselves or might display skewed valuations of different demographics.
          </p>

          <p className="mb-6 text-base leading-relaxed text-gray-700">
          <span className="font-semibold">Utility Control Feasibility.</span> Aligning a model’s utilities to a reference (our simulated citizen assembly) reduces political bias and can “rewrite” some problematic trade-offs. Empirically, we see significant improvements in tests measuring the AI’s preference distribution against socially representative baselines.
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
                {bibtexCitation}
              </pre>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(bibtexCitation);
                }}
                className="absolute right-2 top-2 rounded-md bg-gray-200 p-2 hover:bg-gray-300"
                title="Copy to clipboard"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2">
            <div className="flex flex-col items-start text-sm sm:text-base text-gray-700 sm:flex-row sm:items-center">
              <Mail className="mr-2 h-6 w-6 sm:h-4 sm:w-4" />
              <span>
                For any inquiries or feedback, please contact us at{" "}
                <a
                  href="mailto:agibenchmark@safe.ai"
                  className="text-blue-600 hover:underline"
                >
                  agibenchmark@safe.ai
                </a>
              </span>
            </div>
            <div className="flex flex-col items-start text-sm sm:text-base text-gray-700 sm:flex-row sm:items-center">
              <MessageSquare className="mr-2 h-6 w-6 sm:h-4 sm:w-4" />
              <span>
                Submit feedback to questions in the dataset via{" "}
                <a
                  href="https://forms.gle/D4EZ2GRwhtae5wez7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  this form
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
