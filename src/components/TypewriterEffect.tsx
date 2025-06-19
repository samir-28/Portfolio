
import { useEffect, useState } from 'react';

const TypewriterEffect = () => {
  const titles = ['Student','Django Developer', 'Quick Learner', 'Tech Enthusiast', 'Sport Enthusiast'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex, titles]);

  return <span>{currentText}</span>;
};

export default TypewriterEffect;
