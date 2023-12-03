import { useEffect, useState } from 'react';
import { View } from "react-native";
import LangSelector from './component/LangSelector';
import Page from './component/Page';
import ScrollDownIndicator from './component/ScrollDownIndicator';
import { Lang, LanguageContext, langs } from './hook/useLang';
import End from './page/End';
import OpenSources from './page/OpenSources';
import Profile from './page/Profile';
import SideProject from './page/SideProject';
import Skills from './page/Skills';
import Story from './page/Story';

function App() {
	useEffect(() => {
		setTimeout(() => {
			const root = document.getElementById("root");
			root?.classList.remove('invisible');
		}, 2000);
	}, []);

	const [lang, setLang] = useState<Lang>(selectDefaultLang);
	return (
		<LanguageContext.Provider value={lang}>
			<>
				{/* @ts-ignore */}
				<View style={styles.appbar}>
					<LangSelector value={lang} onValueChange={setLang} />
				</View>

				{
					[
						Profile,
						Story,
						Skills,
						SideProject,
						OpenSources,
						End,
					].map((Content, index) =>
						<Page key={index}>
							<Content />

							{
								!index &&
								<ScrollDownIndicator />
							}
						</Page>
					)
				}
			</>
		</LanguageContext.Provider>
	);
}

export default App


function selectDefaultLang(): Lang {
	const defaultLang = 'en';

	const browserLang = window.navigator.language?.split('-')[0];
	let lang = browserLang;
	if (!langs.includes(lang))
		lang = defaultLang;

	return lang as Lang;
}

const styles = {
	appbar: {
		flexDirection: "row",
		justifyContent: "flex-end",
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		zIndex: 1,
	},

} as const;