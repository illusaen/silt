import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';

import { faBolt, faVial } from '@fortawesome/free-solid-svg-icons';

enum ResourceType {
  HP,
  MP,
  SP
};

enum Direction {
  LEFT,
  RIGHT
}

const Resource = ( { resourceType, value, maxValue }: { resourceType: ResourceType, value: number, maxValue: number } ) => {
  const BAR_CONSTANTS = {
    [ ResourceType.HP ]: { backgroundColor: 'bg-red-500', barColor: 'bg-red-400', width: '', height: 'grow', placement: '', rounded: 'rounded-md' },
    [ ResourceType.MP ]: { backgroundColor: 'bg-sky-500', barColor: 'bg-sky-400', width: 'w-[52%]', height: 'h-[10%]', placement: 'self-end', rounded: 'rounded-sm' },
    [ ResourceType.SP ]: { backgroundColor: 'bg-amber-500', barColor: 'bg-amber-400', width: 'w-[52%]', height: 'h-[10%]', placement: '', rounded: 'rounded-sm' },
  };

  const percent = ( value / maxValue * 100 ) - 100;
  const barData = BAR_CONSTANTS[ resourceType ];
  return (
    <div className={ `${barData.backgroundColor} ${barData.width} ${barData.height} ${barData.placement} ${barData.rounded} overflow-hidden` }>
      <motion.div
        className={ `h-full ${barData.rounded} ${barData.barColor}` }
        animate={ { transform: `translateX(${percent}%)` } }
        initial={ { transform: 'translateX(-100%)' } }
      />
    </div>
  );
};

const ProgressCircle = ( {
  value,
  maxValue,
  color,
  alwaysFull = false,
  icon,
  text,
  rotation = 0,
  direction = Direction.LEFT
}: {
  value: number,
  maxValue: number,
  color: string,
  alwaysFull?: boolean,
  icon: IconDefinition,
  text: number | string,
  rotation?: number,
  direction?: Direction
} ) => {
  const dir = direction === Direction.LEFT ? 'flex-row' : 'flex-row-reverse';

  return (
    <div className={ `rounded-full bg-transparent h-16 w-16 ${color} border-[6px] flex justify-center items-center self-center` }>
      <div className={ `flex ${dir} items-center text-sky-800`}>
        <p className='text-green-100 text-xs'>{ text.toString() }</p>
        <FontAwesomeIcon icon={ icon } transform={ { rotate: rotation } } />
      </div>
    </div>
  );
};

const HealthText = ( { health, healthMax }: { health: number, healthMax: number } ) => 
  <p className='italic absolute -top-3'>
    <span className='font-sans text-lg'>{ health }</span>
    <span className='text-xs text-slate-500 align-[1px] ml-0.5'>{ '(' }</span>
    <span className='text-xs text-slate-400 align-[1px]'>{ healthMax }</span>
    <span className='text-xs text-slate-500 align-[1px]'>{ ')' }</span>
  </p>

export const Status = () => {
  const health = 100;
  const healthMax = 200;
  const mana = 100;
  const manaMax = 100;
  const stamina = 100;
  const staminaMax = 150;
  const exp = 1000;
  const expToLevel = 1500;
  const questTimer = 10;
  const questTimerMax = 30;
  const questMob = 'quest mob name';
  const questArea = 'quest area';
  const potions = 300;
  const level = 150;

  return (
    <div className='bg-gray-900 shadow-lg flex flex-row p-4 justify-center align-middle space-x-2 text-green-100 font-bold font-mono text-sm'>
      <ProgressCircle value={ questTimer } maxValue={ questTimerMax } color={ 'border-green-600' } icon={ faVial } text={ potions } rotation={ -45 } />
      <div className='flex flex-col justify-center space-y-1 min-w-[50%] my-3 relative'>
        <HealthText health={ health } healthMax={ healthMax } />
        <Resource resourceType={ ResourceType.MP } value={ mana } maxValue={ manaMax } />
        <Resource resourceType={ ResourceType.HP } value={ health } maxValue={ healthMax } />
        <Resource resourceType={ ResourceType.SP } value={ stamina } maxValue={ staminaMax } />
      </div>
      <ProgressCircle value={ exp } maxValue={ expToLevel } color={ 'border-green-600' } icon={ faBolt } text={ level } direction={ Direction.RIGHT } />
    </div>
  );
};
