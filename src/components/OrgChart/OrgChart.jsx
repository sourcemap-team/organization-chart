import React from 'react';

import styles from './OrgChart.module.scss';

import { TransformActions } from '../TransformActions/TransformActions';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import { TeamCard } from '../TeamCard/TeamCard';
import {
  MIN_SCALE,
  MAX_SCALE,
  ZOOM_STEP,
  INITIAL_SCALE,
} from '../../constants/TransformParams';
import { MOCK_DATA } from '../../constants/OrgStructure';

export const OrgChart = () => {
  return (
    <TransformWrapper
      initialScale={INITIAL_SCALE}
      centerZoomedOut
      minScale={MIN_SCALE}
      maxScale={MAX_SCALE}
      wheel={{
        step: ZOOM_STEP,
      }}
      zoomAnimation={{ disabled: true }}
    >
      {(transformProps) => (
        <React.Fragment>
          <TransformActions transformProps={transformProps} />
          <TransformComponent wrapperClass={styles.wrapperClass}>
            <div className={styles.chartWrapper}>
              {Object.keys(MOCK_DATA).map((teamKey) => (
                <TeamCard
                  id={teamKey}
                  key={teamKey}
                  data={MOCK_DATA[teamKey]}
                  transformProps={transformProps}
                />
              ))}
            </div>
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
};
