import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import { TransformActions } from '../TransformActions/TransformActions';

import { TeamCard } from '../TeamCard/TeamCard';
import {
  MIN_SCALE,
  MAX_SCALE,
  ZOOM_STEP,
  INITIAL_SCALE,
  DOUBLE_CLICK_STEP,
} from '../../constants/TransformParams';
import { MOCK_DATA, GroupTitles } from '../../constants/OrgStructure';

import styles from './OrgChart.module.scss';

export const OrgChart = () => {
  const { leadership } = MOCK_DATA;
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
        <>
          <TransformActions
            data={GroupTitles}
            transformProps={transformProps}
          />
          <TransformComponent
            wrapperClass={styles.wrapperClass}
            contentClass={styles.contentClass}
          >
            <div className={styles.leaderShip}>
              <TeamCard
                id={GroupTitles.Leadership}
                data={leadership}
                transformProps={transformProps}
              />
            </div>
            {/*<div className={styles.chartWrapper}>*/}
            {/*  {Object.keys(team).map((teamKey) => (*/}
            {/*    <TeamCard*/}
            {/*      id={teamKey}*/}
            {/*      key={teamKey}*/}
            {/*      data={MOCK_DATA[teamKey]}*/}
            {/*      transformProps={transformProps}*/}
            {/*    />*/}
            {/*  ))}*/}
            {/*</div>*/}
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};
