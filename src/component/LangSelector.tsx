import { Lang, typedLangs } from "../hook/useLang";

export default function LangSelector({ value, onValueChange }: LangSelectorProps) {
	return (
		<select
			style={{
				border: "0 none transparent",
				background: "transparent",
				fontSize: 30,
				cursor: "pointer",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				appearance: "none",
				padding: 10,
			}}
			value={value}
			onChange={event => onValueChange(event.target.value as Lang)}>
			{
				typedLangs.map(lang =>
					<option key={lang} value={lang}>
						{icons[lang]}
					</option>
				)
			}
		</select>
	);
}

export interface LangSelectorProps {
	value: Lang;
	onValueChange: (value: Lang) => void;
}

const icons: { [key in Lang]: string } = {
	en: '🇺🇸',
	fr: '🇫🇷',
};