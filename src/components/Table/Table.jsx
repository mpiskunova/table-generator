import React, { memo } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import Cell from '../Cell';

import './style.scss';

const Table = ({
  col,
  row,
}) => {
  const Grid = styled('section')`
  display: grid;
  min-width: 800px;
  height: 90vh;
  grid-template-columns: repeat(${col}, 1fr);
  grid-template-rows: repeat(${row}, 1fr);
`;

  const cellCount = Number(col) * Number(row);

  const getCells = () => {
    const content = [];
    for (let i = 0; i < cellCount; i += 1) {
      content.push(
        <Cell key={i} />,
      );
    }
    return content;
  };

  return (
    <section className="tableWrapper">
      <Grid>
        {getCells()}
      </Grid>
    </section>
  );
};

Table.propTypes = {
  col: string.isRequired,
  row: string.isRequired,
};

export default memo(Table);
