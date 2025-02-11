"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AuthorsSection() {
  const [showAuthors, setShowAuthors] = useState(false);

  const authorGroups = {
    firstLine: [
      { name: "Long Phan", sup: "*1", link: "https://longphan.ai" },
      { name: "Alice Gatti", sup: "*1", link: "https://scholar.google.com/citations?user=Wm-EioQAAAAJ&hl=it&oi=ao" },
      { name: "Ziwen Han", sup: "*2", link: "https://scholar.google.com/citations?user=Jmbr0B8AAAAJ&hl=en" },
      { name: "Nathaniel Li", sup: "*1", link: "https://nli0.github.io" },
    ],
    secondLine: [
      { name: "Josephina Hu", sup: "2", link: "" },
      { name: "Hugh Zhang", sup: "‡", link: "https://hughbzhang.com" },
      { name: "Sean Shi", sup: "2", link: "" },
      { name: "Michael Choi", sup: "2", link: "" },
      { name: "Anish Agrawal", sup: "2", link: "" },
      { name: "Arnav Chopra", sup: "2", link: "" },
    ],
    thirdLine: [
      { name: "Adam Khoja", sup: "1", link: "" },
      { name: "Ryan Kim", sup: "†", link: "" },
      { name: "Richard Ren", sup: "1", link: "https://notrichardren.github.io" },
      { name: "Jason Hausenloy", sup: "1", link: "" },
      { name: "Oliver Zhang", sup: "1", link: "" },
      { name: "Mantas Mazeika", sup: "1", link: "https://scholar.google.com/citations?user=fGeEmLQAAAAJ&hl=en" },
    ],
    lastLine: [
      { name: "Summer Yue", sup: "**2", link: "https://www.linkedin.com/in/yutingyue" },
      { name: "Alexandr Wang", sup: "**2", link: "https://www.linkedin.com/in/alexandrwang" },
      { name: "Dan Hendrycks", sup: "**1", link: "https://people.eecs.berkeley.edu/~hendrycks" },
    ],
  };

  const renderAuthors = (authors: { name: string; sup: string; link: string }[]) => {
    return authors.map((author, index) => (
      <span key={author.name} className="whitespace-nowrap inline-block">
        {author.link ? (
          <a 
            href={author.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 hover:underline"
          >
            {author.name}
          </a>
        ) : (
          author.name
        )}
        <sup>{author.sup}</sup>
        {index < authors.length - 1 ? ", " : ""}
      </span>
    ));
  };

  return (
    <>
      {/* Single button for Authors Section */}
      <div className="mb-8 w-full flex justify-center">
        <Button
          onClick={() => setShowAuthors(!showAuthors)}
          variant="outline"
          className="flex items-center gap-2 px-4 py-1.5"
        >
          <span className="text-sm">Authors</span>
          {showAuthors ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Authors content */}
      <div className="w-full">
        <div
          className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
            showAuthors ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-4xl rounded-lg p-6 text-center">
            <p className="text-sm">{renderAuthors(authorGroups.firstLine)}</p>
            <p className="mt-2 text-sm">
              {renderAuthors(authorGroups.secondLine)}
            </p>
            <p className="mt-2 text-sm">
              {renderAuthors(authorGroups.thirdLine)}
            </p>
            <p className="mt-2 text-sm">
              {renderAuthors(authorGroups.lastLine)}
            </p>
            <p className="mt-4 text-sm font-semibold text-gray-700">
              <sup>1</sup>Center for AI Safety, <sup>2</sup>Scale AI
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 