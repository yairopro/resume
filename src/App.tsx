import { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from "react-native"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Profile from './page/Profile';
import Story from './page/Story';
import Page from './component/Page';
import End from './page/End';
import Skills from './page/Skills';
import SideProject from './page/SideProject';


function App() {
	return (
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
	);
}

export default App

const styles = {


};