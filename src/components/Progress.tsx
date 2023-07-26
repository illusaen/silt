import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';

export const enum ResourceType {
  HP,
  MP,
  SP
}

export const enum Direction {
  LEFT,
  RIGHT
}

export const Resource = ( { resourceType, value, maxValue }: { resourceType: ResourceType, value: number, maxValue: number } ) => {
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

export const ProgressCircle = ( {
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

// export const ProgressCircle = ({
//   percents,
//   stroke = theme.colors.brand,
//   emptyStroke = stroke,
//   emptyStrokeOpacity = 0.25,
//   duration = 3,
//   delay = 0.5,
//   size = 100,
//   strokeWidth = 6,
//   caption
// }) => {
//   const { inView } = useContext(IntersectionContext);
//   const radius = 45;
//   const circumference = Math.ceil(2 * Math.PI * radius);
//   const fillPercents = Math.abs(
//     Math.ceil((circumference / 100) * (percents - 100))
//   );

//   const transition = {
//     duration: duration,
//     delay: delay,
//     ease: "easeIn"
//   };

//   const variants = {
//     hidden: {
//       strokeDashoffset: circumference,
//       transition
//     },
//     show: {
//       strokeDashoffset: fillPercents,
//       transition
//     }
//   };

//   return (
//     <>
//       <Flex justifyContent="center" alignItems="center">
//         <Box height={size}>
//           <svg
//             viewBox="0 0 100 100"
//             version="1.1"
//             xmlns="http://www.w3.org/2000/svg"
//             width={size}
//             height={size}
//           >
//             <circle
//               cx="50"
//               cy="50"
//               r={radius}
//               className="circle"
//               strokeWidth={strokeWidth}
//               stroke={emptyStroke}
//               strokeOpacity={emptyStrokeOpacity}
//               fill="transparent"
//             />
//           </svg>
//           <svg
//             viewBox="0 0 100 100"
//             width={size}
//             height={size}
//             style={{
//               position: "absolute",
//               transform: "rotate(-90deg)",
//               overflow: "visible",
//               marginLeft: -size
//             }}
//           >
//             <motion.circle
//               cx="50"
//               cy="50"
//               r={radius}
//               strokeWidth={strokeWidth}
//               stroke={stroke}
//               fill="transparent"
//               strokeDashoffset={fillPercents}
//               strokeDasharray={circumference}
//               variants={variants}
//               initial="hidden"
//               animate={inView ? "show" : "hidden"}
//             />
//           </svg>
//         </Box>
//       </Flex>
//       {caption && (
//         <Box width={size} fontSize={3} color="text500" textAlign="center">
//           {caption}
//         </Box>
//       )}
//     </>
//   );
// };
