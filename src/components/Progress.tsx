import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';

export const enum ResourceType {
  HP,
  MP,
  SP,
  QUEST,
  EXP
}

export const enum Direction {
  LEFT,
  RIGHT
}

type BarConstant = {
  backgroundColor: string,
  barColor: string,
  width?: string,
  height: string,
  placement?: string,
  rounded: string
};
type CircleConstant = {
  size: number,
  borderWidth: number,
  backgroundColor: string,
  barColor: string,
  alwaysFullBackgroundColor?: string,
  alwaysFullColor?: string
};
const BAR_CONSTANTS: { [ key: number ]: BarConstant | CircleConstant } = {
  [ ResourceType.HP ]: { backgroundColor: 'bg-redDark/30', barColor: 'bg-red', height: 'grow', rounded: 'rounded-md' },
  [ ResourceType.MP ]: {
    backgroundColor: 'bg-blueDark/30',
    barColor: 'bg-blue',
    width: 'w-[52%]',
    height: 'h-[10%]',
    placement: 'self-end',
    rounded: 'rounded-sm'
  },
  [ ResourceType.SP ]: {
    backgroundColor: 'bg-yellowDark/30',
    barColor: 'bg-yellow',
    width: 'w-[52%]',
    height: 'h-[10%]',
    rounded: 'rounded-sm'
  },

  [ ResourceType.EXP ]: { size: 16, borderWidth: 1.5, backgroundColor: 'stroke-yellow/30', barColor: 'stroke-yellow' },
  [ ResourceType.QUEST ]: {
    size: 16,
    borderWidth: 1.5,
    backgroundColor: 'stroke-cyanDark/30',
    barColor: 'stroke-cyan',
    alwaysFullBackgroundColor: 'stroke-greenDark/30',
    alwaysFullColor: 'stroke-green'
  }
};

export const Resource = ( { resourceType, value, maxValue }: {
  resourceType: ResourceType,
  value: number,
  maxValue: number
} ) => {
  const percent = ( value / maxValue * 100 ) - 100;
  const barData = BAR_CONSTANTS[ resourceType ];
  const { backgroundColor, width, height, placement, rounded, barColor } = barData as BarConstant;
  return (
    <div className={ `${ backgroundColor } ${ width } ${ height } ${ placement } ${ rounded } overflow-hidden` }>
      <motion.div
        className={ `h-full ${ rounded } ${ barColor }` }
        animate={ { transform: `translateX(${ percent }%)` } }
        initial={ { transform: 'translateX(-100%)' } }
      />
    </div>
  );
};

export const ProgressCircle = ( {
                                  value,
                                  maxValue,
                                  resourceType,
                                  alwaysFull = false,
                                  icon,
                                  text,
                                  rotation = 0,
                                  direction = Direction.LEFT
                                }: {
  value: number,
  maxValue: number,
  resourceType: ResourceType,
  alwaysFull?: boolean,
  icon: IconDefinition,
  text: number | string,
  rotation?: number,
  direction?: Direction
} ) => {
  const circleData = BAR_CONSTANTS[ resourceType ];
  const {
    barColor,
    backgroundColor,
    alwaysFullColor,
    alwaysFullBackgroundColor,
    borderWidth,
    size
  } = circleData as CircleConstant;

  const dir = direction === Direction.LEFT ? 'flex-row' : 'flex-row-reverse';

  const center = size / 2;
  const radius = Math.floor( ( size - 1 ) / 2 );

  return (
    <div className={ `w-16 h-16 relative` }>
      <svg
        viewBox={ `0 0 ${ size } ${ size }` }
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={ alwaysFull ? alwaysFullBackgroundColor : backgroundColor }
          cx={ center }
          cy={ center }
          r={ radius }
          strokeWidth={ borderWidth }
          fill="none"
        />
      </svg>

      <motion.svg
        viewBox={ `0 0 ${ size } ${ size }` }
        xmlns="http://www.w3.org/2000/svg"
        className={ `absolute top-0 -rotate-90` }
      >
        <motion.circle
          className={ alwaysFull ? alwaysFullColor : barColor }
          cx={ center }
          cy={ center }
          r={ radius }
          strokeWidth={ borderWidth }
          strokeLinecap="round"
          fill="none"
          initial={ { pathLength: 0 } }
          animate={ { pathLength: alwaysFull ? 1 : value / maxValue } }
        />
      </motion.svg>

      <div className={ `flex ${ dir } w-full h-full items-center justify-center text-textDark absolute top-0` }>
        <p className="text-xs">{ text.toString() }</p>
        <FontAwesomeIcon icon={ icon } transform={ { rotate: rotation } }/>
      </div>
    </div>
  );
};
