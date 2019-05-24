import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const About = () => {
	return (
		<Layout>
			<h1>About me</h1>
			<p>
				Every time a new Targaryen is born, he said, the gods toss the coin in the air and the world holds its
				breath to see how it will land.
			</p>
			<Link to="/contact">Contact me if you have any questions!</Link>
		</Layout>
	);
};

export default About;
