import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const useChatContext = () => useContext(ChatContext);

export function ChatContextProvider({ children }) {
    const [chatData, setChatData] = useState([]);

    return (
        <ChatContext.Provider value={{ chatData, setChatData }}>
            {children}
        </ChatContext.Provider>
    );
}
