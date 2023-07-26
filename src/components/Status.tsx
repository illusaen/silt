import { faBolt, faVial } from '@fortawesome/free-solid-svg-icons';

import { Direction, ProgressCircle, Resource, ResourceType } from './Progress';

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
