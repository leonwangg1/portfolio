import { useState, useEffect } from "react";

import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

import "./Articles.css";

const mediumArticle =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@leonwangg";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(mediumArticle)
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);

  return (
    <div className="py-8 px-10 lg:px-64">
      <Analytics />
      <header className="mb-20 z-50">
        <Navbar />
      </header>
      <p className="mb-10 text-[1.5rem] md:text-[1.7rem] lg:text-4xl font-medium">
        Blog
      </p>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-screen grid-rows-3">
          {articles.map((article, index) => {
            return <ArticleItems key={index} article={article} index={index} />;
          })}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

// Function to extract content from HTML string using regex patterns
function extractContent(htmlString: string) {
  // Define regex patterns to match <h4> and <p> tags
  const h4Pattern = /<h4>(.*?)<\/h4>/s;
  const pPattern = /<p>(.*?)<\/p>/s;

  // Attempt to match patterns in the HTML string
  const h4Match = htmlString.match(h4Pattern);
  const pMatch = htmlString.match(pPattern);

  // If both <h4> and <p> tags are found, combine their content
  if (h4Match && pMatch) {
    const h4Content = h4Match[1];
    const pContent = pMatch[1];
    return `${h4Content} - ${pContent}`;
  } else if (pMatch) {
    // If only a <p> tag is found, use its content
    const pContent = pMatch[1];
    return pContent;
  }
  // Return null if no suitable content is found
  return null;
}

// Function to format a given date string
function formatDate(inputText: string) {
  const inputDate = new Date(inputText);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  // @ts-expect-error - toLocaleDateString is not recognized by TypeScript
  return inputDate.toLocaleDateString(undefined, options);
}

// Component to render article items
interface Article {
  title: string;
  description: string;
  pubDate: string;
  thumbnail: string;
  link: string;
}

function ArticleItems({ article, index }: { article: Article; index: number }) {
  // Extract content and format date for rendering
  const content = extractContent(article.description);
  const formattedDate = formatDate(article.pubDate);

  return (
    <div className="article__card p-4 mb-2 h-fit rounded-md" key={index}>
      <h3 className="article__title mb-[0.5rem] text-[1rem] md:text-[1.1rem] lg:text-md font-semibold">
        {article.title}
      </h3>
      <p className="article__date">{formattedDate}</p>
      <p className="article__description">{content}</p>

      <div className="article__details text-right">
        <a href={article.link} target="_blank" className="text-[#666]">
          Read more
        </a>
      </div>
    </div>
  );
}
