import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/948514?s=460&u=d5dcceb2fc93261cdde28cf7e67a32dc8af27436&v=4"
            alt="Diziano"
          />
          <div>
            <strong>diziano/gobarber-backend</strong>
            <p>Back-end da aplicação desenvolvida no Bootcamp GoStack 11</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/948514?s=460&u=d5dcceb2fc93261cdde28cf7e67a32dc8af27436&v=4"
            alt="Diziano"
          />
          <div>
            <strong>diziano/gobarber-backend</strong>
            <p>Back-end da aplicação desenvolvida no Bootcamp GoStack 11</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/948514?s=460&u=d5dcceb2fc93261cdde28cf7e67a32dc8af27436&v=4"
            alt="Diziano"
          />
          <div>
            <strong>diziano/gobarber-backend</strong>
            <p>Back-end da aplicação desenvolvida no Bootcamp GoStack 11</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
