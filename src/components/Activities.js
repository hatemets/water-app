import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import DefaultActivity from '../help/DefaultActivity';
import Title from '../help/Title';

const Activities = () => (
	<>
		<Title name="Activities" />

		<DefaultActivity isTop={true} activity="Shower" time="5.13 PM" timeSpent={15} timeAvg={25} waterAmount={65} waterAvg={85} />
		<DefaultActivity activity="Dishwasher" time="4.43 PM" timeSpent={120} timeAvg={90} waterAmount={25} waterAvg={15} />
		<DefaultActivity activity="Washing machine" time="4.01 PM" timeSpent={120} timeAvg={90} waterAmount={35} waterAvg={50} />
		<DefaultActivity activity="Bathtub" time="9.23 AM" timeSpent={20} timeAvg={25} waterAmount={105} waterAvg={130} />
	</>
);

export default Activities;
