import { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from "react-native"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Profile from './page/Profile';
import Story from './page/Story';
import Page from './component/Page';
import BuildingResume from './page/BuildingResume';
import Skills from './page/Skills';


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
						BuildingResume,
					].map((Content, index) =>
						<Page>
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