import { ALLMOODS } from '@/constant'
import { PopoverContent } from '../ui/popover'
import Image from 'next/image'
import { Card } from '../ui/card'

const PopOverMood = () => {
  return (
    <PopoverContent className='grid grid-cols-3'>
        {
          ALLMOODS.map(mood => (
            <Card key={mood.title} className='p-4 hover:bg-primary cursor-pointer size-16 flex flex-col gap-1 items-center rounded-md'>
              <Image 
                src={mood.url}
                alt={mood.title}
                width={120}
                height={120}
                className='w-full object-contain'
              />
              <span className="text-sm font-semibold mb-4"> {mood.title} </span>
            </Card>
          ))
        }
    </PopoverContent>
  )
}

export default PopOverMood