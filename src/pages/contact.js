import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const Contact = () => {
	return (
		<Layout>
			<Head title="Contact" />
			<h1>Contact Us</h1>
			<p>
				The best way to reach me is via
				<a href="https://twitter.com/kovacs_zsoltjs" target="_blank" rel="noopener noreferrer">
					@kovacs_zsoltjs
				</a>
				on Twitter!
			</p>
		</Layout>
	);
};

export default Contact;
