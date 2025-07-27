import { useState, useEffect } from 'react';

const useRotatingQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch quotes from the JSON file
    const fetchQuotes = async () => {
      try {
        const response = await fetch('/quotes.json');
        const quotesData = await response.json();
        setQuotes(quotesData);
        
        // Set initial random quote
        if (quotesData.length > 0) {
          const randomIndex = Math.floor(Math.random() * quotesData.length);
          setCurrentQuote(quotesData[randomIndex]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching quotes:', error);
        setIsLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  useEffect(() => {
    if (quotes.length === 0) return;

    // Set up interval to change quote every minute (60000ms)
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    }, 60000);

    return () => clearInterval(interval);
  }, [quotes]);

  return { currentQuote, isLoading };
};

export default useRotatingQuotes;
