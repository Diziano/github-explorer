import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/948514?v=4"
            alt="Diziano"
          />
          <div>
            <strong>facebook/react</strong>
            <p>
              A declarative, efficient, and flexible JavaScript library for
              building user interfaces. https://reactjs.org
            </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>148k</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>28.6k</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>476</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/repositories/">
          <div>
            <strong>asdsadsaa</strong>
            <p>asdasdsd</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
