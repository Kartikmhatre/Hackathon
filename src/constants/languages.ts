// Complete list of supported languages
export const ALL_LANGUAGES = [
  "Afrikaans",
  "Arabic",
  "Chinese",
  "Danish",
  "Dutch",
  "English (AU)",
  "English (CA)",
  "English (UK)",
  "English (US)",
  "French",
  "German",
  "Hindi",
  "Indonesian",
  "Italian",
  "Japanese",
  "Korean",
  "Malay",
  "Norwegian",
  "Polish",
  "Portuguese (Brazilian)",
  "Romanian",
  "Russian",
  "Spanish",
  "Swedish",
  "Tagalog",
  "Turkish",
  "Ukrainian",
  "Vietnamese",
];

// Quick access languages shown in tabs
export const QUICK_LANGUAGES = [
  "English (US)",
  "French",
  "Spanish",
  "German",
];

// Languages with Auto Detect option (for translation)
export const TRANSLATE_SOURCE_LANGUAGES = ["Auto Detect", ...ALL_LANGUAGES];
export const TRANSLATE_TARGET_LANGUAGES = ALL_LANGUAGES;

// Summarizer languages
export const SUMMARIZER_LANGUAGES = ["Language (Auto)", ...ALL_LANGUAGES];
