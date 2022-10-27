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
  DOUBLE_CLICK_STEP,
} from '../../constants/TransformParams';
import { MOCK_DATA_BACK } from '../../constants/OrgStructure';

export const OrgChart = () => {
  const orgChartData = MOCK_DATA_BACK;

  const leaderShip = orgChartData.find((group) => group.type === 'Virtual');
  const otherGroups = orgChartData.filter((group) => group.type !== 'Virtual');

  return (
    <TransformWrapper
      initialScale={INITIAL_SCALE}
      centerZoomedOut
      centerOnInit
      minScale={MIN_SCALE}
      maxScale={MAX_SCALE}
      wheel={{
        step: ZOOM_STEP,
      }}
      doubleClick={{
        step: DOUBLE_CLICK_STEP,
      }}
      zoomAnimation={{ disabled: false, size: DOUBLE_CLICK_STEP }}
    >
      {(transformProps) => (
        <React.Fragment>
          <TransformActions
            data={orgChartData}
            transformProps={transformProps}
          />
          <TransformComponent
            wrapperClass={styles.wrapperClass}
            contentClass={styles.contentClass}
          >
            <div className={styles.leaderShip}>
              <TeamCard
                id={leaderShip.name}
                data={orgChartData.find((group) => group.type === 'Virtual')}
                transformProps={transformProps}
              />
            </div>
            <div className={styles.chartWrapper}>
              {otherGroups.map((group) => (
                <TeamCard
                  id={group.name}
                  key={group.id}
                  data={group}
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
