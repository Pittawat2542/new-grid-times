import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';

import Advertisement from '../Advertisement';
import MainStory from '../MainStory';
import OpinionStory from '../OpinionStory';
import { QUERIES } from '../../constants';
import React from 'react';
import SecondaryStory from '../SecondaryStory';
import SectionTitle from '../SectionTitle';
import styled from 'styled-components/macro';

const MainStoryGrid = () => {
	return (
		<Wrapper>
			<MainStorySection>
				<MainStory {...MAIN_STORY} />
			</MainStorySection>

			<SecondaryStorySection>
				<StoryList>
					{SECONDARY_STORIES.map((story, index) => (
						<VerticalStoryWrapper key={story.id}>
							<SecondaryStory {...story} />
						</VerticalStoryWrapper>
					))}
				</StoryList>
			</SecondaryStorySection>

			<OpinionSection>
				<SectionTitle>Opinion</SectionTitle>
				<OpinionStoryList>
					{OPINION_STORIES.map((story, index) => (
						<OpinionStoryWrapper key={story.id}>
							<OpinionStory {...story} />
						</OpinionStoryWrapper>
					))}
				</OpinionStoryList>
			</OpinionSection>

			<AdvertisementSection>
				<Advertisement />
			</AdvertisementSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-areas:
		'main-story'
		'secondary-stories'
		'opinion-stories'
		'advertisement';
	gap: 48px;
	margin-bottom: 48px;

	@media ${QUERIES.tabletAndUp} {
		gap: 48px 0;
		grid-template-areas:
			'main-story main-story main-story secondary-stories'
			'advertisement advertisement advertisement advertisement'
			'opinion-stories opinion-stories opinion-stories opinion-stories';
	}

	@media ${QUERIES.laptopAndUp} {
		gap: 0;
		grid-template-areas:
			'main-story main-story main-story secondary-stories opinion-stories'
			'main-story main-story main-story advertisement advertisement'
	}
`;

const MainStorySection = styled.section`
	grid-area: main-story;

	@media ${QUERIES.tabletAndUp} {
		padding-right: 16px;
		margin-right: 16px;
		border-right: 1px solid var(--color-gray-300);
	}
`;

const SecondaryStorySection = styled.section`
	grid-area: secondary-stories;

	@media ${QUERIES.laptopAndUp} {
		padding-right: 16px;
		margin-right: 16px;
		border-right: 1px solid var(--color-gray-300);
	}
`;

const StoryList = styled.div`
	display: flex;
	flex-direction: column;
`;

const OpinionSection = styled.section`
	grid-area: opinion-stories;
`;

const OpinionStoryList = styled(StoryList)`
	@media ${QUERIES.tabletOnly} {
		flex-direction: row;
		gap: 32px;

		& > * {
			flex: 1;
		}
	}
`;

const AdvertisementSection = styled.section`
	grid-area: advertisement;

	@media ${QUERIES.laptopAndUp} {
		border-top: 1px solid var(--color-gray-300);
		padding-top: 16px;
		margin-top: 16px;
	}
`;

const VerticalStoryWrapper = styled.div`
	&:not(:last-of-type) {
		border-bottom: 1px solid var(--color-gray-300);
		padding-bottom: 16px;
		margin-bottom: 16px;
	}
`;

const OpinionStoryWrapper = styled(VerticalStoryWrapper)`
	@media ${QUERIES.tabletOnly} {
		&:not(:last-of-type) {
			border-bottom: revert;
			padding-bottom: revert;
			margin-bottom: revert;
		}
	}
`;

export default MainStoryGrid;
