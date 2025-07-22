import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

export default function FAQAccordionItem({text}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
      <button
        onClick={toggleAccordion}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
      >
        <span className="text-lg font-medium text-gray-900 pr-4">
          {text}
        </span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4 pt-2">
          <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
              At KDP Pro Publishers, our ghostwriting process is designed to be collaborative and transparent. Here's how it works:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Initial consultation to understand your vision and requirements</li>
              <li>Detailed outline creation and approval process</li>
              <li>Chapter-by-chapter writing with regular updates</li>
              <li>Multiple revision rounds to ensure your satisfaction</li>
              <li>Final manuscript delivery in your preferred format</li>
            </ul>
            <p className="mt-4">
              Throughout the process, you maintain complete ownership and creative control while our expert writers bring your ideas to life.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}