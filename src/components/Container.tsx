export type ContainerProps = {
  children: React.ReactChild
  id?: string
  className?: string
}

export const Container: React.VFC<ContainerProps> = ({
  children,
  id,
  className,
}) => {
  return (
    <div id={id} className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">{children}</div>
    </div>
  )
}
