import Icon from '@/assets/Icon'

const ButtonBack = () => {
  return (
        <a href="/" className="flex items-center leading-tight tracking-tight text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] px-4 rounded-full py-2 max-w-max group transition-all delay-75 duration-300 ease-in-out">
            <Icon name="arrow-left" className="w-6 h-6 mr-2 cursor-pointer group-hover:-translate-x-1 transition-transform duration-300 ease-in-out" />
            <span className="mb-0 w-full">Back to all challange</span>
        </a>
    )
}

export default ButtonBack