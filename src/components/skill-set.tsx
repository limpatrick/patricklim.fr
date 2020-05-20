import React from 'react';
import Card from '~/components/card';
import Layout from '~/components/layout';
import Skill from '~/components/skill';
import { skills } from '~/data/skills';
import Grid from '@material-ui/core/Grid';

type Props = { id: string };

const SkillSet = ({ id }: Props) => (
  <Layout id={id}>
    <Card title="Techonologies">
      <Grid container justify="flex-start" alignItems="center">
        {skills.map(skill => (
          <Grid key={skill.name} item xs={4} sm={3} md={2}>
            <Skill {...skill} />
          </Grid>
        ))}
      </Grid>
    </Card>
  </Layout>
);

export default SkillSet;