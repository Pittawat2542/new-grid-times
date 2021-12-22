import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';

import Advertisement from '../Advertisement';
import MainStory from '../MainStory';
import OpinionStory from '../OpinionStory';
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
					{SECONDARY_STORIES.map((story, index) =>
						index < SECONDARY_STORIES.length - 1 ? (
							<>
								<SecondaryStory key={story.id} {...story} />
								<Divider />
							</>
						) : (
							<SecondaryStory key={story.id} {...story} />
						)
					)}
				</StoryList>
			</SecondaryStorySection>

			<OpinionSection>
				<SectionTitle>Opinion</SectionTitle>
				<StoryList>
					{OPINION_STORIES.map((story, index) =>
						index < OPINION_STORIES.length - 1 ? (
							<>
								<OpinionStory key={story.id} {...story} />
								<Divider />
							</>
						) : (
							<OpinionStory key={story.id} {...story} />
						)
					)}
				</StoryList>
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
`;

const MainStorySection = styled.section`
	grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
	grid-area: secondary-stories;
`;

const StoryList = styled.div`
	display: flex;
	flex-direction: column;
`;

const OpinionSection = styled.section`
	grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
	grid-area: advertisement;
`;

const Divider = styled.hr`
	height: 1px;
	color: var(--color-gray-300);
	width: 100%;
	margin-top: 16px;
	margin-bottom: 16px;
`;

export default MainStoryGrid;
