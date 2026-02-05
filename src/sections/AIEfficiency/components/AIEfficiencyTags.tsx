import { IconTag } from "@/components/IconTag";
import { TagDivider } from "@/components/TagDivider";

export const AIEfficiencyTags = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-8 flex shrink-0 flex-wrap h-min justify-center gap-y-8 w-full z-[4] overflow-hidden">
      <IconTag icon="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-29.svg">
        Análise Inteligente
      </IconTag>
      <TagDivider />
      <IconTag icon="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-30.svg">
        Colaboração em Tempo Real
      </IconTag>
      <TagDivider />
      <IconTag icon="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-31.svg">
        Priorização de Tarefas
      </IconTag>
    </div>
  );
};