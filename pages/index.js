/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Box from '../src/components/foundation/layout/Box';
import HeaderDesktop from '../src/components/commons/HeaderDesktop';
import {
  ProjectsTitle,
  WrapperProjects,
} from '../src/components/commons/HeaderDesktop/styles';
import { Grid } from '../src/components/foundation/layout/Grid';
import { Card } from '../src/components/commons/Card';
import { HighLightCard } from '../src/components/commons/HighLightCard';
import HeaderMobile from '../src/components/commons/HeaderMobile';
import Footer from '../src/components/commons/Footer';
import Modal from '../src/components/commons/Modal';
import FormCadastro from '../src/components/patterns/FormCadastro';

const imgUrl = '/images/project1.jpeg';
const imgUrl2 = '/images/project2.jpeg';

export default function Home() {
  const [isModalOpen, setModalState] = useState(false);
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Modal isOpen={isModalOpen} onClose={() => setModalState(false)}>
        {(propsDoModal) => <FormCadastro propsDoModal={propsDoModal} />}
      </Modal>
      <HeaderMobile />
      <HeaderDesktop setModalState={setModalState} />
      <WrapperProjects>
        <ProjectsTitle>Some Things I' ve Built</ProjectsTitle>
        <Grid.Container>
          <Grid.Row>
            <HighLightCard
              size={{ xs: 12, md: 12 }}
              img={imgUrl2}
              title="Destaque2"
            />
            <Card size={{ xs: 12, md: 4 }} img={imgUrl} title="Projeto 1" />
            <Card size={{ xs: 12, md: 4 }} img={imgUrl} title="Projeto 2" />
            <Card size={{ xs: 12, md: 4 }} img={imgUrl} title="Projeto 3" />
          </Grid.Row>
        </Grid.Container>
      </WrapperProjects>
      <Footer />
    </Box>
  );
}