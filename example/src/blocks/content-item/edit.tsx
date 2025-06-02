import React from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import { PostContext } from '@10up/block-components/components/post-context';
import { PostFeaturedImage } from '@10up/block-components/components/post-featured-image';
import { PostTitle } from '@10up/block-components/components/post-title';
import { PostPrimaryCategory } from '@10up/block-components/components/post-primary-category';
import { PostDate } from '@10up/block-components/components/post-date';
import { PostCategoryList } from '@10up/block-components/components/post-category-list';
import { PostAuthor } from '@10up/block-components/components/post-author';
import { PostExcerpt } from '@10up/block-components/components/post-excerpt';

export const BlockEdit = ({ context }) => {
	const blockProps = useBlockProps();
	return (
		<article {...blockProps}>
			<PostContext postId={context.postId} postType={context.postType} isEditable={!Number.isFinite(context.queryId)}>
				<figure className="wp-block-example-content-item__media">
					<PostFeaturedImage className="wp-block-example-content-item__image" />
				</figure>
				<PostPrimaryCategory className="wp-block-example-content-item__category" />
				<PostTitle className="wp-block-example-content-item__title" />
				<PostCategoryList className="wp-block-example-content-item__categories">
					<PostCategoryList.ListItem className="wp-block-example-content-item__category">
						<PostCategoryList.TermLink className="wp-block-example-content-item__category-link" />
					</PostCategoryList.ListItem>
				</PostCategoryList>
				<PostDate className="wp-block-example-content-item__date" />
				<PostExcerpt className="wp-block-example-content-item__excerpt" />
				<PostAuthor className="wp-block-example-content-item__author">
					<PostAuthor.Avatar className="wp-block-example-content-item__author-avatar" />
					<PostAuthor.Name tagName="a" className="wp-block-example-content-item__author-name" />
					<PostAuthor.FirstName className="wp-block-example-content-item__author-first-name" />
					<PostAuthor.LastName className="wp-block-example-content-item__author-last-name" />
					<PostAuthor.Bio className="wp-block-example-content-item__author-bio" />
					<PostAuthor.Email className="wp-block-example-content-item__author-email" />
				</PostAuthor>
			</PostContext>
		</article>
	)
};
