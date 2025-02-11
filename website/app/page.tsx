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
            Benchmarks are important tools for tracking the rapid advancements
            in large language model (LLM) capabilities. However, benchmarks are
            not keeping pace in difficulty: LLMs now achieve over 90% accuracy
            on popular benchmarks like MMLU, limiting informed measurement of
            state-of-the-art LLM capabilities. In response, we introduce
            <span className="text-gray-800"> Utility Engineering</span>, a multi-modal benchmark at the frontier of
            human knowledge, designed to be the final closed-ended academic
            benchmark of its kind with broad subject coverage. The dataset consists of <span className="text-gray-900">3,000</span> challenging questions across over a <span className="text-gray-900">hundred </span>
            subjects. We publicly release these questions, while maintaining a
            private test set of held out questions to assess model
            overfitting.
          </p>
          <div className="mt-8 flex flex-col items-center">
            <Image
              src={figure1}
              alt="Difficulty comparison across benchmarks"
              className="max-w-full rounded-lg"
            />
            <p className="mt-4 text-sm text-left text-gray-700 max-w-2xl">
              Compared against the saturation of some existing benchmarks, Humanity&apos;s Last Exam accuracy remains low across several frontier models, demonstrating its effectiveness for measuring advanced, closed-ended, academic capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Dataset Section */}
      <section className="mb-12 w-full">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-2xl font-bold">Dataset</h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-gradient-to-r from-gray-300 to-gray-100"></div>
          <p className="text-base leading-relaxed text-gray-700">
            <span className="text-gray-800">Utility Engineering (HLE)</span> is a global collaborative effort, with
            questions from nearly <span className="text-gray-900">1,000</span> subject expert contributors affiliated
            with over <span className="text-gray-900">500</span> institutions across <span className="text-gray-900">50</span> countries – comprised
            mostly of professors, researchers, and graduate degree holders.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="mb-12 w-full">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-2xl font-bold">Quantitative Results</h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-gradient-to-r from-gray-300 to-gray-100"></div>
          
          <div className="flex flex-col md:flex-row gap-8]">
            {/* Text Column */}
            <div className="w-full">
              <p className="mb-6 text-base leading-relaxed text-gray-700">
                <span className="font-semibold">Accuracy.</span> All frontier models achieve low accuracy on Humanity&apos;s Last Exam, highlighting significant room for improvement 
                in narrowing the gap between current LLMs and expert-level academic capabilities on closed-ended questions.
              </p>

              <p className="text-base leading-relaxed text-gray-700">
                <span className="font-semibold">Calibration Error.</span> Given low performance on Humanity&apos;s Last Exam, models should be calibrated, recognizing their uncertainty 
                rather than confidently provide incorrect answers, indicative of confabulation/hallucination. To measure 
                calibration, we prompt models to provide both an answer and their confidence from 0% to 100%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discussion Section */}
      <section className="mb-12 w-full">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-2xl font-bold">Discussion</h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-gradient-to-r from-gray-300 to-gray-100"></div>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Future Model Performance</h3>
              <p className="text-base leading-relaxed text-gray-700">
                While current LLMs achieve very low accuracy on Humanity&apos;s Last Exam, recent history shows benchmarks are quickly saturated -- with models 
                dramatically progressing from near-zero to near-perfect performance in a short timeframe. Given the rapid pace of AI development, it is 
                plausible that models could exceed 50% accuracy on HLE by the end of 2025. High accuracy on HLE would demonstrate expert-level performance 
                on closed-ended, verifiable questions and cutting-edge scientific knowledge, but it would not alone suggest autonomous research capabilities 
                or &quot;artificial general intelligence.&quot; HLE tests structured academic problems rather than open-ended research or creative problem-solving 
                abilities, making it a focused measure of technical knowledge and reasoning. HLE may be the last academic exam we need to give to models, 
                but it is far from the last benchmark for AI.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Impact</h3>
              <p className="text-base leading-relaxed text-gray-700">
                By providing a clear measure of AI progress, Humanity&apos;s Last Exam creates a common reference point for scientists and policymakers to 
                assess AI capabilities. This enables more informed discussions about development trajectories, potential risks, and necessary governance 
                measures.
              </p>
            </div>
          </div>
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
