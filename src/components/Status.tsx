import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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
  const backgroundColor = (): string => {
    switch ( resourceType ) {
      case ResourceType.HP: return 'bg-red-400';
      case ResourceType.MP: return 'bg-sky-400';
      case ResourceType.SP: return 'bg-amber-400';
      default: return 'bg-gray-400';
    }
  };

  const width = resourceType === ResourceType.HP ? '' : 'min-w-[52%] max-w-[52%]';
  const height = resourceType === ResourceType.HP ? 'min-h-[64%]' : 'min-h-[16%] max-h-[16%]';
  const placement = resourceType === ResourceType.MP ? 'self-end' : '';
  const rounded = resourceType === ResourceType.HP ? 'rounded-md' : 'rounded-sm';

  return (
    <div className={ `${backgroundColor()} ${width} ${height} ${placement} ${rounded}` }>
    </div>
  );
};

const ProgressCircle = ( { label, value, maxValue }: { label: string, value: number, maxValue: number } ) => {

}

const IconWithText = ( { icon, text, rotation = 0, direction = Direction.LEFT }: { icon: IconDefinition, text: number | string, rotation?: number, direction?: Direction } ) => {
  const dir = direction === Direction.LEFT ? 'flex-row' : 'flex-row-reverse';
  return (
    <div className={ `flex ${dir} items-center gap-0.5 text-sky-800`}>
      <p className='text-green-100 text-xs'>{ text.toString() }</p>
      <FontAwesomeIcon icon={ icon } transform={ { rotate: rotation } } />
    </div>
  );
};

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
    <div className='bg-gray-900 shadow-lg flex flex-row p-4 justify-center space-x-8 min-h-[64px] text-green-100 font-bold font-mono text-sm'>
      <IconWithText icon={ faVial } text={ potions } rotation={ -45 } />
      <div className='flex flex-col justify-center space-y-1 min-w-[50%] relative'>
        <p className='italic absolute -top-3'>
          <span className='font-sans'>{ health }</span>
          <span className='text-xs text-slate-500 align-[1px] ml-0.5'>{ '(' }</span>
          <span className='text-xs text-slate-400 align-[1px]'>{ healthMax }</span>
          <span className='text-xs text-slate-500 align-[1px]'>{ ')' }</span>
        </p>
        <Resource resourceType={ ResourceType.MP } value={ mana } maxValue={ manaMax } />
        <Resource resourceType={ ResourceType.HP } value={ health } maxValue={ healthMax } />
        <Resource resourceType={ ResourceType.SP } value={ stamina } maxValue={ staminaMax } />
      </div>
      <IconWithText icon={ faBolt } text={ level } direction={ Direction.RIGHT } />
    </div>
  );
};
