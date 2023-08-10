import { cn } from '@/lib/utils'

interface ContainerProps {
  className?: string
  children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn(className, 'container w-11/12 md:w-10/12 mx-auto')}>
      {children}
    </div>
  )
}

export default Container
