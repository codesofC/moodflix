import { ALLMOODS } from '@/constant'
import { PopoverContent } from '../ui/popover'
import Image from 'next/image'
import { MoodProps } from '@/types'

const PopOverMood = ({ handleMood }: { handleMood: (mood: MoodProps) => void}) => {


  return (
    <PopoverContent className='grid grid-cols-3'>
        {
          ALLMOODS.map(mood => (
            <div key={mood.title} className='p-2 px-4 text-secondary-foreground hover:bg-primary hover:text-white cursor-pointer flex flex-col items-center rounded-md' 
              onClick={() => handleMood(mood)}
            >
              <Image 
                src={mood.url}
                alt={mood.title}
                width={120}
                height={120}
                className='size-16 object-contain'
              />
              <span className="text-sm font-semibold"> {mood.title} </span>
            </div>
          ))
        }
    </PopoverContent>
  )
}

export default PopOverMood