import { FileText } from "lucide-react";
import githubDark from "@/app/assets/external/github-mark.svg";
import { PAPER_URL, GITHUB_URL } from "@/app/constants";

export default function Sources() {

  return (
    <div className="flex justify-center gap-8 sm:gap-8 my-2">
      <div className="flex flex-col items-center sm:items-start">
        <a className="flex flex-col sm:flex-row items-center" href={PAPER_URL} target="_blank">
          <FileText className="mb-1 sm:mb-0 sm:mr-1.5 h-4 w-4" /> <b>Paper</b>
        </a>
        {/* <span className="text-muted-foreground text-xs text-center sm:text-left">(arXiv coming soon)</span> */}
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <a
          href={GITHUB_URL}
          target="_blank"
          className="inline-flex flex-col sm:flex-row items-center text-primary transition duration-300 hover:text-primary/80"
        >
          <img 
            src={githubDark.src}
            alt="GitHub" 
            className="mb-1 sm:mb-0 sm:mr-1.5 h-4 w-4" 
          /> 
          <b>GitHub</b>
        </a>
      </div>
    </div>
  );
} 