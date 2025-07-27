import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useRotatingQuotes from '../hooks/useRotatingQuotes';
import './QuoteDisplay.css';

const QuoteDisplay = () => {
  const { currentQuote, isLoading } = useRotatingQuotes();

  if (isLoading) {
    return (
      <div className="quote-container">
        <motion.div 
          className="quote-loading"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading inspiration...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="quote-container">
      <AnimatePresence mode="wait">
        {currentQuote && (
          <motion.div
            key={currentQuote.text}
            className="quote-wrapper"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ 
              duration: 0.8,
              ease: "easeInOut"
            }}
          >
            <motion.blockquote 
              className="quote-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              "{currentQuote.text}"
            </motion.blockquote>
            <motion.cite 
              className="quote-author"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              — {currentQuote.author}
            </motion.cite>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuoteDisplay;
