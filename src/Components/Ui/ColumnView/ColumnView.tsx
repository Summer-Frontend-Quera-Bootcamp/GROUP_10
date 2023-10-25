import { ColumnHeader } from "../Containers";
const ColumnView = () => {
  return (
    <div className="flex flex-row-reverse gap-x-s ">
      <ColumnHeader
        color="orange"
        onAdd={() => {}}
        onArchive={() => {}}
        onDelete={() => {}}
        onEdit={() => {}}
        name="Open"
        count={3}
      />
      <ColumnHeader
        color="blue"
        onAdd={() => {}}
        onArchive={() => {}}
        onDelete={() => {}}
        onEdit={() => {}}
        name="In Progress"
        count={6}
      />
      <div>
        <ColumnHeader
          color="yellow"
          onAdd={() => {}}
          onArchive={() => {}}
          onDelete={() => {}}
          onEdit={() => {}}
          name="Pending"
          count={8}
        />
      </div>
    </div>
  );
};

export default ColumnView;
