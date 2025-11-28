import React from 'react';

export default function DecrementButton({ dataTarget }) {
    const commonClasses = "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100";

    return (
        <button
            type="button"
            id={`decrement-button-${dataTarget}`}
            data-input-counter-decrement={dataTarget}
            className={commonClasses}
        >
            <svg className="h-2.5 w-2.5 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
            </svg>
        </button>
    );
}