import { ColumnHeader } from "../../../Components/Ui/Containers";

export const BoardLayout = () => {
  return (
    <div className="w-full h-full flex flex-row-reverse gap-[10px]">
      <ColumnHeader
        color="yellow"
        onAdd={() => {}}
        onArchive={() => {}}
        onDelete={() => {}}
        onEdit={() => {}}
        name="hello"
        count={3}
      />
    </div>
  );
};
