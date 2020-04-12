import React from 'react';
import '../styles/Prevention.css';

export default class Prevention extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			preventionSteps: [
				{
					title: 'Know How It Spreads',
					step1: 'There is currently no vaccine to prevent sars-cov-2 (COVID-19).',
					step2: 'The best way to prevent illnes is to avoid being exposed to this virus.',
					step3: 'The virus is thought to spread mainly from person-to-person.',
					substeps: [
						'Between people who are in close contacht with one another (within about 6).',
						'Through resparitory droplet produced when an infected person coughs, sneezes or talks.',
						'Some recent studies have suggested that COVID-19 may be spread by people who are asymptomatic.',
					],
				},
				{
					title: 'Clean Your Hands',
					step1:
						'Wash your hands often with soap and waster for at least 20 seconds, especially after you have been in a public place, or after blowing your noce, coughin, or sneezing.',
					step2: 'Try to not touch your face as best as possible.',
					step3:
						'If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry.',
					step4: 'Avoid touching your eyes, nose, and mouth with unwashed hands.',
				},
				{
					title: 'Avoid close contact',
					step1: 'Avoid close contact with people who are sick',
					step2: 'Stay home as much as possible.',
					step3: 'Put distance between yourself and other people.',
					substeps: [
						'Remember that some people without symptoms may be able to spread virus.',
						'Keeping distance from others is especially important for people who are at higher risk of getting very sick.',
					],
				},
				{
					title: 'Cover your mouth and nose with a cloth face cover when around others',
					step1: 'You could spread COVID-19 to others even if you do not feel sick.',
					step2: 'The cloth face cover is meant to protect other people in case you are infected.',
					step3: 'Do NOT use a facemask meant for a healthcare worker.',
					step4:
						'Continue to keep about 6 feet between yourself and others. The cloth face cover is not a substitute for social distancing.',
					step5:
						'Everyone should wear a cloth face cover when they have to go out in public, for example to the grocery store or to pick up other necessities.',
					substeps: [
						'Remember that some people without symptoms may be able to spread virus.',
						'Keeping distance from others is especially important for people who are at higher risk of getting very sick.',
					],
				},
				{
					title: 'Cover coughs and sneezes',
					step1:
						'If you are in a private setting and do not have on your cloth face covering, remember to always cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow.',
					step2: 'Throw used tissues in the trash.',
					step3:
						'Immediately wash your hands with soap and water for at least 20 seconds. If soap and water are not readily available, clean your hands with a hand sanitizer that contains at least 60% alcohol.',
				},
				{
					title: 'Clean and disinfect',
					step1:
						'Clean AND disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.',
					step2: 'If surfaces are dirty, clean them: Use detergent or soap and water prior to disinfection.',
				},
			],
			symptoms: [
				'Fever',
				'Cough',
				'Shortness of breath or difficulty breathing',
				'Tiredness',
				'Aches',
				'Runny nose',
				'Sore throat',
			],
		};
	}
	render() {
		return (
			<div id="Prevention" style={{ backgroundColor: '#262833' }}>
				<div>
					<h1 style={{color: 'white', textAlign:'center'}}>Prevention Measures</h1>
					<p style={{textAlign:'center', width: '300px'}}>
						This page should give some information about how you can protect yourself and the people around you. <br/>
						Stay safe! <br/>
						<span style={{fontSize:'10px'}}>All the informations are from <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html" target="_blank">CDC.gov</a></span>
					</p>
				</div>
				{this.state.preventionSteps.map((prevention) => {
					let keys = [];
					for (var key in prevention) {
						keys.push(key);
					}

					let filterdKeys = keys.filter((key) => key != 'title');
					return (
						<div className="preventionCard" style={{ backgroundColor: '#b89d55' }}>
							<div className="preventionCardHeadline">{prevention.title}</div>
							<ul>
								{filterdKeys.map((key) =>
									key == 'substeps' ? (
										<li className="preventionStep">{prevention[key]}</li>
									) : (
										<li className="subSteps">{prevention[key]}</li>
									)
								)}
							</ul>
						</div>
					);
				})}
			</div>
		);
	}
}
