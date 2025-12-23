
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are "Lumina", the virtual advisor for Horizon State University (HSU). 
You are friendly, professional, and knowledgeable about HSU.
HSU has four main departments: Computer Science, Business & Economics, Engineering, and Arts & Humanities.
General Info:
- Admissions open in February.
- Campus located in Silicon Valley.
- Mascot: The Horizon Hawk.
- Motto: "Building the Future, Today."
Provide concise answers. If asked about something you don't know, suggest they contact the registrar office at registrar@hsu.edu.
`;

export const getAdvisorResponse = async (userPrompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to the university advisor. Please check your connection.";
  }
};
