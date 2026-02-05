interface TestimonialCardProps {
  text: string;
  rating: number;
  starIcon: string;
  halfStarIcon?: string;
  user: {
    name: string;
    title: string;
    imageUrl: string;
    imageAlt?: string;
  };
}

const StarRating = ({
  rating,
  starIcon,
  halfStarIcon,
}: {
  rating: number;
  starIcon: string;
  halfStarIcon?: string;
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="hidden md:flex items-center gap-2">
      <span className="text-violet-100/70 font-medium">
        {rating.toFixed(1)}
      </span>
      <div className="flex gap-1">
        {[...Array(fullStars)].map((_, index) => (
          <img
            key={`star-${index}`}
            src={starIcon}
            alt=""
            className="w-[18px] h-[18px]"
          />
        ))}
        {hasHalfStar && halfStarIcon && (
          <img src={halfStarIcon} alt="" className="w-[18px] h-[18px]" />
        )}
      </div>
    </div>
  );
};

const UserInfo = ({
  name,
  title,
  imageUrl,
  imageAlt = "",
}: {
  name: string;
  title: string;
  imageUrl: string;
  imageAlt?: string;
}) => (
  <div className="hidden md:flex items-center gap-3 w-full">
    <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col gap-0.5 min-w-0 flex-1">
      <p className="text-white text-sm tracking-[-0.28px] leading-[22.4px] font-inter">
        {name}
      </p>
      <p className="text-white/60 text-sm tracking-[-0.28px] leading-[22.4px] font-inter">
        {title}
      </p>
    </div>
  </div>
);

export const TestimonialCard = ({
  text,
  rating,
  starIcon,
  halfStarIcon,
  user,
}: TestimonialCardProps) => {
  return (
    <div className="hidden md:flex relative basis-0 grow shrink-0 min-h-[278px] max-w-[440px] min-w-[280px] w-px rounded-2xl shadow-[rgba(41,52,255,0.3)_0px_1px_35px_0px]">
      <div className="relative flex flex-col w-full overflow-hidden rounded-2xl bg-[linear-gradient(136deg,rgb(138,165,255)_-94%,rgb(0,0,0)_70%)] p-px">
        <div className="relative flex flex-col w-full h-full rounded-2xl bg-[radial-gradient(96%_96%_at_16%_21.8%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] p-8">
          <div className="flex flex-col z-[2] justify-between h-full">
            <div className="flex flex-col gap-8 w-full justify-start z-[2]">
              {/* Content */}
              <div className="flex flex-col gap-4">
                <p className="text-white text-base tracking-[-0.32px] leading-[25.6px] font-inter">
                  {text}
                </p>
                <StarRating
                  rating={rating}
                  starIcon={starIcon}
                  halfStarIcon={halfStarIcon}
                />
              </div>
            </div>
            
            {/* User */}
            <UserInfo {...user} />
          </div>
        </div>
      </div>
    </div>
  );
};
