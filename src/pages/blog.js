import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import blogStyles from './blog.module.scss';
import Head from '../components/head';

const BlogPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
				edges {
					node {
						title
						slug
						publishedDate(formatString: "MMMM Do, YYYY")
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<Head title="Blog" />
			<h1>Blog</h1>
			<p>Posts will show up here later on.</p>

			<ol className={blogStyles.posts}>
				{data.allContentfulBlogPost.edges.map((item, id) => {
					return (
						<li key={id} className={blogStyles.post}>
							<Link to={`/blog/${item.node.slug}`}>
								<h2>{item.node.title}</h2>
								<p>{item.node.publishedDate}</p>
							</Link>
						</li>
					);
				})}
			</ol>
		</Layout>
	);
};

export default BlogPage;
