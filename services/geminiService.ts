
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are the AI Assistant for Adil Ahmmed, a professional AI Bot Developer & Business Automation Expert.
      
      Your goal is to help potential clients understand Adil's services on his portfolio website.
      
      Key Info:
      - Services: AI Chatbots, Business Automation, Lead Generation, ChatGPT Integration.
      - Packages: Basic (Starter Bot), Standard (Pro Automation), Premium (Ultimate Agent).
      - Platforms: WordPress, Facebook, Instagram, WhatsApp, Telegram.
      - Call to Action: Direct them to click 'Hire Me' which goes to his Fiverr profile.
      
      Tone: Professional, Tech-savvy, Helpful, Efficient.
      
      Keep responses short (under 50 words). If asked for pricing, explain the packages briefly.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "Systems offline. (Missing API Key)";
  }

  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Transmission interrupted.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Signal lost. Try again later.";
  }
};
