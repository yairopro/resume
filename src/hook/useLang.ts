import { createContext, useContext } from "react";

export const LanguageContext = createContext<Lang>("en");

export default function useLang() {
	return useContext(LanguageContext);
}

export function useSelectText() {
	const lang = useLang();
	return function select(texts: { [k in Lang]: string }) {
		return texts[lang];
	};
}

export type Lang = "en"
	| "fr"
	// | "he"
	;