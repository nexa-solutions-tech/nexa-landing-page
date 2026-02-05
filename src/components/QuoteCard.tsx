import { Card } from "./Card";

interface QuoteCardProps {
  icon?: string;
}

export const QuoteCard = ({
  icon = "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-16.svg",
}: QuoteCardProps) => {
  return (
    <div className="hidden md:flex relative basis-0 grow shrink-0 max-w-[440px] min-w-[280px] w-px">
      <Card
        variant="default"
        padding="lg"
        className="h-[230px]"
        innerClassName="items-center justify-center"
      >
        <div className="relative w-[123px] h-[123px] opacity-10">
          <img
            src={icon}
            alt=""
            className="w-full h-full text-indigo-400"
          />
        </div>
      </Card>
    </div>
  );
};
