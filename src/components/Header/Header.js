import { Menu, Search, User } from 'react-feather';

import Button from '../Button';
import Logo from '../Logo';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { QUERIES } from '../../constants';
import React from 'react';
import styled from 'styled-components/macro';

const Header = () => {
	return (
		<header>
			<SuperHeader>
				<Row>
					<ActionGroup>
						<button>
							<Search size={24} />
						</button>
						<button>
							<Menu size={24} />
						</button>
					</ActionGroup>
					<ActionGroup>
						<button>
							<User size={24} />
						</button>
					</ActionGroup>
				</Row>
			</SuperHeader>
			<MainHeader>
				<Logo />
			</MainHeader>
			<MainDesktopHeader>
				<ActionItems>
					<button>
						<Search size={24} />
					</button>
					<button>
						<Menu size={24} />
					</button>
				</ActionItems>
				<Logo />
				<HeroActions>
					<Button>Subscribe</Button>
					<SecondaryAction href="">Already a subscriber?</SecondaryAction>
				</HeroActions>
			</MainDesktopHeader>
		</header>
	);
};

const SuperHeader = styled.div`
	padding: 16px 0;
	background: var(--color-gray-900);
	color: white;

	@media ${QUERIES.laptopAndUp} {
		display: none;
	}
`;

const Row = styled(MaxWidthWrapper)`
	display: flex;
	justify-content: space-between;
`;

const ActionGroup = styled.div`
	display: flex;
	gap: 24px;

	/*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
	svg {
		display: block;
	}
`;

const MainHeader = styled(MaxWidthWrapper)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 32px;
	margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
		margin-bottom: 72px;
  }

	@media ${QUERIES.laptopAndUp} {
		display: none;
	}
`;

const MainDesktopHeader = styled(MaxWidthWrapper)`
	display: none;

	@media ${QUERIES.laptopAndUp} {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		margin-top: 16px;
		margin-bottom: 72px;
		align-items: end;
	}
`;

const ActionItems = styled.div`
	display: flex;
	gap: 24px;
	align-self: center;
`;

const HeroActions = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	justify-self: end;
  gap: 8px;
`;

const SecondaryAction = styled.a`
	font-family: var(--font-family-serif);
	font-style: italic;
	font-weight: var(--font-weight-normal);
	text-decoration: underline;
  font-size: ${14 / 16}rem;
  cursor: pointer;
  color: var(--color-gray-900);
`;

export default Header;
