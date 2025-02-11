"use client";

export function AuthorsSection() {
  const authorGroups = {
    firstLine: [
      { name: "Mantas Mazeika", sup: "1", link: "https://scholar.google.com/citations?user=fGeEmLQAAAAJ&hl=en" },
      { name: "Xuwang Yin", sup: "1", link: "https://scholar.google.com/citations?user=c425B6UAAAAJ&hl=zh-CN" },
      { name: "Rishub Tamirisa", sup: "1", link: "https://rishub-tamirisa.github.io/research" },
      { name: "Jaehyuk Lim", sup: "2", link: "https://www.linkedin.com/in/jasonlim131/" },
      { name: "Bruce W. Lee", sup: "2", link: "https://brucewlee.com/" },
    ],
    secondLine: [
      { name: "Richard Ren", sup: "2", link: "https://notrichardren.github.io" },
      { name: "Long Phan", sup: "1", link: "https://longphan.ai/" },
      { name: "Norman Mu", sup: "3", link: "https://www.normanmu.com/" },
      { name: "Adam Khoja", sup: "1", link: "https://www.linkedin.com/in/adam-khoja-103/" },
      { name: "Oliver Zhang", sup: "1", link: "https://www.linkedin.com/in/oliver-z-30a16812a/" },
      { name: "Dan Hendrycks", sup: "1", link: "https://people.eecs.berkeley.edu/~hendrycks/" },
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
    <div className="w-full text-base">
      <div className="w-full">
        <div className="mx-auto max-w-4xl rounded-lg p-6 text-center">
          <p className="text-base">{renderAuthors(authorGroups.firstLine)}</p>
          <p className="mt-2 text-base">
            {renderAuthors(authorGroups.secondLine)}
          </p>
          <p className="mt-4 text-sm font-semibold text-gray-700">
            <sup>1</sup>Center for AI Safety, <sup>2</sup>University of Pennsylvania, <sup>3</sup>University of California, Berkeley
          </p>
        </div>
      </div>
    </div>
  );
} 
