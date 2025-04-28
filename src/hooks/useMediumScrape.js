import { useState, useEffect } from 'react';
import { load } from 'cheerio';  // Use named import for cheerio's `load` function

const useMediumScrape = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const html = await response.text(); // Get the HTML content of the page
        const $ = load(html); // Load HTML into cheerio's load function

        // Find all collectionheader-description elements and extract text
        const descriptions = [];
        $('collectionheader-description').each((i, element) => {
          descriptions.push($(element).text());
        });

        setData(descriptions);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useMediumScrape;
