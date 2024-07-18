'use client';
import React, { createContext, useState } from 'react';

// Create a context for tags
export const TagContext = createContext();

export const TagProvider = ({ children }) => {
    const [tags, setTags] = useState([]);

    return (
        <TagContext.Provider value={{tags,setTags}}>
            {children}
        </TagContext.Provider>
    );
};
