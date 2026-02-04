import { TestimonialsHeader } from "@/sections/Testimonials/components/TestimonialsHeader";
import { FadeIn } from "@/components/FadeIn";
import { TestimonialCard } from "./components/TestimonialCard";

export const Testimonials = () => {
  return (
    <section className="relative content-center items-center box-border caret-transparent gap-x-11 flex flex-col shrink-0 h-min justify-center gap-y-11 w-full overflow-hidden px-[18px] py-20 md:px-10 md:py-[100px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-11 flex flex-col shrink-0 flex-wrap h-min justify-start max-w-[1200px] gap-y-11 w-full">
        <FadeIn
          direction="up"
          className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center gap-y-6 w-full z-[3]"
        >
          <TestimonialsHeader />
        </FadeIn>
        <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 flex-wrap h-min justify-center max-w-[1120px] gap-y-6 w-full z-[2] md:flex-row">
          <FadeIn direction="up" delay={0.1} className="contents">
            <TestimonialCard
              testimonialText="Highly intuitive and polished. It's everything we needed and more!"
              rating="5.0"
              starIcon="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-15.svg"
              userImageUrl="https://c.animaapp.com/mkvwf206SqHHjG/assets/27.png"
              userImageAlt="user pic"
              userImageSizes="40px"
              userImageClassName="box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_1024_/_1024] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[100%]"
              userName="Alex jonas"
              userTitle="JS Marketing"
            />
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="contents">
            <TestimonialCard
              testimonialText="This is truly Incredible and have saved us countless hours!"
              rating="5.0"
              starIcon="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-15.svg"
              userImageUrl="https://c.animaapp.com/mkvwf206SqHHjG/assets/19.png"
              userImageAlt=""
              userName="John Robert"
              userTitle="SM Strategy"
            />
          </FadeIn>
          <FadeIn direction="up" delay={0.3} className="contents">
            <div className="static box-content caret-black basis-auto grow-0 shrink max-w-none min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:basis-0 md:grow md:shrink-0 md:max-w-[440px] md:min-h-[auto] md:min-w-[280px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static [align-items:normal] bg-none box-content caret-black gap-x-[normal] block flex-row h-auto justify-normal max-w-none min-w-0 gap-y-[normal] w-auto rounded-none md:relative md:content-start md:items-start md:aspect-auto md:bg-[linear-gradient(136deg,rgb(138,165,255)_-94%,rgb(0,0,0)_70%)] md:box-border md:caret-transparent md:gap-x-11 md:flex md:flex-col md:h-[230px] md:justify-start md:max-w-full md:min-w-[280px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-11 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-px md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl">
                <div className="static [align-items:normal] bg-none box-content caret-black gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-[radial-gradient(96%_96%_at_16%_21.8%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] md:box-border md:caret-transparent md:gap-x-8 md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-px md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-8 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:p-8 md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl">
                  <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 opacity-100 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[123px] md:min-h-[auto] md:min-w-[auto] md:opacity-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[123px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <img
                        src="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-16.svg"
                        alt="Icon"
                        className="text-black box-content caret-black block shrink h-auto align-middle w-auto md:text-indigo-400 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.4} className="contents">
            <div className="static box-content caret-black basis-auto grow-0 shrink max-w-none min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:basis-0 md:grow md:shrink-0 md:max-w-[440px] md:min-h-[auto] md:min-w-[280px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static [align-items:normal] bg-none box-content caret-black gap-x-[normal] block flex-row h-auto justify-normal max-w-none min-w-0 gap-y-[normal] w-auto rounded-none md:relative md:content-start md:items-start md:aspect-auto md:bg-[linear-gradient(136deg,rgb(138,165,255)_-94%,rgb(0,0,0)_70%)] md:box-border md:caret-transparent md:gap-x-11 md:flex md:flex-col md:h-[230px] md:justify-start md:max-w-full md:min-w-[280px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-11 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-px md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl">
                <div className="static [align-items:normal] bg-none box-content caret-black gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-[radial-gradient(96%_96%_at_16%_21.8%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] md:box-border md:caret-transparent md:gap-x-8 md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-px md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-8 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:p-8 md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl">
                  <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 opacity-100 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[123px] md:min-h-[auto] md:min-w-[auto] md:opacity-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[123px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <img
                        src="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-16.svg"
                        alt="Icon"
                        className="text-black box-content caret-black block shrink h-auto align-middle w-auto md:text-indigo-400 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.5} className="contents">
            <TestimonialCard
              testimonialText="Pure brilliance! This has streamlined our workflow massively."
              rating="4.8"
              starIcon="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-15.svg"
              halfStarIcon="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-17.svg"
              userImageUrl="https://c.animaapp.com/mkvwf206SqHHjG/assets/1.avif"
              userImageAlt=""
              userImageClassName="box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_382_/_512] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[100%]"
              userName="Maggie Hue"
              userTitle="BS Growth Ceo"
            />
          </FadeIn>
          <FadeIn direction="up" delay={0.6} className="contents">
            <TestimonialCard
              testimonialText="A top-notch solution! It's been transformative for our entire team."
              rating="5.0"
              starIcon="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-15.svg"
              userImageUrl="https://c.animaapp.com/mkvwf206SqHHjG/assets/46.png"
              userImageAlt="user pic"
              userImageSizes="40px"
              userImageClassName="box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_3456_/_4028] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[100%]"
              userName="Tappo kao"
              userTitle="PO Marketing"
            />
          </FadeIn>
          <FadeIn direction="up" delay={0.7} className="contents">
            <TestimonialCard
              testimonialText="Amazing product! It’s made our processes seamless and effective."
              rating="5.0"
              starIcon="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-15.svg"
              userImageUrl="https://c.animaapp.com/mkvwf206SqHHjG/assets/31.jpg"
              userImageAlt="user pic"
              userImageSizes="40px"
              userImageClassName="box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_3265_/_4898] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[100%]"
              userName="jack hanma"
              userTitle="JK Finance"
              containerClassName="relative content-center items-center shadow-[rgba(41,52,255,0.3)_0px_1px_35px_0px] box-border caret-transparent gap-x-6 flex basis-auto grow-0 shrink-0 h-min justify-center max-w-[440px] min-w-[280px] gap-y-6 w-full overflow-hidden md:basis-0 md:grow md:w-px"
            />
          </FadeIn>
          <FadeIn direction="up" delay={0.8} className="contents">
            <TestimonialCard
              testimonialText="Incredible design and functionality! This has exceeded our expectations."
              rating="5.0"
              starIcon="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-15.svg"
              userImageUrl="https://c.animaapp.com/mkvwf206SqHHjG/assets/32.png"
              userImageAlt=""
              userImageSizes="40px"
              userImageClassName="box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_2048_/_2048] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[100%]"
              userName="John Robert"
              userTitle="JO Strategy"
              containerClassName="relative content-center items-center shadow-[rgba(41,52,255,0.3)_0px_1px_35px_0px] box-border caret-transparent gap-x-6 flex basis-auto grow-0 shrink-0 h-min justify-center max-w-[440px] min-w-[280px] gap-y-6 w-full overflow-hidden md:basis-0 md:grow md:w-px"
            />
          </FadeIn>
          <FadeIn direction="up" delay={0.9} className="contents">
            <div className="static box-content caret-black basis-auto grow-0 shrink max-w-none min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:basis-0 md:grow md:shrink-0 md:max-w-[440px] md:min-h-[auto] md:min-w-[280px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static [align-items:normal] bg-none box-content caret-black gap-x-[normal] block flex-row h-auto justify-normal max-w-none min-w-0 gap-y-[normal] w-auto rounded-none md:relative md:content-start md:items-start md:aspect-auto md:bg-[linear-gradient(136deg,rgb(138,165,255)_-94%,rgb(0,0,0)_70%)] md:box-border md:caret-transparent md:gap-x-11 md:flex md:flex-col md:h-[230px] md:justify-start md:max-w-full md:min-w-[280px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-11 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-px md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl">
                <div className="static [align-items:normal] bg-none box-content caret-black gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-[radial-gradient(96%_96%_at_16%_21.8%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] md:box-border md:caret-transparent md:gap-x-8 md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-px md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-8 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:p-8 md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl">
                  <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 opacity-100 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[123px] md:min-h-[auto] md:min-w-[auto] md:opacity-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[123px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <img
                        src="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-16.svg"
                        alt="Icon"
                        className="text-black box-content caret-black block shrink h-auto align-middle w-auto md:text-indigo-400 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <div className="absolute bg-[radial-gradient(63.6719%_63.6719%,rgb(138,165,255)_0%,rgb(0,0,0)_100%)] box-border caret-transparent shrink-0 h-1 left-[calc(50%_-_640px)] opacity-[0.14] w-[1280px] z-[1] top-0 md:w-screen"></div>
      <div className="absolute bg-[radial-gradient(50%_50%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] bottom-[-249px] box-border caret-transparent shrink-0 h-[378px] left-[calc(50%_-_300px)] rotate-[-12.999997801129437deg] w-[600px] z-[1] rounded-[10px] md:h-[499px] md:left-[calc(50%_-_396.5px)] md:w-[793px]"></div>
    </section>
  );
};
