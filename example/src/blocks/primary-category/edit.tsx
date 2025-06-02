import React from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { PostPrimaryCategory } from '@10up/block-components/components/post-primary-category';

export const BlockEdit = ({context}) => {
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<PostPrimaryCategory />
		</div>
	)
};
