export type TestimonialCardProps = {
  testimonialText: string;
  rating: string;
  starIcon: string;
  halfStarIcon?: string;
  userImageUrl: string;
  userImageAlt?: string;
  userImageSizes?: string;
  userImageClassName?: string;
  userName: string;
  userTitle: string;
  containerClassName?: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  const {
    testimonialText,
    rating,
    starIcon,
    halfStarIcon,
    userImageUrl,
    userImageAlt = "",
    userImageSizes,
    userImageClassName = "box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[100%] md:aspect-[auto_1024_/_1024]",
    userName,
    userTitle,
    containerClassName = " relative content-center items-center shadow-[rgba(41,52,255,0.3)_0px_1px_35px_0px] box-border caret-transparent gap-x-6 flex basis-auto grow-0 shrink-0 h-min justify-center max-w-[440px] min-w-[280px] gap-y-6 w-full overflow-hidden md:basis-0 md:grow md:w-px",
  } = props;

  const ratingValue = parseFloat(rating);
  const fullStars = Math.floor(ratingValue);
  const hasHalfStar = ratingValue % 1 !== 0;

  return (
    <div className={containerClassName}>
      <div className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] block md:contents">
        <div className="static box-content caret-black min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] basis-auto grow-0 shrink min-h-0 md:basis-0 md:grow md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:w-px">
          <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row h-auto justify-normal min-w-0 gap-y-[normal] w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:h-min md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] bg-none max-w-none rounded-none md:content-start md:items-start md:bg-[linear-gradient(136deg,rgb(138,165,255)_-94%,rgb(0,0,0)_70%)] md:gap-x-11 md:justify-start md:max-w-[540px] md:min-w-[280px] md:gap-y-11 md:overflow-hidden md:p-px md:rounded-2xl">
            <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] [align-items:normal] bg-none gap-x-[normal] h-auto gap-y-[normal] rounded-none md:content-center md:items-center md:bg-[radial-gradient(96%_96%_at_16%_21.8%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] md:gap-x-8 md:h-min md:justify-center md:gap-y-8 md:p-8 md:rounded-2xl">
              <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] [align-items:normal] gap-x-[normal] h-auto gap-y-[normal] z-auto md:content-start md:items-start md:gap-x-4 md:h-min md:justify-center md:gap-y-4 md:z-[2] md:overflow-hidden">
                <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <p className="text-black text-base box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-white md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.32px] md:leading-[25.6px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">
                    {testimonialText}
                  </p>
                </div>
                <div className="static box-content caret-black shrink min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="[align-items:normal] box-content caret-black gap-x-[normal] block gap-y-[normal] md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:gap-x-2 md:gap-y-2">
                    <div className="box-content caret-black min-h-0 min-w-0 md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] text-black text-base font-normal md:text-violet-100/70 md:font-medium md:aspect-auto">
                      {rating}
                    </div>
                    <div className="box-content caret-black gap-x-[normal] block min-h-0 min-w-0 gap-y-[normal] md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:gap-x-1 md:gap-y-1">
                      {[...Array(fullStars)].map((_, index) => (
                        <img
                          key={`star-${index}`}
                          src={starIcon}
                          alt="Icon"
                          className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-[18px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                        />
                      ))}
                      {hasHalfStar && halfStarIcon && (
                        <img
                          src={halfStarIcon}
                          alt="Icon"
                          className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-[18px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="static [align-items:normal] box-content caret-black block shrink h-auto justify-normal min-h-0 min-w-0 w-auto z-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:shrink-0 md:h-min md:justify-between md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[2] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:flex md:basis-0 md:grow md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto rounded-none md:relative md:aspect-square md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[100%]">
                    <div className="static box-content caret-black rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[100%] md:inset-0">
                      <img
                        {...(userImageSizes && { sizes: userImageSizes })}
                        src={userImageUrl}
                        alt={userImageAlt}
                        className={userImageClassName}
                      />
                    </div>
                  </div>
                  <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-0.5 md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-min md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <p className="text-black text-base box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-white md:text-sm md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.28px] md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">
                        {userName}
                      </p>
                    </div>
                    <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 opacity-100 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:opacity-60 md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <p className="text-black text-base box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-white md:text-sm md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.28px] md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">
                        {userTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
