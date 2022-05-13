import { useState } from 'react';
import { ScrollView } from "react-native";
import Page from './component/Page';
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


};