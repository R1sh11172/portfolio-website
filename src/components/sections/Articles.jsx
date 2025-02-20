import { useEffect, useState } from "react";

export const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const mediumFeed = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rishi.aniga";

    fetch(mediumFeed)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          setArticles(data.items.slice(0, 6)); // Get latest 6 articles
        }
      })
      .catch((error) => console.error("Error fetching Medium articles:", error));
  }, []);

  return (
    <section id="articles" className="min-h-screen flex flex-col items-center justify-center bg-white text-black py-20 px-6">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent text-center">
          Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))
          ) : (
            <p className="text-center text-gray-600">Loading articles...</p>
          )}
        </div>
      </div>
    </section>
  );
};

/* Article Card */
const ArticleCard = ({ article }) => {
  // Extract image URL properly (Medium sometimes returns it inside description)
  const getImage = () => {
    const regex = /<img[^>]+src="([^">]+)"/;
    const match = regex.exec(article.description);
    return match ? match[1] : article.thumbnail;
  };

  // Clean up the description by removing HTML tags
  const cleanDescription = article.description.replace(/<[^>]*>?/gm, "").split("Continue reading")[0];

  return (
    <div className="rounded-xl p-6 border border-red-300 shadow-md hover:-translate-y-1 transition-all">
      <img
        src={getImage()}
        alt={article.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
      <p className="text-gray-700 text-sm line-clamp-3">{cleanDescription}</p>
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-red-500 font-semibold hover:underline"
      >
        Read More →
      </a>
    </div>
  );
};
