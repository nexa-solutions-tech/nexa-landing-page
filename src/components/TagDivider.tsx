interface TagDividerProps {
  className?: string;
}

export const TagDivider = ({ className = "" }: TagDividerProps) => {
  return (
    <div
      className={`static self-auto bg-transparent box-content caret-black shrink min-h-0 min-w-0 opacity-100 w-auto rounded-none md:relative md:self-stretch md:aspect-auto md:bg-indigo-400 md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0.5 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg ${className}`}
    />
  );
};
