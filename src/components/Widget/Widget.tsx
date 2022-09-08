// imports from vendors
import { FC } from 'react'
import { MinusIcon } from '@heroicons/react/20/solid';

type Props = {
  isActive?: boolean
  id: string
  description: string
}

const Widget: FC<Props> = ({ description, id, isActive = false }) => {
  const classNames = [
    'cursor-pointer',
    'flex',
    'focus:outline-none',
    'hover:bg-indigo-600',
    'hover:text-white',
    'mb-2',
    'p-6',
    'relative',
    'rounded-lg',
    'text-left',
    'shadow-md',
    'w-full',
    isActive ? 'bg-indigo-500 text-white' : 'bg-white',
  ]

  return (
    <button className={classNames.join(' ')} onClick={() => console.log(id)}>
      <div className="flex items-center justify-between relative w-full">
        <div className="flex items-center">
          <div className="font-medium pr-10 text-sm">{ description }</div>
        </div>
        { isActive && (
          <div className="absolute bg-opacity-80 bg-indigo-400 h-8 p-1 right-0 rounded-full shrink-0 text-white w-8">
            <MinusIcon className="h-6 w-6" />
          </div>
        ) }
      </div>
    </button>
  )
};

export default Widget;
