import { useState } from 'react';
import { ScrollView, View } from "react-native";
import Page from './component/Page';
import LangSelector from './component/LangSelector';
import { Lang, langs, LanguageContext } from './hook/useLang';
import End from './page/End';
import Profile from './page/Profile';
import SideProject from './page/SideProject';
import Skills from './page/Skills';
import Story from './page/Story';

function App() {
	const [lang, setLang] = useState<Lang>(selectDefaultLang);
	return (
		<LanguageContext.Provider value={lang}>
			<>
				<View style={styles.appbar}>
					<LangSelector value={lang} onValueChange={setLang} />
				</View>
				<ScrollView
					style={{ flex: 1 }}>
					{
						[
							Profile,
							Story,
							Skills,
							SideProject,
							End,
						].map((Content, index) =>
							<Page key={index}>
								<Content />
							</Page>
						)
					}
				</ScrollView>
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
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		zIndex: 1,
	},

} as const;